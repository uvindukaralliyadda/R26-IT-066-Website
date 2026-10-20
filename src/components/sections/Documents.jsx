import { useEffect, useState } from 'react';
import topicAssessmentForm from '../../assets/TAF-R26-IT-066.pdf';
import plannerChecklist from '../../assets/R26-IT-066.xlsx?url';
import iotFertilizationProposal from '../../assets/Proposal IoT Field Monitoring & Fertilization.pdf';
import cropRecommendationProposal from '../../assets/IT21811104_R26_IT_066 - Asel.pdf';
import diseaseSeverityProposal from '../../assets/IT22261632_R26-IT-066 - Buddhini.pdf';
import yieldEstimationProposal from '../../assets/IT22266446_IT_066_R26 - Hiruni.pdf';
import groupThesis from '../../assets/R26_IT_066_Group_Thesis_Draft.pdf';
import iotFertilizationThesis from '../../assets/R26_IT_066_IT22178718_Draft_Thesis_Report.pdf';
import cropRecommendationThesis from '../../assets/R26_IT_066_IT21811104_Draft_Thesis_Report.pdf';
import diseaseSeverityThesis from '../../assets/R26_IT_066_IT22261632_Draft_Thesis_Report.pdf';
import yieldEstimationThesis from '../../assets/R26_IT_066_IT22266446_Draft_Thesis_Report.pdf';

// Paste the Microsoft Planner board link here
const PLANNER_URL = 'https://planner.cloud.microsoft/PASTE-YOUR-PLAN-LINK-HERE';

const documentFiles = [
  topicAssessmentForm,
  plannerChecklist,
  iotFertilizationProposal,
  cropRecommendationProposal,
  diseaseSeverityProposal,
  yieldEstimationProposal,
  groupThesis,
  iotFertilizationThesis,
  cropRecommendationThesis,
  diseaseSeverityThesis,
  yieldEstimationThesis,
];

