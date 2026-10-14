export default function Milestones() {
  return (
    <>
      <section className="s" id="milestones">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">Project milestones</span>
              <h2>From proposal to harvest.</h2>
            </div>
            <p>The research and development journey through each assessment stage.</p>
          </div>
          <div className="ms">
            <article className="ms-item">
              <span className="ms-n">01</span>
              <div>
                <h3>Project Proposal</h3>
                <p>Individual proposal reports and the group proposal presentation set out the research problem, objectives, methodology, architecture, budget and timeline for each component.</p>
                <div className="ms-meta"><span>17 Mar 2026</span><span>Marks: —</span></div>
              </div>
              <span className="status done">Completed</span>
            </article>
            <article className="ms-item">
              <span className="ms-n">02</span>
              <div>
                <h3>Progress Presentation 1</h3>
                <p>Working prototypes for each component, responses to panel comments from the proposal and the first commercialization plan. The yield component was redefined after panel feedback.</p>
                <div className="ms-meta"><span>12 May 2026</span><span>Marks: —</span></div>
              </div>
              <span className="status done">Completed</span>
            </article>
            <article className="ms-item">
              <span className="ms-n">03</span>
              <div>
                <h3>Progress Presentation 2</h3>
                <p>Research gaps, the integrated system architecture, component data flow and the evaluation strategy for each component and the whole system.</p>
                <div className="ms-meta"><span>Date: —</span><span>Marks: —</span></div>
              </div>
              <span className="status done">Completed</span>
            </article>
            <article className="ms-item">
              <span className="ms-n">04</span>
              <div>
                <h3>Final Assessment</h3>
                <p>The final integrated system, individual theses and the final presentation.</p>
                <div className="ms-meta"><span>Date: —</span><span>Marks: —</span></div>
              </div>
              <span className="status next">Upcoming</span>
            </article>
            <article className="ms-item">
              <span className="ms-n">05</span>
              <div>
                <h3>Viva</h3>
                <p>The final oral assessment of each member's component and the overall system.</p>
                <div className="ms-meta"><span>Date: —</span><span>Marks: —</span></div>
              </div>
              <span className="status later">Upcoming</span>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
