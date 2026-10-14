import { useEffect, useState } from 'react';

const navTargets = {
  home: 'home',
  idea: 'home',
  components: 'home',
  approach: 'home',
  domain: 'domain',
  milestones: 'milestones',
  documents: 'documents',
  presentations: 'presentations',
  about: 'about',
  contact: 'contact',
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(navTargets[entry.target.id]);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="brand" href="#home" aria-label="PaddyWise home">
            <svg viewBox="0 0 40 40" aria-hidden="true">
              <rect width="40" height="40" rx="10" fill="#4F7D32"/>
              <path d="M20 33 C20 24 21 16 26 9" stroke="#F7F8F1" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <g fill="#FFD16A">
                <ellipse cx="27.5" cy="9.5" rx="2" ry="3.2" transform="rotate(30 27.5 9.5)"/>
                <ellipse cx="24.5" cy="13.5" rx="1.9" ry="3" transform="rotate(-35 24.5 13.5)"/>
                <ellipse cx="27.8" cy="15.6" rx="1.9" ry="3" transform="rotate(50 27.8 15.6)"/>
                <ellipse cx="21.6" cy="19.5" rx="1.9" ry="3" transform="rotate(-40 21.6 19.5)"/>
                <ellipse cx="25" cy="21.6" rx="1.9" ry="3" transform="rotate(55 25 21.6)"/>
              </g>
              <path d="M20 33 C17 28 13 26 10 25" stroke="#9CCB78" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <span><b>PaddyWise</b><small>SLIIT · R26-IT-066</small></span>
          </a>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
          <ul className={`links${menuOpen ? ' open' : ''}`} id="navLinks">
            <li><a className={activeNav === 'home' ? 'on' : undefined} href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a className={activeNav === 'domain' ? 'on' : undefined} href="#domain" onClick={() => setMenuOpen(false)}>Domain</a></li>
            <li><a className={activeNav === 'milestones' ? 'on' : undefined} href="#milestones" onClick={() => setMenuOpen(false)}>Milestones</a></li>
            <li><a className={activeNav === 'documents' ? 'on' : undefined} href="#documents" onClick={() => setMenuOpen(false)}>Documents</a></li>
            <li><a className={activeNav === 'presentations' ? 'on' : undefined} href="#presentations" onClick={() => setMenuOpen(false)}>Presentations</a></li>
            <li><a className={activeNav === 'about' ? 'on' : undefined} href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a className={activeNav === 'contact' ? 'on' : undefined} href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
          </ul>
        </div>
      </header>
    </>
  );
}
