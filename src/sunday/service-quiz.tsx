import { useState } from "react";
import { bookHref } from "./service-kit";

type Link = { t: string; h: string };
type Rec = { t: string; p: string; why: string; more?: Link };
type Who = { t: string; tip: string };
type How = { t: string; add: string; link?: Link };

export type QuizCfg = {
  need: string;
  kicker: string;
  title: string;
  sub: string;
  whoQ?: string;
  who?: Who[];
  whatQ: string;
  what: { t: string; rec: Rec }[];
  howQ: string;
  how: How[];
  note?: string;
};

export const WHO_BIZ: Who[] = [
  { t: "Food + drink", tip: "Food sells on photos. Close, warm shots of your best dishes do most of the work." },
  { t: "Beauty + wellness", tip: "People book on trust. Calm visuals and real faces help them say yes." },
  { t: "Creative or artist", tip: "Your look should be recognizable before anyone reads your name." },
  { t: "Service business", tip: "Clear beats flashy. Make it easy to understand what you do and to book you." },
  { t: "Shop or products", tip: "Show it in hand, in use and up close. People buy what they can picture owning." },
  { t: "Events", tip: "The night happens once. The visuals are what keep it alive afterwards." },
  { t: "Personal brand", tip: "You are the brand. Good photos of you and a consistent look carry everything." },
  { t: "Something else", tip: "We'll start with one clear goal and build from there." },
];

export function ServiceQuiz({ c }: { c: QuizCfg }) {
  const hasWho = !!c.who?.length;
  const total = hasWho ? 3 : 2;
  const [step, setStep] = useState(0);
  const [who, setWho] = useState<Who | null>(null);
  const [what, setWhat] = useState<{ t: string; rec: Rec } | null>(null);
  const [how, setHow] = useState<How | null>(null);
  const restart = () => { setWho(null); setWhat(null); setHow(null); setStep(1); };

  // step numbers: 1 = who (if any), then what, then how, then result
  const sWho = hasWho ? 1 : -1;
  const sWhat = hasWho ? 2 : 1;
  const sHow = sWhat + 1;
  const sRes = sHow + 1;
  const qn = step;

  const Q = ({ q, opts, val, pick }: { q: string; opts: string[]; val?: string; pick: (i: number) => void }) => (
    <div className="dq-card so-chapter-fade" key={step}>
      <div className="dq-top">
        <span className="fd-quiz-k">Question {qn} of {total}</span>
        <span className="dq-bar"><i style={{ width: `${(qn / total) * 100}%` }} /></span>
      </div>
      <p className="fd-quiz-t">{q}</p>
      <div className="dq-opts">
        {opts.map((o, i) => (
          <button key={o} type="button" className={"dq-opt sq-opt" + (val === o ? " is-on" : "")} onClick={() => pick(i)}>{o}</button>
        ))}
      </div>
      <button type="button" className="dq-back" onClick={() => setStep(step - 1)}>← Back</button>
    </div>
  );

  return (
    <section className="dq so-bw-sec sq" id="quiz" aria-label={c.title}>
      {step === 0 && (
        <button type="button" className="dq-intro" onClick={() => setStep(1)}>
          <span className="fd-quiz-k">{c.kicker}</span>
          <span className="fd-quiz-t">{c.title}</span>
          <span className="fd-quiz-d">{c.sub}</span>
          <span className="fd-quiz-b">Start the quiz <span aria-hidden="true">→</span></span>
        </button>
      )}

      {step === sWho && c.who && (
        <Q q={c.whoQ ?? "What kind of business are you?"} opts={c.who.map((x) => x.t)} val={who?.t} pick={(i) => { setWho(c.who![i]); setStep(sWhat); }} />
      )}
      {step === sWhat && (
        <Q q={c.whatQ} opts={c.what.map((x) => x.t)} val={what?.t} pick={(i) => { setWhat(c.what[i]); setStep(sHow); }} />
      )}
      {step === sHow && (
        <Q q={c.howQ} opts={c.how.map((x) => x.t)} val={how?.t} pick={(i) => { setHow(c.how[i]); setStep(sRes); }} />
      )}

      {step === sRes && what && (
        <div className="dq-card so-chapter-fade">
          <span className="fd-quiz-k">Where I'd start{who ? ` · for ${who.t.toLowerCase()}` : ""}</span>
          <p className="fd-quiz-t dq-head">{what.rec.t}</p>
          <p className="dq-para">{what.rec.why}</p>
          <dl className="dq-res">
            {how && (
              <div><dt>How we'd work</dt><dd className="sq-dd">{how.add}{how.link && <> <a href={how.link.h}>{how.link.t} →</a></>}</dd></div>
            )}
            {who && <div><dt>A tip for you</dt><dd className="sq-dd">{who.tip}</dd></div>}
            {c.note && <div><dt>Good to know</dt><dd className="sq-dd">{c.note}</dd></div>}
          </dl>
          <div className="dq-end">
            <a className="fd-quiz-b" href={bookHref(c.need, what.rec.t)}>Ask for pricing <span aria-hidden="true">→</span></a>
            {what.rec.more && <a className="sq-more" href={what.rec.more.h}>{what.rec.more.t} →</a>}
            <button type="button" className="dq-back" onClick={restart}>Retake the quiz</button>
          </div>
        </div>
      )}
    </section>
  );
}
