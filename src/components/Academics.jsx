import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, FileText, GraduationCap, X } from "lucide-react";
import { Reveal, Section } from "./ui";
import { academicSummary, semesters } from "../data/academicsData";

// Turns "plain **bold** plain" into highlighted JSX.
const hl = (text) =>
  text.split("**").map((part, i) =>
    i % 2 ? <b key={i} className="font-semibold text-gold">{part}</b> : part
  );

export const Academics = () => {
  // const [sel, setSel] = useState(null);
  // useEffect(() => {
  //   const k = (e) => e.key === "Escape" && setSel(null);
  //   addEventListener("keydown", k);
  //   return () => removeEventListener("keydown", k);
  // }, []);
  // useEffect(() => { document.body.style.overflow = sel ? "hidden" : ""; }, [sel]);

  const stats = [
    ["CGPA", academicSummary.cgpa],
    ["Total Marks", academicSummary.totalMarks],
    ["Overall", academicSummary.percentage],
    ["Semesters", "6 / 8 done"],
  ];
  const maxSpi = 10;

  return (
    <Section id="academics" title="My Academics" sub="Semester-wise results. Click a card to view the official result sheet.">
      <Reveal>
        <div className="card mx-auto mb-8 max-w-4xl p-6 hover:!transform-none">
          <div className="mb-5 flex items-start gap-3">
            <GraduationCap className="mt-1 shrink-0 text-gold" />
            <div>
              <h3 className="font-bold">{academicSummary.degree}</h3>
              <p className="text-sm text-gold">{academicSummary.college} · {academicSummary.batch}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([l, v]) => (
              <div key={l} className="rounded-xl border border-pu/30 bg-pu/10 p-3 text-center">
                <p className="text-lg font-extrabold text-gold sm:text-xl">{v}</p>
                <p className="text-xs text-muted">{l}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">SPI trend</p>
            <div className="flex h-32 items-end gap-2 sm:gap-4">
              {semesters.map((x, i) => (
                <div key={x.sem} className="flex h-full flex-1 flex-col items-center justify-end">
                  <span className="mb-1 text-xs font-bold text-gold">{x.spi.toFixed(2)}</span>
                  <motion.div
                    initial={{ height: 0 }} whileInView={{ height: `${(x.spi / maxSpi) * 70}%` }}
                    viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08 }}
                    className="w-full max-w-12 rounded-t-md bg-gold/80" />
                  <span className="mt-1 text-[11px] text-muted">Sem {x.sem}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm text-muted">{hl(academicSummary.trend)}</p>
          <p className="mt-1 text-[11px] text-muted">CGPA is calculated from the semester SPIs weighted by credits (127 credits).</p>
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {semesters.map((x, i) => (
          <Reveal key={x.sem} d={(i % 3) * 0.08}>
            <div className="card flex h-full w-full flex-col p-6 text-left">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">{x.session}</span>
                  <h3 className="text-xl font-bold">Semester {x.sem}</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-gold">{x.spi.toFixed(2)}</p>
                  <p className="text-[11px] text-muted">SPI</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted"><b className="text-fg">{x.marks}/1000</b> marks · <b className="text-fg">{x.credits}</b> credits</p>
              <ul className="mt-3 flex-1 space-y-2 text-sm text-muted">
                {x.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>{hl(h)}</span></li>
                ))}
              </ul>
              {/* <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold"><FileText size={16} />View result sheet</span> */}
            </div>
          </Reveal>
        ))}
      </div>

      {/* <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
            <button aria-label="Close" className="absolute right-5 top-5 rounded-full bg-pu p-2 text-white"><X /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-3xl flex-col">
              <div className="overflow-auto rounded-xl bg-white" style={{ maxHeight: "78vh" }}>
                <img src={sel.image} alt={`Semester ${sel.sem} result`} className="w-full min-w-[720px] max-w-none sm:min-w-0" />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-white">
                <span>Semester {sel.sem} <span className="text-gold">· SPI {sel.spi.toFixed(2)}</span></span>
                <a href={sel.pdf} target="_blank" rel="noreferrer" className="btn btn-o !px-4 !py-2 text-sm !text-white"><ExternalLink size={15} />Open PDF</a>
                <a href={sel.pdf} download className="btn btn-p !px-4 !py-2 text-sm"><Download size={15} />Download</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </Section>
  );
};
