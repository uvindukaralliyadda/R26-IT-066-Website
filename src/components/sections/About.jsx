import TeamPhoto from '../TeamPhoto.jsx';
import uvinduPhoto from '../../assets/uvindu.jpeg';
import aselPhoto from '../../assets/asel.jpeg';
import buddhiPhoto from '../../assets/buddhi.jpeg';
import hiruniPhoto from '../../assets/hiruni.jpeg';

export default function About() {
  return (
    <>
      <section className="s alt" id="about">
        <div className="wrap">
          <div className="s-head">
            <div>
              <span className="eyebrow">About us</span>
              <h2>The people behind PaddyWise.</h2>
            </div>
            <p>R26-IT-066 · Department of Information Technology<br />Faculty of Computing · SLIIT, Malabe</p>
          </div>
          <div className="team">
            <article className="member">
              <div className="photo"><TeamPhoto src={uvinduPhoto} alt="Karalliyadda K.K.U.B.M.U.B" initials="UK" /></div>
              <div className="mb"><h3>Karalliyadda K.K.U.B.M.U.B</h3><p className="id">IT22178718</p><p className="role">IoT Field Monitoring &amp; Fertilization</p><p className="spec">SLIIT · Information Technology</p></div>
            </article>
            <article className="member">
              <div className="photo"><TeamPhoto src={aselPhoto} alt="Bandara R.M.A.S" initials="AB" /></div>
              <div className="mb"><h3>Bandara R.M.A.S</h3><p className="id">IT21811104</p><p className="role">Smart Crop Recommendation</p><p className="spec">SLIIT · Information Technology</p></div>
            </article>
            <article className="member">
              <div className="photo"><TeamPhoto src={buddhiPhoto} alt="Harshika M.A.B" initials="BH" /></div>
              <div className="mb"><h3>Harshika M.A.B</h3><p className="id">IT22261632</p><p className="role">Disease Detection &amp; Severity</p><p className="spec">SLIIT · Information Technology</p></div>
            </article>
            <article className="member">
              <div className="photo"><TeamPhoto src={hiruniPhoto} alt="Weerasinghe W.A.H.V" initials="HW" /></div>
              <div className="mb"><h3>Weerasinghe W.A.H.V</h3><p className="id">IT22266446</p><p className="role">Harvest Yield Estimation</p><p className="spec">SLIIT · Information Technology</p></div>
            </article>
          </div>
          <div className="sup">
            <div><small>Supervisor</small><b>Ms. Chathurangika Kahandawarachchi</b><span>Department of Information Technology, SLIIT</span></div>
            <div><small>Co-supervisor</small><b>Ms. Buddhima Attanayake</b><span>Faculty of Computing, SLIIT</span></div>
          </div>
        </div>
      </section>
    </>
  );
}
