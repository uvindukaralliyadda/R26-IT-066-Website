import { useRef, useState } from 'react';
import { teamEmail } from '../../config.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState('');
  const emailRef = useRef(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(teamEmail);
      setCopied(true);
      setCopyError('');
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const selection = window.getSelection();
      if (selection && emailRef.current) {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopyError('Automatic copy is unavailable. The email is selected for manual copying.');
    }
  }

  return (
    <>
      <section className="s" id="contact">
        <div className="wrap">
          <div className="contact">
            <div>
              <span className="eyebrow">Let's connect</span>
              <h2>Curious about <em>PaddyWise?</em></h2>
              <p>For research enquiries, field trial partnerships or collaboration with farmer groups, get in touch with the team.</p>
            </div>
            <div className="ccard">
              <small>Project enquiries</small>
              <h3>Contact the PaddyWise team</h3>
              <div className="email-row">
                <span className="email" id="teamEmail" ref={emailRef}>{teamEmail || 'paddywise@gmail.com'}</span>
                {teamEmail && (
                  <button className="copy" id="copyBtn" type="button" onClick={copyEmail}>
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                )}
              </div>
              {copyError && <p className="copy-status" role="status">{copyError}</p>}
              <p className="addr"><b>Sri Lanka Institute of Information Technology</b>Faculty of Computing, New Kandy Road, Malabe, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
