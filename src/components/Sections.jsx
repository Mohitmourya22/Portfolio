import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, Code2, Trophy, ExternalLink, Github, Linkedin, Send, X, ZoomIn } from "lucide-react";
import { Reveal, Section } from "./ui";
import { achievements, experience, highlights, links, skills } from "../data/siteData";
import { projects } from "../data/projectsData";
import { certifications } from "../data/certificationsData";

export const About = () => (
  <Section id="about" title="About Me" sub="Learning, building and leading.">
    <div className="grid items-center gap-8 md:grid-cols-2">
      <Reveal>
        <p className="leading-relaxed text-muted">
          I&apos;m a final-year Computer Science &amp; Engineering student at <b className="text-fg">GEC Bilaspur</b> who loves turning ideas into
          full-stack products and AI/ML solutions. Beyond code, I take part in hackathons and lead community initiatives on campus.
        </p>
      </Reveal>
      <div className="grid grid-cols-2 gap-4">
        {highlights.map((h, i) => (
          <Reveal key={h} d={i * 0.08}><div className="card p-5 text-center font-semibold"><span className="grad">{h}</span></div></Reveal>
        ))}
      </div>
    </div>
  </Section>
);

export const Skills = () => (
  <Section id="skills" title="My Skills" sub="Technologies I work with.">
    <div className="grid gap-6 md:grid-cols-3">
      {Object.entries(skills).map(([cat, list], i) => (
        <Reveal key={cat} d={i * 0.1}>
          <div className="card h-full p-6">
            <h3 className="mb-4 text-lg font-bold text-gold">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {list.map((s) => <span key={s} className="rounded-full border border-pu/40 bg-pu/10 px-3 py-1 text-sm">{s}</span>)}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Projects = () => (
  <Section id="projects" title="Featured Projects" sub="Things I've built.">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal key={p.name} d={i * 0.08}>
          <div className="card flex h-full flex-col p-6">
            <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold">{p.tag}</span>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm text-muted">{p.desc}</p>
            <div className="mt-5 flex gap-3">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-p !px-4 !py-2 text-sm"><ExternalLink size={15} />Live</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-o !px-4 !py-2 text-sm"><Github size={15} />Code</a>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Certifications = () => {
  const [sel, setSel] = useState(null);
  const [broken, setBroken] = useState({});
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setSel(null);
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  useEffect(() => { document.body.style.overflow = sel ? "hidden" : ""; }, [sel]);
  const img = (c, cls) => broken[c.image]
    ? <div className={`flex items-center justify-center bg-gradient-to-br from-pu/30 to-gold/20 p-4 text-center font-bold ${cls}`}>{c.title}</div>
    : <img src={c.image} alt={c.title} loading="lazy" onError={() => setBroken((b) => ({ ...b, [c.image]: 1 }))} className={`object-cover ${cls}`} />;
  return (
    <Section id="certifications" title="My Certifications" sub="Click a card to view the certificate.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title + c.issuer} d={(i % 3) * 0.08}>
            <button onClick={() => setSel(c)} className="card group w-full overflow-hidden text-left">
              <div className="relative h-40 overflow-hidden">
                {img(c, "h-40 w-full transition duration-500 group-hover:scale-110")}
                <span className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100"><ZoomIn className="text-gold" /></span>
              </div>
              <div className="p-4">{c.tag && <span className="text-[11px] font-semibold uppercase tracking-wide text-gold">{c.tag}</span>}<h3 className="font-bold">{c.title}</h3><p className="text-sm text-gold">{c.issuer}</p><p className="text-xs text-muted">{c.date}</p>{c.details && <p className="mt-1 text-xs text-muted">{c.details}</p>}</div>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
            <button aria-label="Close" className="absolute right-5 top-5 rounded-full bg-pu p-2 text-white"><X /></button>
            <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl">
              {img(sel, "max-h-[80vh] w-full rounded-xl")}
              <p className="mt-3 text-center text-white">{sel.title} <span className="text-gold">· {sel.issuer}</span></p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export const Achievements = () => (
  <Section id="achievements" title="My Achievements" sub="Hackathons, competitions and recognitions.">
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((a, i) => (
        <Reveal key={a.title} d={(i % 3) * 0.08}>
          <div className="card h-full p-6">
            <Trophy className="mb-3 text-gold" />
            <h3 className="font-bold">{a.title}</h3>
            <p className="text-sm text-gold">{a.sub}{a.date && ` · ${a.date}`}</p>
            <p className="mt-2 text-sm text-muted">{a.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" title="Experience & Leadership">
    <div className="relative mx-auto max-w-3xl border-l-2 border-pu/50 pl-8">
      {experience.map((e, i) => (
        <Reveal key={e.role} d={i * 0.05} className="relative mb-8">
          <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full bg-gold ring-4 ring-pu/40" />
          <div className="card p-5">
            <h3 className="font-bold">{e.role}</h3><p className="text-sm text-gold">{e.org}{e.period && ` · ${e.period}`}</p><p className="mt-2 text-sm text-muted">{e.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const validate = (f) => {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email";
  if (f.message.trim().length < 10) e.message = "Message must be at least 10 characters";
  return e;
};

export const Contact = () => {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [err, setErr] = useState({});
  const [status, setStatus] = useState("");
  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate(f); setErr(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    try {
      const url = import.meta.env.VITE_FORM_ENDPOINT; // e.g. a Formspree URL
      if (url) { const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) }); if (!r.ok) throw 0; }
      setStatus("sent"); setF({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };
  const field = (k, label, area) => {
    const P = area ? "textarea" : "input";
    return (
      <label className="block text-sm font-medium">{label}
        <P rows={area ? 5 : undefined} type={k === "email" ? "email" : "text"} value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })}
          className="mt-1 w-full rounded-lg border border-pu/40 bg-card px-4 py-2.5 outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30" />
        {err[k] && <span className="text-xs text-red-500">{err[k]}</span>}
      </label>
    );
  };
  return (
    <Section id="contact" title="Get In Touch" sub="Have an opportunity or idea? Let's talk.">
      <Reveal>
        <form onSubmit={submit} noValidate className="card mx-auto max-w-xl space-y-4 p-6 hover:!transform-none">
          {field("name", "Name")}{field("email", "Email")}{field("message", "Message", true)}
          <button disabled={status === "sending"} className="btn btn-p w-full justify-center disabled:opacity-60"><Send size={18} />{status === "sending" ? "Sending..." : "Send Message"}</button>
          {status === "sent" && <p className="text-center text-sm text-green-500">Thanks! Your message has been sent.</p>}
          {status === "error" && <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>}
        </form>
      </Reveal>
    </Section>
  );
};

export const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const s = () => setShow(scrollY > 400);
    addEventListener("scroll", s); return () => removeEventListener("scroll", s);
  }, []);
  const social = [[Linkedin, links.linkedin, "LinkedIn"], [Github, links.github, "GitHub"], [Code2, links.gfg, "GeeksforGeeks"]];
  return (
    <footer className="border-t border-pu/20 py-8 text-center">
      <p className="mb-4 text-sm font-semibold text-gold">Designed & Developed with ❤️ by Mohit Kumar Mourya</p>
      <div className="mb-4 flex justify-center gap-4">
        {social.map(([I, href, l]) => (
          <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l} className="rounded-full border border-pu/40 p-3 transition hover:border-gold hover:text-gold"><I size={20} /></a>
        ))}
      </div>
      <p className="text-sm text-muted">© {new Date().getFullYear()} Mohit Kumar Mourya. All rights reserved.</p>
      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
            className="btn btn-p fixed bottom-6 right-6 z-40 !rounded-full !p-3"><ArrowUp size={20} /></motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
