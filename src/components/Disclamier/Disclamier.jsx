import React from "react";
import style from "./Disclamier.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
function Disclamier() {
  return (
    <>
      <Navbar />
      <div className={style.Property}>
        <div className={style.PropertyContainer}>
          <h1>Legal Disclaimer and Liability Disclaimer</h1>
          <span>Legal Disclaimer and Liability Disclaimer</span>
          <div>
            <ul>
              <li>
                1. Legal Disclaimer The information contained on [vintaggy]’s
                website and services is provided for general informational
                purposes only. While we strive to ensure that the information on
                our website is accurate and up-to-date, we make no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the information, products, or services contained
                on the website.
                <span>
                  Any reliance you place on such information is strictly at your
                  own risk. We disclaim any liability for any loss or damage,
                  including without limitation, indirect or consequential loss
                  or damage, arising from your use of our website or services.
                </span>
              </li>
              <li>
                2. Liability Disclaimer To the fullest extent permitted by law,
                [Your Business Name], its affiliates, and their respective
                officers, directors, employees, and agents shall not be liable
                for any direct, indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses, resulting from:
                <li>
                  a. a. Your access to, use of, or inability to access or use
                  our website or services; b. Any conduct or content of any
                  third party on our website or services, including without
                  limitation, any defamatory, offensive, or illegal conduct of
                  other users or third parties; c. Any content obtained from or
                  through our website or services; or d. Unauthorized access,
                  use, or alteration of your transmissions or content.
                </li>
              </li>
              <span>
                In no event shall our total liability to you for all claims
                arising out of or in connection with your use of our website,
                services, or products exceed the amount paid by you for the
                product(s) at issue.
              </span>
              <li>
                3. User-Submitted Content [Your Business Name] is not
                responsible for the content submitted by users of our website
                and services. Users are solely responsible for any content they
                submit, including but not limited to designs, images, and text.
                We do not endorse, support, represent, or guarantee the
                completeness, truthfulness, accuracy, or reliability of any
                user-submitted content or communications posted on our website
                or services.
              </li>
              <li>
                4. Third-Party Links Our website and services may contain links
                to third-party websites or services that are not owned or
                controlled by [Your Business Name]. We have no control over, and
                assume no responsibility for, the content, privacy policies, or
                practices of any third-party websites or services. You
                acknowledge and agree that [Your Business Name] shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the
                use of or reliance on any such content, goods, or services
                available on or through any such websites or services.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
      <Policies />
    </>
  );
}

export default Disclamier;
