import proposalPresentation from '../../assets/R26_IT_066_Proposal Presentation.pdf';
import progressPresentation1 from '../../assets/R26_IT_066_PP1_Presentation.pdf';
import progressPresentation2 from '../../assets/R26_IT_066_PP2_Presentation.pdf';
import finalPresentation from '../../assets/R26-IT-066 Final Presentation.pdf';

export default function Presentations() {
  return (
    <>
      <section className="s" id="presentations">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">Presentations</span>
              <h2>The story at every stage.</h2>
            </div>
            <p>PDF editions of the decks presented to the evaluation panel.</p>
          </div>
          <div className="decks">
            <article className="deck doc">
              <div className="deck-cover"><small>17 MAR 2026</small><b>Proposal Presentation</b></div>
              <div className="deck-body">
                <p>The overall problem, research question, objectives, system diagram and each member's proposed component.</p>
                <div className="ms-meta"><span>38 slides</span><span>PDF</span></div>
                <div className="doc-act"><a className="btn btn-line btn-sm" href={proposalPresentation} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={proposalPresentation} download="R26_IT_066_Proposal Presentation.pdf">Download ↓</a></div>
              </div>
            </article>
            <article className="deck doc">
              <div className="deck-cover"><small>12 MAY 2026</small><b>Progress Presentation 1</b></div>
              <div className="deck-body">
                <p>Panel comments and how they were addressed, component prototypes, design excellence and commercialization.</p>
                <div className="ms-meta"><span>18 slides</span><span>PDF</span></div>
                <div className="doc-act"><a className="btn btn-line btn-sm" href={progressPresentation1} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={progressPresentation1} download="R26_IT_066_PP1_Presentation.pdf">Download ↓</a></div>
              </div>
            </article>
            <article className="deck doc">
              <div className="deck-cover"><small>PROGRESS 2</small><b>Progress Presentation 2</b></div>
              <div className="deck-body">
                <p>Research gaps, integrated architecture, component data flow, methodology and evaluation strategy.</p>
                <div className="ms-meta"><span>13 slides</span><span>PDF</span></div>
                <div className="doc-act"><a className="btn btn-line btn-sm" href={progressPresentation2} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={progressPresentation2} download="R26_IT_066_PP2_Presentation.pdf">Download ↓</a></div>
              </div>
            </article>
            <article className="deck doc">
              <div className="deck-cover"><small>FINAL</small><b>Final Presentation</b></div>
              <div className="deck-body">
                <p>The completed integrated system, implementation results, evaluation outcomes and conclusions of the research.</p>
                <div className="ms-meta"><span>17 slides</span><span>PDF</span></div>
                <div className="doc-act"><a className="btn btn-line btn-sm" href={finalPresentation} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={finalPresentation} download="R26-IT-066 Final Presentation.pdf">Download ↓</a></div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}