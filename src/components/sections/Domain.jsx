export default function Domain() {
  return (
    <>
      <section className="s alt" id="domain">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">The research domain</span>
              <h2>Grounded in the field. Built on evidence.</h2>
            </div>
            <p>The literature, gaps, questions and methods behind PaddyWise.</p>
          </div>
      
          <div className="domain">
            <aside className="notebook">
              <span className="eyebrow">Research notebook</span>
              <h3>Decision support for Sri Lankan paddy cultivation.</h3>
              <p>The project follows Design Science Research: identify the problem, define objectives, design and build the system, demonstrate it in the field, evaluate it and communicate the results.</p>
              <div className="q"><b>RESEARCH QUESTION</b>How can an integrated decision support system using IoT sensors, machine learning and market data help Sri Lankan paddy farmers make real-time, economically sound decisions on crop choice, fertilization and disease treatment?</div>
            </aside>
      
            <div className="acc">
              <details open>
                <summary>Literature survey</summary>
                <div className="dbody">
                  <p>The review covered more than nine scholarly sources and the main Sri Lankan agriculture platforms across four areas: IoT field monitoring, crop recommendation, paddy disease detection and yield prediction.</p>
                  <ul>
                    <li>IoT soil monitoring systems collect useful data but focus on irrigation, not fertilizer decisions.</li>
                    <li>Jayasinghe &amp; Ranasinghe (2021) reached 89.3% accuracy on Sri Lankan field images, but only for healthy versus diseased.</li>
                    <li>Abdurrahman &amp; Miyim (2025) and Ekanayake et al. (2021) validated yield prediction from weather data, without disease severity as an input.</li>
                    <li>The IRRI Standard Evaluation System provides severity-to-yield-loss tables, but not linked to live sensor data or local varieties.</li>
                    <li>e-Krushi, GeoGoviya and Krushi Advisor give static advice with no real-time data, severity grading or market forecasting.</li>
                  </ul>
                </div>
              </details>
      
              <details>
                <summary>Research gap</summary>
                <div className="dbody">
                  <p>No single platform addresses all four dimensions of paddy farm decisions at once.</p>
                  <div className="gaps">
                    <div className="gap"><b>G1</b><span><strong>Fragmented solutions.</strong> No platform integrates IoT, climate, disease and market intelligence.</span></div>
                    <div className="gap"><b>G2</b><span><strong>Raw IoT data.</strong> Sensor readings are shown without actionable, localised recommendations.</span></div>
                    <div className="gap"><b>G3</b><span><strong>No severity or economic impact.</strong> Disease tools do not grade severity or forecast yield loss.</span></div>
                    <div className="gap"><b>G4</b><span><strong>Market-blind crop choice.</strong> Recommendations ignore price changes and supply-demand.</span></div>
                  </div>
                </div>
              </details>
      
              <details>
                <summary>Research problem</summary>
                <div className="dbody">
                  <p>Sri Lankan paddy farmers face income instability and lower productivity because of unpredictable weather, soil imbalances and fungal diseases. They rely on traditional knowledge and fixed guidelines instead of real-time field data, which leads to poorly timed fertilizer and late disease detection.</p>
                  <p>Rice Blast, Brown Spot and uninformed crop selection can cause yield losses above 30% in severe seasons. Existing systems are fragmented: monitoring tools give no decision support, disease tools give no severity assessment and crop tools ignore market economics.</p>
                </div>
              </details>
      
              <details>
                <summary>Research objectives</summary>
                <div className="dbody">
                  <p><strong>Main objective:</strong> Develop an integrated, context-aware, IoT-based decision support system that helps Sri Lankan paddy farmers make data-driven and economically optimised cultivation decisions.</p>
                  <ol>
                    <li>Monitor soil moisture, pH, NPK and temperature continuously and generate real-time fertilization alerts.</li>
                    <li>Combine IoT data, climate forecasts and market price trends to recommend economically viable crops.</li>
                    <li>Detect Rice Blast and Brown Spot and grade severity on a 0–4 scale with management recommendations.</li>
                    <li>Predict yield under healthy, untreated and treated scenarios to support evidence-based treatment decisions.</li>
                  </ol>
                </div>
              </details>
      
              <details>
                <summary>Methodology &amp; data</summary>
                <div className="dbody">
                  <p>Design Science Research guides the work, combining iterative model development, experimental validation and system engineering.</p>
                  <ul>
                    <li>IoT sensor data: soil moisture, pH, NPK, temperature and humidity</li>
                    <li>Weather APIs: forecasts, rainfall and temperature trends</li>
                    <li>Paddy leaf images collected locally and annotated with DoA-SL officers</li>
                    <li>Historical and forecast market price data</li>
                    <li>IRRI Standard Evaluation System disease–yield loss tables</li>
                    <li>Department of Agriculture guidelines and historical yield data</li>
                  </ul>
                  <p className="muted">Ethics: farmer consent forms, data anonymisation and SLIIT ethics clearance. Data is encrypted in transit and at rest.</p>
                </div>
              </details>
      
              <details>
                <summary>Evaluation strategy</summary>
                <div className="dbody">
                  <div className="tbl">
                    <table>
                      <thead><tr><th>Component</th><th>Key measures</th></tr></thead>
                      <tbody>
                        <tr><td>IoT monitoring</td><td>Alert accuracy, sensor reliability, real-time responsiveness</td></tr>
                        <tr><td>Crop recommendation</td><td>Recommendation accuracy, economic viability checked against market outcomes</td></tr>
                        <tr><td>Disease detection</td><td>Classification accuracy ≥ 91%, severity grading accuracy, inference under 5 s, expert approval ≥ 80%</td></tr>
                        <tr><td>Yield estimation</td><td>Base yield accuracy ≥ 85%, disease–yield loss R² ≥ 0.80, scenario forecast accuracy</td></tr>
                        <tr><td>Whole system</td><td>API response time, dashboard usability with farmers, end-to-end performance in the field</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="muted">Results are compared against traditional farmer practice and static recommendation systems.</p>
                </div>
              </details>
      
              <details>
                <summary>Commercialization</summary>
                <div className="dbody">
                  <ul>
                    <li><strong>Customers:</strong> smallholder paddy farmers aged 25–55, younger tech-adopting farmers and cooperatives in the main paddy districts.</li>
                    <li><strong>Market:</strong> more than 1.8 million paddy farming households in Sri Lanka.</li>
                    <li><strong>Revenue:</strong> freemium model with a free basic tier and premium at LKR 500–1,500 per month, plus cooperative and B2B subscriptions and API licensing for insurers and government.</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
      
          
          <div className="arch">
            <span className="eyebrow">System architecture</span>
            <h3>One connected platform.</h3>
            <p>Every component reads from and writes to a shared cloud store through FastAPI endpoints.</p>
            <div className="layers">
              <div className="layer"><small>Data sources</small><h4>Field &amp; market</h4><p>IoT field sensors, weather APIs, paddy leaf images, market price databases, IRRI reference data</p></div>
              <div className="layer"><small>Processing</small><h4>Models</h4><p>Random Forest, XGBoost, YOLOv8 and EfficientNet-B4 on AWS IoT Core &amp; Analytics</p></div>
              <div className="layer"><small>Integration</small><h4>FastAPI REST</h4><p>Cross-module communication and scenario-based data flow</p></div>
              <div className="layer"><small>Output</small><h4>Farmer dashboard</h4><p>Fertilization alerts, crop picks, severity, yield scenarios and financial impact</p></div>
            </div>
            <div className="store"><b>Storage</b><span>PostgreSQL · AWS S3 (encrypted images) · historical yield and market data</span></div>
            <div className="stack">
              <span className="chip">ESP32</span><span className="chip">Python</span><span className="chip">FastAPI</span><span className="chip">AWS IoT Core</span><span className="chip">PostgreSQL</span><span className="chip">AWS S3</span><span className="chip">Random Forest</span><span className="chip">XGBoost</span><span className="chip">YOLOv8</span><span className="chip">EfficientNet-B4</span><span className="chip">React.js</span><span className="chip">i18next</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
