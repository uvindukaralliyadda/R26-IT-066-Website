export default function Components() {
  return (
    <>
      <section className="s alt" id="components">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">Four components, one field</span>
              <h2>Meet the research components.</h2>
            </div>
            <p>Each team member owns one component. Together they cover the season from the soil to the selling price.</p>
          </div>
      
          <div className="comps">
            
            <article className="comp">
              <div className="comp-top">
                <div>
                  <span className="k">Component 1</span>
                  <h3>IoT Field Monitoring &amp; Fertilization Guidance</h3>
                </div>
                <span className="comp-ic"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="8" rx="2"/><path d="M12 11v10M9 21h6M4 7a8 8 0 0 1 0 0M3 5c-1 2-1 4 0 6M21 5c1 2 1 4 0 6"/></svg></span>
              </div>
              <p>ESP32 sensor devices placed at the start, middle and end of the field measure the soil continuously and tell the farmer when to fertilize and how much to use.</p>
              <dl>
                <div><dt>Monitors</dt><dd>Soil moisture, soil temperature, pH, electrical conductivity, NPK and humidity</dd></div>
                <div><dt>Predicts</dt><dd>Fertilization timing (Random Forest) and fertilization quantity (XGBoost regression). Quantity model reached 90% accuracy at Progress Presentation 1.</dd></div>
                <div><dt>Delivers</dt><dd>Dashboard alerts in Sinhala and English, with organic or bio-fertilizer alternatives when chemical supply is limited</dd></div>
              </dl>
              <div className="chips"><span className="chip">ESP32</span><span className="chip">FastAPI</span><span className="chip">PostgreSQL</span><span className="chip">PWA</span></div>
              <div className="owner"><b>Karalliyadda K.K.U.B.M.U.B</b><span>IT22178718</span></div>
            </article>
      
            
            <article className="comp">
              <div className="comp-top">
                <div>
                  <span className="k">Component 2</span>
                  <h3>Smart Crop Recommendation</h3>
                </div>
                <span className="comp-ic"><svg viewBox="0 0 24 24"><path d="M12 21V10"/><path d="M12 10c0-4 3-6 7-6 0 4-3 6-7 6zM12 13c0-3-2-5-6-5 0 3 2 5 6 5z"/><path d="M4 21h16"/></svg></span>
              </div>
              <p>Recommends crops that suit the field and are likely to be profitable, using live sensor data, weather and recent market prices.</p>
              <dl>
                <div><dt>Layered logic</dt><dd>Soil pH removes unsuitable crops → nutrients find the best matches → weather confirms the growing season → market price picks the most profitable option</dd></div>
                <div><dt>Outputs</dt><dd>A ranked list rated Highly, Moderately or Marginally Suitable</dd></div>
                <div><dt>Market signal</dt><dd>Price trend from the last three months of average crop prices</dd></div>
              </dl>
              <div className="chips"><span className="chip">Random Forest</span><span className="chip">XGBoost</span><span className="chip">Weather API</span><span className="chip">Market data</span></div>
              <div className="owner"><b>Bandara R.M.A.S</b><span>IT21811104</span></div>
            </article>
      
            
            <article className="comp">
              <div className="comp-top">
                <div>
                  <span className="k">Component 3</span>
                  <h3>Disease Detection &amp; Severity Estimation</h3>
                </div>
                <span className="comp-ic"><svg viewBox="0 0 24 24"><path d="M5 19C5 10 11 4 20 4c0 9-6 15-15 15z"/><path d="M5 19 13 11"/><circle cx="14" cy="9" r="1.2"/><circle cx="10" cy="13.5" r="1"/></svg></span>
              </div>
              <p>The farmer uploads a photo of a paddy leaf. The system names the disease and measures how far it has spread across the leaf.</p>
              <dl>
                <div><dt>Detects</dt><dd>Rice Blast and Brown Spot, using YOLOv8 to locate diseased regions and measure the affected leaf area</dd></div>
                <div><dt>Outputs</dt><dd>Disease name, severity category (Healthy to Severe) and a severity score, graded on the IRRI 0–4 scale</dd></div>
                <div><dt>Localised</dt><dd>Trained on Sri Lankan field images, labelled with support from Department of Agriculture officers</dd></div>
              </dl>
              <div className="chips"><span className="chip">YOLOv8</span><span className="chip">EfficientNet-B4</span><span className="chip">OpenCV</span><span className="chip">IRRI SES</span></div>
              <div className="owner"><b>Harshika M.A.B</b><span>IT22261632</span></div>
            </article>
      
            
            <article className="comp">
              <div className="comp-top">
                <div>
                  <span className="k">Component 4</span>
                  <h3>Disease-Aware Harvest Yield Estimation</h3>
                </div>
                <span className="comp-ic"><svg viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/></svg></span>
              </div>
              <p>Shows the farmer what the harvest will be with and without treatment, so they know whether spending on treatment is worth it.</p>
              <dl>
                <div><dt>Inputs</dt><dd>Live IoT sensor data from Component 1 and disease severity scores from Component 3</dd></div>
                <div><dt>Scenarios</dt><dd>Expected yield for a healthy crop, an untreated crop and a treated crop, with kilograms lost compared against treatment cost</dd></div>
                <div><dt>Targets</dt><dd>Base yield accuracy ≥ 85% and disease–yield loss model R² ≥ 0.80, calibrated for BG 300 and AT 362</dd></div>
              </dl>
              <div className="chips"><span className="chip">XGBoost</span><span className="chip">Random Forest</span><span className="chip">Linear Regression</span><span className="chip">IRRI tables</span></div>
              <div className="owner"><b>Weerasinghe W.A.H.V</b><span>IT22266446</span></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
