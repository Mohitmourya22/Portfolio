import { motion } from "framer-motion";
export const Reveal = ({ children, d = 0, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: d }}>{children}</motion.div>
);
export const Section = ({ id, title, sub, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
    <Reveal className="mb-10 text-center sm:mb-12">
      <h2 className="text-3xl font-bold sm:text-4xl">{title.split(" ")[0]} <span className="grad">{title.split(" ").slice(1).join(" ")}</span></h2>
      {sub && <p className="mx-auto mt-3 max-w-xl text-muted">{sub}</p>}
    </Reveal>
    {children}
  </section>
);
