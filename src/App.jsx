import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Academics } from "./components/Academics";
import { About, Skills, Projects, Certifications, Achievements, Experience, Contact, Footer } from "./components/Sections";

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <>
      <Navbar dark={dark} toggle={() => setDark((d) => !d)} />
      <main><Hero /><About /><Skills /><Academics /><Projects /><Certifications /><Achievements /><Experience /><Contact /></main>
      <Footer />
    </>
  );
}
