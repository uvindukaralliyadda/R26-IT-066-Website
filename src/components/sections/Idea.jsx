export default function Idea() {
  return (
    <>
      <section className="s" id="idea">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">The idea</span>
              <h2>One platform for the whole season.</h2>
            </div>
            <p>Farmers already have pieces of advice. What they lack is one place that connects soil, disease and market data into a single decision.</p>
          </div>
          <div className="idea">
            <div className="body">
              <p>PaddyWise is a final-year research project at the Sri Lanka Institute of Information Technology (SLIIT). It brings four research components together: IoT field monitoring with fertilization guidance, smart crop recommendation, disease detection with severity estimation, and disease-aware harvest yield estimation.</p>
              <p>Most Sri Lankan paddy decisions still rely on experience and fixed guidelines. That leads to fertilizer applied at the wrong time, diseases noticed too late, and crops chosen without knowing what they will sell for. Existing tools such as e-Krushi, GeoGoviya and Krushi Advisor offer static advice. None of them combines live field data, disease severity and market prices.</p>
              <p>All four components share a central cloud database and REST APIs, so the output of one module becomes the input of the next. The farmer sees everything on one dashboard.</p>
              <p className="note">PaddyWise supports farmer decisions. It does not replace advice from Department of Agriculture officers.</p>
            </div>
            <div className="who" aria-label="Who benefits">
              <div><b>Small &amp; medium-scale farmers</b><span>Day-to-day planting, fertilizing and treatment decisions</span></div>
              <div><b>Farmer cooperatives</b><span>Shared field insight across member farms</span></div>
              <div><b>DoA agricultural officers</b><span>Field data to support their advisory work</span></div>
              <div><b>Agri-insurance companies</b><span>Evidence of disease impact on expected yield</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
