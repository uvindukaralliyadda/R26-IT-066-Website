export default function Approach() {
  return (
    <>
      <section className="s" id="approach">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">How PaddyWise works</span>
              <h2>From a sensor reading to a decision.</h2>
            </div>
            <p>Data moves through the four components in order, and actual harvest results feed back to improve the models.</p>
          </div>
          <ol className="flow">
            <li><h3>Sense</h3><p>Field devices stream soil and climate readings to the cloud.</p></li>
            <li><h3>Recommend</h3><p>Soil, weather and prices rank the crops that suit the field.</p></li>
            <li><h3>Detect</h3><p>A leaf photo returns the disease and its severity grade.</p></li>
            <li><h3>Estimate</h3><p>Severity and field data predict yield under three scenarios.</p></li>
            <li><h3>Decide</h3><p>The dashboard shows alerts, costs and the recommended action.</p></li>
          </ol>
        </div>
      </section>
    </>
  );
}
