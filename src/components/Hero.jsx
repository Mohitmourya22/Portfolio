import { motion } from "framer-motion";
import { Award, Download, Eye, FolderGit2 } from "lucide-react";

const Ring = ({ size, dur, rev, from, to }) => (
  <motion.div className="absolute rounded-full" style={{ width: size, height: size, border: "2px solid transparent",
    background: `conic-gradient(from 0deg, transparent, ${from}, ${to}, transparent) border-box`,
    WebkitMask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude",
    filter: `drop-shadow(0 0 10px ${from})` }}
    animate={{ rotate: rev ? -360 : 360 }} transition={{ duration: dur, repeat: Infinity, ease: "linear" }} />
);

const code = [[126,80,70,"#f59e0b"],[140,94,90,"#8b5cf6"],[140,108,50,"#a78bfa"],[126,122,100,"#f59e0b"],[140,136,60,"#8b5cf6"],[126,150,40,"#a78bfa"]];

const Avatar = () => (
  <svg viewBox="0 0 400 400" className="relative z-10 w-[78%]" role="img" aria-label="Male software developer at his workspace">
    <rect x="20" y="318" width="360" height="14" rx="7" className="fill-pu" />
    <rect x="40" y="332" width="12" height="50" rx="4" className="fill-pu" opacity=".6" /><rect x="348" y="332" width="12" height="50" rx="4" className="fill-pu" opacity=".6" />
    <rect x="110" y="60" width="180" height="120" rx="10" fill="#111" className="stroke-pu" strokeWidth="4" />
    {code.map(([x, y, w], i) => <rect key={i} x={x} y={y} width={w} height="6" rx="3" className={i % 2 ? "fill-pu" : "fill-white"} opacity=".85" />)}
    <rect x="193" y="180" width="14" height="22" className="fill-pu" opacity=".7" /><rect x="170" y="200" width="60" height="6" rx="3" className="fill-pu" opacity=".7" />
    <path d="M96 318 C96 250 140 226 200 226 C260 226 304 250 304 318 Z" fill="#3a6ea5" />
    <path d="M178 228 L200 290 L222 228 Z" fill="#f4f4f4" />
    <path d="M200 232 L200 318" stroke="#2a527f" strokeWidth="3" />
    <rect x="140" y="262" width="28" height="24" rx="3" fill="none" stroke="#2a527f" strokeWidth="2.5" /><rect x="232" y="262" width="28" height="24" rx="3" fill="none" stroke="#2a527f" strokeWidth="2.5" />
    <rect x="182" y="196" width="36" height="36" rx="14" fill="#bf805f" />
    <path d="M158 151 C158 125 177 112 201 112 C226 112 242 128 242 153 L239 177 C236 204 219 218 200 218 C181 218 164 203 161 178 Z" fill="#d49a78" stroke="#a96f54" strokeWidth="2" />
    <path d="M157 164 C147 133 157 105 183 94 C208 82 237 96 246 119 C252 136 247 153 242 164 C239 145 228 134 213 130 C194 135 176 128 165 118 C163 137 164 151 157 164Z" fill="#17151b" />
    <path d="M163 119 C173 93 196 84 219 91 C231 95 241 104 246 117 C225 108 205 109 191 119 C180 127 171 136 163 145 C159 136 160 126 163 119Z" fill="#211e27" />
    <path d="M178 157 Q187 151 195 157" stroke="#392820" strokeWidth="3" fill="none" strokeLinecap="round" /><path d="M206 157 Q215 151 223 157" stroke="#392820" strokeWidth="3" fill="none" strokeLinecap="round" />
    <ellipse cx="187" cy="165" rx="3.5" ry="4" fill="#201a19" /><ellipse cx="215" cy="165" rx="3.5" ry="4" fill="#201a19" />
    <path d="M201 166 Q198 179 202 182" stroke="#ae7255" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M191 202 Q200 206 209 202" stroke="#874e43" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <path d="M165 190 C171 211 184 222 200 222 C216 222 230 211 236 190 C234 216 218 230 200 230 C182 230 167 216 165 190Z" fill="#b8795b" opacity=".45" />
    <rect x="130" y="296" width="140" height="22" rx="8" fill="#222" className="stroke-pu" strokeWidth="2" />
    <ellipse cx="146" cy="296" rx="22" ry="12" fill="#e0a87c" /><ellipse cx="254" cy="296" rx="22" ry="12" fill="#e0a87c" />
    <rect x="320" y="284" width="30" height="34" rx="6" className="fill-pu" /><path d="M350 292h10a8 8 0 010 16h-10" className="stroke-pu" strokeWidth="4" fill="none" />
    <motion.path d="M328 270q4-10 0-18M340 270q4-10 0-18" className="stroke-pu" strokeWidth="3" fill="none" strokeLinecap="round"
      animate={{ opacity: [0.2, 1, 0.2], y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />
  </svg>
);

const words = ["Full-Stack", "Developer", "&", "AI/ML", "Enthusiast"];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-8 px-4 pb-12 pt-24 sm:gap-10 sm:px-5 sm:pb-16 sm:pt-28 lg:grid-cols-2">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-pu/25 blur-3xl" />
      <div className="relative">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 font-semibold text-gold">Hi, I&apos;m Mohit Kumar Mourya 👋</motion.p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          {words.map((w, i) => (
            <motion.span key={w} className={`mr-3 inline-block ${i > 2 ? "grad" : ""}`}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i, duration: 0.5 }}>{w}</motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-5 max-w-lg text-muted">
          Final-year CSE student at GEC Bilaspur, Chhattisgarh, building scalable web apps and intelligent AI-powered solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-p"><FolderGit2 size={18} />View Projects</a>
          <a href="#certifications" className="btn btn-o"><Award size={18} />Certifications</a>
          <a href="/certs/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-o"><Eye size={18} />View Resume</a>
          {/* <a href="/certs/resume.pdf" download aria-label="Download resume" title="Download resume" className="btn btn-o !px-3.5"><Download size={18} /></a> */}
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
        className="relative mx-auto flex aspect-square w-full max-w-[min(100%,26rem)] items-center justify-center">
        <Ring size="100%" dur={14} from="var(--pu)" to="var(--pu)" />
        <Ring size="86%" dur={20} rev from="var(--pu)" to="var(--pu)" />
        <Ring size="72%" dur={9} from="var(--pu)" to="var(--pu)" />
        <div className="absolute h-[62%] w-[62%] rounded-full bg-gradient-to-br from-pu/30 to-gold/20 blur-2xl" />
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="flex w-full justify-center">
          <Avatar />
        </motion.div>
      </motion.div>
    </section>
  );
}
