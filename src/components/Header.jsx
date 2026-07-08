import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand-mark">
          <span className="brand-title">Bonggyu Lim</span>
          <span className="brand-subtitle">AI & Backend Portfolio</span>
        </NavLink>
        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <a href="https://github.com/bonggyulim" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
