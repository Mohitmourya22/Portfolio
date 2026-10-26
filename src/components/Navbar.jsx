import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav } from "../data/siteData";

export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false);
  const link = (n) => (
    <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="transition hover:text-gold">{n}</a>
  );
  return (
    <header className="glass fixed inset-x-0 top-0 z-40 border-b border-pu/20">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-xl font-extrabold"><span className="grad">Mohit</span>.dev</a>
        <div className="hidden items-center gap-5 text-sm font-medium xl:flex">{nav.map(link)}</div>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="rounded-full border border-pu/40 p-2 text-gold transition hover:bg-pu/10">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="rounded-full border border-pu/40 p-2 xl:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-pu/20 xl:hidden">
            <div className="flex flex-col gap-4 p-5 font-medium">{nav.map(link)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