export default function Documents() {
  const [filter, setFilter] = useState('all');
  const [missingFiles, setMissingFiles] = useState(() => new Set());

  useEffect(() => {
    let active = true;

    Promise.all(
      documentFiles.map(async (file) => {
        try {
          const response = await fetch(file, { method: 'HEAD' });
          return response.ok ? null : file;
        } catch {
          return file;
        }
      }),
    ).then((results) => {
      if (active) {
        setMissingFiles(new Set(results.filter(Boolean)));
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <section className="s alt" id="documents">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">Document repository</span>
              <h2>Research, in detail.</h2>
            </div>
            <p>Open project documents in your browser or download the PDF.</p>
          </div>

          <div className="filters" role="group" aria-label="Filter documents">
            <button type="button" data-f="all" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All documents</button>
            <button type="button" data-f="project" aria-pressed={filter === 'project'} onClick={() => setFilter('project')}>Project</button>
            <button type="button" data-f="proposal" aria-pressed={filter === 'proposal'} onClick={() => setFilter('proposal')}>Proposals</button>
            <button type="button" data-f="thesis" aria-pressed={filter === 'thesis'} onClick={() => setFilter('thesis')}>Theses</button>
          </div>

          <div className="docs" id="docs">
            <article className="doc" data-cat="project" data-missing={missingFiles.has(topicAssessmentForm) ? '' : undefined} hidden={filter !== 'all' && filter !== 'project'}>
              <div className="doc-top"><span className="cat">Project</span><span className="doc-ic">PDF</span></div>
              <h3>Topic Assessment Form</h3>
              <p className="who-line">Group document · R26-IT-066</p>
              <p>Topic assessment form submitted for R26-IT-066.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={topicAssessmentForm} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={topicAssessmentForm} download="TAF-R26-IT-066.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="project" data-missing={missingFiles.has(plannerChecklist) ? '' : undefined} hidden={filter !== 'all' && filter !== 'project'}>
              <div className="doc-top"><span className="cat">Project</span><span className="doc-ic">XLSX</span></div>
              <h3>Checklist 1</h3>
              <p className="who-line">Group document · R26-IT-066</p>
              <p>Readme.md file of the project github repository</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href="https://github.com/uvindukaralliyadda/R26-IT-066/blob/main/README.md" target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></div>
            </article>

            <article className="doc" data-cat="project" hidden={filter !== 'all' && filter !== 'project'}>
              <div className="doc-top"><span className="cat">Project</span><span className="doc-ic">LINK</span></div>
              <h3>Checklist 2</h3>
              <p className="who-line">Group document · R26-IT-066</p>
              <p>Microsoft Planner task record tracking project progress for R26-IT-066.</p>
              <div className="doc-act"><a className="btn btn-gold btn-sm" href={plannerChecklist} download="R26-IT-066.xlsx">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="proposal" data-missing={missingFiles.has(iotFertilizationProposal) ? '' : undefined} hidden={filter !== 'all' && filter !== 'proposal'}>
              <div className="doc-top"><span className="cat">Proposal</span><span className="doc-ic">PDF</span></div>
              <h3>Proposal: IoT Field Monitoring &amp; Fertilization</h3>
              <p className="who-line">Karalliyadda K.K.U.B.M.U.B · IT22178718</p>
              <p>Individual proposal report · March 2026</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={iotFertilizationProposal} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={iotFertilizationProposal} download="Proposal IoT Field Monitoring & Fertilization.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="proposal" data-missing={missingFiles.has(cropRecommendationProposal) ? '' : undefined} hidden={filter !== 'all' && filter !== 'proposal'}>
              <div className="doc-top"><span className="cat">Proposal</span><span className="doc-ic">PDF</span></div>
              <h3>Proposal: Smart Crop Recommendation</h3>
              <p className="who-line">Bandara R.M.A.S · IT21811104</p>
              <p>Individual proposal report · March 2026</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={cropRecommendationProposal} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={cropRecommendationProposal} download="IT21811104_R26_IT_066 - Asel.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="proposal" data-missing={missingFiles.has(diseaseSeverityProposal) ? '' : undefined} hidden={filter !== 'all' && filter !== 'proposal'}>
              <div className="doc-top"><span className="cat">Proposal</span><span className="doc-ic">PDF</span></div>
              <h3>Proposal: Disease Detection &amp; Severity</h3>
              <p className="who-line">Harshika M.A.B · IT22261632</p>
              <p>Individual proposal report · March 2026</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={diseaseSeverityProposal} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={diseaseSeverityProposal} download="IT22261632_R26-IT-066 - Buddhini.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="proposal" data-missing={missingFiles.has(yieldEstimationProposal) ? '' : undefined} hidden={filter !== 'all' && filter !== 'proposal'}>
              <div className="doc-top"><span className="cat">Proposal</span><span className="doc-ic">PDF</span></div>
              <h3>Proposal: Harvest Yield Estimation</h3>
              <p className="who-line">Weerasinghe W.A.H.V · IT22266446</p>
              <p>Individual proposal report · March 2026</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={yieldEstimationProposal} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={yieldEstimationProposal} download="IT22266446_IT_066_R26 - Hiruni.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="thesis" data-missing={missingFiles.has(groupThesis) ? '' : undefined} hidden={filter !== 'all' && filter !== 'thesis'}>
              <div className="doc-top"><span className="cat">Thesis</span><span className="doc-ic">PDF</span></div>
              <h3>Common Thesis</h3>
              <p className="who-line">Group report · R26-IT-066</p>
              <p>Combined thesis covering all four components: IoT monitoring &amp; fertilization, crop recommendation, disease severity and yield estimation.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={groupThesis} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={groupThesis} download="R26_IT_066_Group_Thesis_Draft.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="thesis" data-missing={missingFiles.has(iotFertilizationThesis) ? '' : undefined} hidden={filter !== 'all' && filter !== 'thesis'}>
              <div className="doc-top"><span className="cat">Thesis</span><span className="doc-ic">PDF</span></div>
              <h3>Thesis: IoT Field Monitoring &amp; Fertilization</h3>
              <p className="who-line">Karalliyadda K.K.U.B.M.U.B · IT22178718</p>
              <p>The final thesis will be available here.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={iotFertilizationThesis} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={iotFertilizationThesis} download="R26_IT_066_IT22178718_Draft_Thesis_Report.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="thesis" data-missing={missingFiles.has(cropRecommendationThesis) ? '' : undefined} hidden={filter !== 'all' && filter !== 'thesis'}>
              <div className="doc-top"><span className="cat">Thesis</span><span className="doc-ic">PDF</span></div>
              <h3>Thesis: Smart Crop Recommendation</h3>
              <p className="who-line">Bandara R.M.A.S · IT21811104</p>
              <p>The final thesis will be available here.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={cropRecommendationThesis} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={cropRecommendationThesis} download="R26_IT_066_IT21811104_Draft_Thesis_Report.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="thesis" data-missing={missingFiles.has(diseaseSeverityThesis) ? '' : undefined} hidden={filter !== 'all' && filter !== 'thesis'}>
              <div className="doc-top"><span className="cat">Thesis</span><span className="doc-ic">PDF</span></div>
              <h3>Thesis: Disease Detection &amp; Severity</h3>
              <p className="who-line">Harshika M.A.B · IT22261632</p>
              <p>The final thesis will be available here.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={diseaseSeverityThesis} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={diseaseSeverityThesis} download="R26_IT_066_IT22261632_Draft_Thesis_Report.pdf">Download ↓</a></div>
            </article>

            <article className="doc" data-cat="thesis" data-missing={missingFiles.has(yieldEstimationThesis) ? '' : undefined} hidden={filter !== 'all' && filter !== 'thesis'}>
              <div className="doc-top"><span className="cat">Thesis</span><span className="doc-ic">PDF</span></div>
              <h3>Thesis: Harvest Yield Estimation</h3>
              <p className="who-line">Weerasinghe W.A.H.V · IT22266446</p>
              <p>The final thesis will be available here.</p>
              <div className="doc-act"><a className="btn btn-line btn-sm" href={yieldEstimationThesis} target="_blank" rel="noopener">View ↗</a><a className="btn btn-gold btn-sm" href={yieldEstimationThesis} download="R26_IT_066_IT22266446_Draft_Thesis_Report.pdf">Download ↓</a></div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}