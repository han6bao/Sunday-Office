/* Tiny runtime for the Sunday Office landing: renders the page template from
   component state and patches the DOM in place on every setState. */
(function () {
  var HOLE = /\{\{([^}]+)\}\}/g;
  var ONE = /^\{\{([^}]+)\}\}$/;

  function get(path, scope) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    var parts = path.split('.'), o = scope;
    for (var i = 0; i < parts.length; i++) { if (o == null) return undefined; o = o[parts[i]]; }
    return o;
  }
  function str(v) { return v == null || v === false ? '' : String(v); }
  function interp(s, scope, attr) { return s.replace(HOLE, function (_, p) { var v = get(p, scope); return attr && typeof v === 'boolean' ? String(v) : str(v); }); }
  function hasHole(n) {
    if (n.nodeType === 3) return n.nodeValue.indexOf('{{') >= 0;
    if (n.nodeType !== 1) return false;
    var tag = n.tagName.toLowerCase();
    if (tag === 'sc-if' || tag === 'sc-for') return true;
    for (var i = 0; i < n.attributes.length; i++) if (n.attributes[i].value.indexOf('{{') >= 0) return true;
    for (var c = n.firstChild; c; c = c.nextSibling) if (hasHole(c)) return true;
    return false;
  }

  var sid = 0;
  function mark(n) { // tag static element subtrees so later renders leave them alone
    if (n.nodeType !== 1) return;
    if (!hasHole(n)) { n.setAttribute('data-s', 's' + (++sid)); return; }
    for (var c = n.firstChild; c; c = c.nextSibling) mark(c);
  }

  var EVT = { onclick: 'click', onsubmit: 'submit', onchange: 'change', oninput: 'input' };
  var reg = {}, regN = 0;

  function render(n, scope, out) {
    if (n.nodeType === 3) { out.push(document.createTextNode(n.nodeValue.indexOf('{{') >= 0 ? interp(n.nodeValue, scope) : n.nodeValue)); return; }
    if (n.nodeType !== 1) return;
    if (n.hasAttribute('data-s')) { out.push(document.importNode(n, true)); return; }
    var tag = n.tagName.toLowerCase(), c;
    if (tag === 'sc-if') {
      var m = ONE.exec(n.getAttribute('value') || '');
      if (m && get(m[1], scope)) for (c = n.firstChild; c; c = c.nextSibling) render(c, scope, out);
      return;
    }
    if (tag === 'sc-for') {
      var lm = ONE.exec(n.getAttribute('list') || ''), as = n.getAttribute('as');
      var list = lm ? get(lm[1], scope) : null;
      (list || []).forEach(function (item, i) {
        var s = Object.create(scope); s[as] = item; s[as + 'Index'] = i;
        for (c = n.firstChild; c; c = c.nextSibling) render(c, s, out);
      });
      return;
    }
    var el = (n.namespaceURI === 'http://www.w3.org/1999/xhtml' ? document.createElement(n.localName) : document.createElementNS(n.namespaceURI, n.localName));
    var selVal = null;
    for (var i = 0; i < n.attributes.length; i++) {
      var a = n.attributes[i], name = a.name, v = a.value;
      if (name.indexOf('hint-placeholder') === 0) continue;
      var lname = name.toLowerCase();
      if (EVT[lname]) {
        var hm = ONE.exec(v); if (!hm) continue;
        var fn = get(hm[1], scope); if (typeof fn !== 'function') continue;
        var type = EVT[lname];
        if (type === 'change' && tag !== 'select') type = 'input';
        var key = 'h' + (++regN); reg[key] = fn;
        el.setAttribute('data-on-' + type, key);
        continue;
      }
      var val = v.indexOf('{{') >= 0 ? interp(v, scope, true) : v;
      if (tag === 'select' && name === 'value') { selVal = val; continue; }
      if (tag === 'textarea' && name === 'value') { el.textContent = val; continue; }
      el.setAttribute(name, val);
    }
    var kids = [];
    for (c = n.firstChild; c; c = c.nextSibling) render(c, scope, kids);
    kids.forEach(function (k) { el.appendChild(k); });
    if (selVal !== null) Array.prototype.forEach.call(el.querySelectorAll('option'), function (o) { if (o.getAttribute('value') === selVal) o.setAttribute('selected', ''); });
    out.push(el);
  }


  function keyOf(n) { return n.nodeType === 1 ? (n.getAttribute('data-s') || n.id || null) : null; }
  function same(a, b) { return a.nodeType === b.nodeType && (a.nodeType !== 1 || (a.tagName === b.tagName && keyOf(a) === keyOf(b))); }
  function syncAttrs(from, to) {
    var i, a;
    for (i = from.attributes.length - 1; i >= 0; i--) { a = from.attributes[i]; if (!to.hasAttribute(a.name)) from.removeAttribute(a.name); }
    for (i = 0; i < to.attributes.length; i++) { a = to.attributes[i]; if (from.getAttribute(a.name) !== a.value) from.setAttribute(a.name, a.value); }
  }
  function patchEl(from, to) {
    var s = to.getAttribute('data-s');
    if (s && from.getAttribute('data-s') === s) return;
    var tag = from.tagName;
    if ((tag === 'INPUT' || tag === 'TEXTAREA') && from === document.activeElement) {
      for (var i = 0; i < to.attributes.length; i++) if (to.attributes[i].name !== 'value') from.setAttribute(to.attributes[i].name, to.attributes[i].value);
      return;
    }
    syncAttrs(from, to);
    if (tag === 'INPUT') { var v = to.getAttribute('value') || ''; if (from.value !== v) from.value = v; return; }
    if (tag === 'TEXTAREA') { if (from.value !== to.textContent) from.value = to.textContent; return; }
    patchKids(from, to);
    if (tag === 'SELECT') { var o = to.querySelector('option[selected]'); var sv = o ? o.getAttribute('value') : ''; if (from.value !== sv) from.value = sv; }
  }
  function patchKids(from, to) {
    var cur = from.firstChild, t = to.firstChild;
    while (t) {
      var nextT = t.nextSibling, k = keyOf(t), match = null;
      if (k) { for (var c = cur; c; c = c.nextSibling) if (keyOf(c) === k && same(c, t)) { match = c; break; } }
      else if (cur && same(cur, t)) match = cur;
      if (match) {
        if (match !== cur) from.insertBefore(match, cur);
        if (t.nodeType === 1) patchEl(match, t); else if (match.nodeValue !== t.nodeValue) match.nodeValue = t.nodeValue;
        cur = match.nextSibling;
      } else {
        from.insertBefore(t, cur);
      }
      t = nextT;
    }
    while (cur) { var nx = cur.nextSibling; from.removeChild(cur); cur = nx; }
  }

  function DCLogic() { this.state = {}; }
  DCLogic.prototype.setState = function (patch) {
    var prev = this.state || {};
    this.state = Object.assign({}, prev, typeof patch === 'function' ? patch(prev) : patch);
    var self = this;
    if (!self._q) { self._q = true; Promise.resolve().then(function () { self._q = false; self._render(); if (self.componentDidUpdate) self.componentDidUpdate(); }); }
  };
  DCLogic.prototype._render = function () {
    reg = {}; regN = 0;
    var vals = this.renderVals ? this.renderVals() : {};
    var out = [];
    for (var c = this._tpl.firstChild; c; c = c.nextSibling) render(c, vals, out);
    var next = this._root.cloneNode(false);
    out.forEach(function (n) { next.appendChild(n); });
    patchKids(this._root, next);
  };

  ['click', 'input', 'change', 'submit'].forEach(function (type) {
    document.addEventListener(type, function (e) {
      var t = e.target; if (!t || !t.closest) return;
      var el = t.closest('[data-on-' + type + ']');
      if (!el) return;
      var fn = reg[el.getAttribute('data-on-' + type)];
      if (fn) fn(e);
    });
  });

  window.DCLogic = DCLogic;
  window.dcMount = function (Comp, tplEl, root) {
    var inert = document.implementation.createHTMLDocument('');
    var tpl = inert.createElement('div');
    tpl.appendChild(inert.importNode(tplEl.content, true));
    for (var c = tpl.firstChild; c; c = c.nextSibling) mark(c);
    var comp = new Comp();
    comp._tpl = tpl; comp._root = root;
    comp._render();
    if (comp.componentDidMount) comp.componentDidMount();
    return comp;
  };
})();
