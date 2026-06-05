import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";

const navLinkClass = ({ isActive }) =>
  isActive ? "nav-link active" : "nav-link";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="site-header">
          <div className="brand">
            <span className="brand-mark">BF</span>
            <div>
              <p className="brand-title">Branden Frady</p>
              <p className="brand-subtitle">Cloud DevOps | Infrastructure Automation</p>
            </div>
          </div>
          <nav className="nav">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Me
            </NavLink>
            <NavLink to="/resume" className={navLinkClass}>
              Resume
            </NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>Spokane, WA · canfood2015@gmail.com · github.com/Bpdrogon1988</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
