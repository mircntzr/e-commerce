import React from "react";
import style from "./Privacy.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
function Privacy() {
  return (
    <>
      <Navbar />
      <div className={style.Property}>
        <div className={style.PropertyContainer}>
          <h1>Privacy Policy</h1>
          <div>
            <ul>
              <li>
                1. Introduction [vintaggy] (“we”, “us”, “our”) is committed to
                protecting the privacy of our users (“user”, “you”). This
                Privacy Policy outlines how we collect, use, and protect your
                personal information when you use our website and services.
              </li>

              <li>
                2. Information We Collect When you use our website and services,
                we may collect the following types of information:
                <ol>
                  Personal identification information (such as name, email
                  address, and phone number)
                </ol>
                <ol>Billing and payment information</ol>
                <ol>
                  User-generated content (such as designs for personalized
                  products)
                </ol>
                <ol>
                  Technical data (such as IP address, browser type, and
                  operating system)
                </ol>
              </li>

              <li>
                3. How We Use Your Information We use your personal information
                for the following purposes:
                <ol>To process and fulfill orders for personalized products</ol>
                <ol>To communicate with you about your orders and inquiries</ol>
                <ol>To improve our website and services</ol>
                <ol>To comply with legal obligations and protect our rights</ol>
              </li>
              <li>
                4. Sharing Your Information We may share your personal
                information with third-party service providers for the purposes
                of processing and fulfilling orders, payment processing, and
                providing customer support. We require these third parties to
                respect your privacy and protect your information in accordance
                with applicable laws and regulations.
              </li>
              <li>
                5. Data Security We are committed to protecting the security of
                your personal information. We use appropriate security measures
                to prevent unauthorized access, disclosure, or modification of
                your information. However, no method of transmission or storage
                is 100% secure, and we cannot guarantee absolute security.
              </li>
              <li>
                6. Your Rights You have the right to access, correct, update, or
                delete your personal information. To exercise these rights,
                please contact us at [your contact email address].
              </li>
              <li>
                7. Changes to This Privacy Policy We may update this Privacy
                Policy from time to time. Any changes will be posted on this
                page, and we encourage you to review our Privacy Policy
                regularly to stay informed.
              </li>
              <li>
                8. Contact Us If you have any questions or concerns about this
                Privacy Policy or our privacy practices, please contact us at
                [your contact email address].
              </li>
            </ul>
            <span>
              Please keep in mind that this template is just a starting point,
              and it is essential to consult with an attorney to ensure that
              your privacy policy is fully compliant with applicable laws and
              regulations.
            </span>
          </div>
        </div>
      </div>
      <Footer />
      <Policies />
    </>
  );
}

export default Privacy;
