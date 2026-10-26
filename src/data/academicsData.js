// Result images/PDFs live in /public/results/ (semester-N-result.png / .pdf).
// Wrap text in **double stars** to highlight it in the card.
export const academicSummary = {
  degree: "B.Tech in Computer Science & Engineering",
  college: "Government Engineering College, Bilaspur (CSVTU, Bhilai)",
  batch: "2023 – 2027",
  cgpa: "7.58", // credit-weighted average of the 6 SPIs (127 credits); sheets show CPI blank
  totalMarks: "4278 / 6000",
  percentage: "71.3%",
  trend: "SPI rose **3 semesters in a row** — from **7.19** (Sem 3) to **8.14** (Sem 6).",
};

const s = (n, session, spi, marks, credits, highlights) => ({
  sem: n, session, spi, marks, credits, highlights,
  image: `/results/semester-${n}-result.png`,
  pdf: `/results/semester-${n}-result.pdf`,
});

export const semesters = [
  s(1, "Nov–Dec 2023", 7.67, 678, 24, [
    "**A+** in Language Lab and Workshop Practice Lab",
    "**A** in Programming for Problem Solving — **127/150**, best theory score of the semester",
    "Strong start with **24 credits** cleared in the first attempt",
  ]),
  s(2, "Apr–May 2024", 7.32, 710, 19, [
    "**A+** in Fundamentals of Computer Lab, **A** in Fundamentals of Computer (**123/150**)",
    "**Highest total (710/1000)** among the first four semesters",
    "**B+** in Engineering Graphics, Basic Electrical & Electronics and Physics Lab",
  ]),
  s(3, "Nov–Dec 2024", 7.19, 686, 21, [
    "First core CSE semester — **Data Structures, OS, Digital Electronics**",
    "**A+** in Operating Systems Lab (UNIX), **A** in DSA Lab and Software Lab (MATLAB)",
    "**B+** in Principles of Programming Languages — **111/150**",
  ]),
  s(4, "Apr–May 2025", 7.38, 690, 21, [
    "**B+** in Object Oriented Programming (Java) — **114/150** and Discrete Mathematics — **115/150**",
    "**A grade in all 4 labs** — Computer Organization, OOP (Java), DBMS and Virtual Lab",
    "Covered **DBMS, Algorithms Design & Analysis, Computer Architecture**",
  ]),
  s(5, "Nov–Dec 2025", 7.76, 735, 21, [
    "**A+** in Microprocessors Lab and **Project-I (Summer Internship / Industrial Training)**",
    "**B+** in Formal Languages & Automata Theory and Computer Graphics — **107/150** each",
    "**735/1000** — a big jump over the previous semester",
  ]),
  s(6, "Apr–May 2026", 8.14, 779, 21, [
    "**Best semester** — highest SPI **8.14** and highest total **779/1000**",
    "**A** in Data Structures and Algorithms — **123/150**; **A+** in Android Application Lab",
    "**B+** in Software Engineering, AI & Expert Systems and Internet of Things; **A or above in all 4 labs**",
  ]),
];
