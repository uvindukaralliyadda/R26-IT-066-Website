export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div>
            <a className="brand" href="#home" aria-label="PaddyWise home">
              <svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#4F7D32"/><path d="M20 33 C20 24 21 16 26 9" stroke="#F7F8F1" strokeWidth="2" fill="none" strokeLinecap="round"/><g fill="#FFD16A"><ellipse cx="27.5" cy="9.5" rx="2" ry="3.2" transform="rotate(30 27.5 9.5)"/><ellipse cx="24.5" cy="13.5" rx="1.9" ry="3" transform="rotate(-35 24.5 13.5)"/><ellipse cx="27.8" cy="15.6" rx="1.9" ry="3" transform="rotate(50 27.8 15.6)"/><ellipse cx="21.6" cy="19.5" rx="1.9" ry="3" transform="rotate(-40 21.6 19.5)"/><ellipse cx="25" cy="21.6" rx="1.9" ry="3" transform="rotate(55 25 21.6)"/></g><path d="M20 33 C17 28 13 26 10 25" stroke="#9CCB78" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
              <span><b>PaddyWise</b><small>SLIIT · R26-IT-066</small></span>
            </a>
            <p>A decision support system for Sri Lankan paddy cultivation, combining IoT field monitoring, crop recommendation, disease severity and yield estimation.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#components">Components</a></li>
              <li><a href="#domain">Research domain</a></li>
              <li><a href="#milestones">Milestones</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#documents">Documents</a></li>
              <li><a href="#presentations">Presentations</a></li>
              <li><a href="#about">Our team</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>
          <div className="legal">
            <span>© 2026 PaddyWise · R26-IT-066 · SLIIT research project</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}
