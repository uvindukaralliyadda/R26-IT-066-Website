export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="wrap">
          <div>
            <span className="eyebrow">SLIIT Research · R26-IT-066</span>
            <h1>Read the field. <em>Then</em> decide.</h1>
            <p className="lead">PaddyWise is a decision support system for Sri Lankan paddy farmers. It turns soil sensor readings, leaf photos and market prices into clear guidance on what to plant, when to fertilize, how serious a disease is and whether treating it will pay off.</p>
            <div className="cta">
              <a className="btn btn-gold" href="#components">Explore PaddyWise ↓</a>
              <a className="btn btn-line" href="#domain">Discover the research →</a>
            </div>
            <div className="tags">
              <span className="tag">Yala &amp; Maha seasons</span>
              <span className="tag">BG 300 · AT 362</span>
              <span className="tag">Sinhala &amp; English</span>
            </div>
          </div>
      
          <div>
            <div className="field" role="img" aria-label="Sample PaddyWise dashboard showing soil readings, a fertilization alert, disease severity and three harvest scenarios">
              <div className="field-head">
                <span>FIELD · ZONE B · YALA 2026</span>
                <span className="live"><i></i>LIVE SENSOR</span>
              </div>
              <div className="readings">
                <div className="rd"><small>Soil moisture</small><b>41<sub>%</sub></b></div>
                <div className="rd"><small>Soil pH</small><b>6.2</b></div>
                <div className="rd"><small>N · P · K</small><b>38·14·96</b></div>
              </div>
              <div className="fsec">
                <h4>Fertilization alert</h4>
                <div className="alert">
                  <span className="dot">N</span>
                  <p><strong>Top-dress urea within 3 days</strong>Nitrogen is below the tillering-stage range for this zone.</p>
                </div>
              </div>
              <div className="fsec">
                <h4>Leaf scan · Brown Spot · Grade 2</h4>
                <div className="sev">
                  <div style={{"background": 'var(--sev0)'}}></div><div style={{"background": 'var(--sev1)'}}></div><div className="on" style={{"background": 'var(--sev2)'}}></div><div style={{"background": 'var(--sev3)'}}></div><div style={{"background": 'var(--sev4)'}}></div>
                </div>
                <div className="sev-l"><span>0 Healthy</span><span>1 Mild</span><span>2 Moderate</span><span>3 Severe</span><span>4 Critical</span></div>
              </div>
              <div className="fsec">
                <h4>Harvest scenarios · kg / acre</h4>
                <div className="scen">
                  <div className="scen-row"><span>Healthy</span><div className="bar"><i style={{"width": '100%'}}></i></div><span className="v">2,050</span></div>
                  <div className="scen-row"><span>Treated</span><div className="bar"><i style={{"width": '91%'}}></i></div><span className="v">1,870</span></div>
                  <div className="scen-row"><span>Untreated</span><div className="bar"><i style={{"width": '72%', "background": 'var(--sev3)'}}></i></div><span className="v">1,480</span></div>
                </div>
              </div>
              <p className="sample">Illustrative sample values. Not field results.</p>
            </div>
          </div>
        </div>
      </section>
      
      
      <div className="band stats" aria-label="Why the problem matters">
        <div className="wrap">
          <div className="stat"><b>1.8M+</b><span>paddy farming households in Sri Lanka</span></div>
          <div className="stat"><b>10–40%</b><span>yield lost each year to Rice Blast and Brown Spot</span></div>
          <div className="stat"><b>100,000+ ha</b><span>of paddy damaged by Cyclone Ditwah in 2025</span></div>
          <div className="stat"><b>4</b><span>integrated research components on one dashboard</span></div>
        </div>
      </div>
    </>
  );
}
