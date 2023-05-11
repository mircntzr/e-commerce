import React from "react";
import style from "./Terms.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
function Terms() {
  return (
    <>
      <Navbar />
      <div className={style.Property}>
        <div className={style.PropertyContainer}>
          <h1>Terms</h1>
          <span>Terms</span>
          <div>
            This Intellectual Property and Licensing Agreement (“Agreement”) is
            entered into by and between [vintaggy] (“we”, “us”, “our”) and the
            user (“user”, “you”, “customer”) of our website and services.
            <ul>
              <li>
                1. Introduction Welcome to [vintaggy] (“we”, “us”, “our”). By
                accessing and using our website and services, you (“user”,
                “you”, “customer”) agree to be bound by these Terms of Service
                (“Terms”) and our Privacy Policy. If you do not agree with these
                Terms, please do not use our website or services.
              </li>
              <li>
                2. ccount Registration To access certain features of our website
                and services, you may be required to create an account. You
                agree to provide accurate and complete information during the
                account registration process and to keep your account
                information up-to-date. You are responsible for maintaining the
                confidentiality of your account and password, and you accept
                responsibility for all activities that occur under your account.
              </li>
              <li>
                3. Use of Our Services You may use our website and services to
                create custom designs for personalized products and to purchase
                those products. You agree that you will only submit content that
                you have the right to use, and that you will not submit content
                that infringes on any third party’s intellectual property
                rights, such as copyrights, trademarks, or trade secrets.
              </li>
              <li>
                4. Intellectual Property You retain all rights to the content
                you submit to our website and services. By submitting content,
                you grant us a non-exclusive, royalty-free, worldwide license to
                use, reproduce, modify, display, and distribute your content
                solely for the purpose of providing our services and fulfilling
                orders.
              </li>
              <li>
                5. User Conduct You agree that you will not use our website or
                services to submit content that:
                <ol>
                  Is unlawful, defamatory, libelous, harassing, or otherwise
                  objectionable
                </ol>
                <ol>Contains explicit or inappropriate material</ol>
                <ol>
                  Promotes hate speech, discrimination, or violence against any
                  individual or group
                </ol>
                <ol>
                  Violates any applicable laws, regulations, or third-party
                  rights
                </ol>
              </li>
              <span>
                We reserve the right to remove or refuse any content at our
                discretion and to terminate or suspend your account for any
                violation of these Terms.
              </span>
              <li>
                6. Payment and Order Processing By placing an order on our
                website, you agree to pay the specified price for the
                personalized product(s). We may use third-party payment
                processors to process your payment. You represent and warrant
                that you have the legal right to use any payment method(s)
                provided during the order process.
              </li>
              <li>
                7. Shipping and Delivery We will ship your order to the address
                provided during the order process. Please ensure that your
                shipping information is accurate and complete. We are not
                responsible for any delays or additional costs caused by
                incorrect or incomplete shipping information.
              </li>
              <li>
                8. Returns and Cancellations Due to the custom nature of our
                products, we do not accept returns or cancellations once an
                order has been placed and production has begun. However, if
                there is a defect or issue with the product you received, please
                contact us within [X] days of delivery, and we will work with
                you to resolve the issue.
              </li>
              <li>
                9. Limitation of Liability In no event shall we be liable for
                any indirect, incidental, special, consequential, or punitive
                damages arising out of or in connection with your use of our
                website, services, or products. Our total liability to you for
                any claim arising out of or in connection with your use of our
                website, services, or products shall not exceed the amount paid
                by you for the product(s) at issue.
              </li>
              <li>
                10. Changes to the Terms of Service We reserve the right to
                modify these Terms at any time. Any changes will be posted on
                this page, and your continued
              </li>
              <li>
                11. Governing Law and Dispute Resolution These Terms shall be
                governed by and construed in accordance with the laws of [Your
                Jurisdiction]. Any disputes arising out of or in connection with
                these Terms or your use of our website and services shall be
                resolved through amicable negotiations or, if necessary, through
                the courts of [Your Jurisdiction].
              </li>
              <li>
                12. Contact Us If you have any questions or concerns about these
                Terms of Service, please contact us at [contact@vintaggy.com].
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

export default Terms;
