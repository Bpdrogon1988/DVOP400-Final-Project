import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { profile } from "./data/profile.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

const navLinkClass = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

export default function App() {
  return (
    <HashRouter>
      <div className="page">
        <header className="site-header">
          <div className="brand">
            <span className="brand-mark">BF</span>
            <div>
              <p className="brand-title">{profile.name}</p>
              <p className="brand-subtitle">{profile.title}</p>
            </div>
          </div>
          <nav className="nav">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/resume" className={navLinkClass}>
              Resume
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>{profile.location} | {profile.email} | {profile.github}</p>
        </footer>
      </div>
    </HashRouter>
  );
}
