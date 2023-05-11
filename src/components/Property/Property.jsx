import React from "react";
import style from "./Property.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";
function Property() {
  return (
    <>
      <Navbar />
      <div className={style.Property}>
        <div className={style.PropertyContainer}>
          <h1>Intellectual Property and Licensing Agreement</h1>
          <span>Intellectual Property and Licensing Agreement</span>
          <div>
            This Intellectual Property and Licensing Agreement (“Agreement”) is
            entered into by and between [vintaggy] (“we”, “us”, “our”) and the
            user (“user”, “you”, “customer”) of our website and services.
            <ul>
              <li>
                1. User-Submitted Content You agree that you are solely
                responsible for any content, including but not limited to
                designs, images, and text, that you submit to our website and
                services (“User Content”). You represent and warrant that you
                own or have the necessary rights and licenses to use and submit
                the User Content, and that the User Content does not infringe
                upon any third-party intellectual property rights, such as
                copyrights, trademarks, or trade secrets.
              </li>
              <li>
                2. License Grant By submitting User Content, you grant us a
                non-exclusive, royalty-free, worldwide license to use,
                reproduce, modify, display, and distribute the User Content
                solely for the purpose of providing our services and fulfilling
                orders for customized products based on your User Content. This
                license shall remain in effect for the duration necessary to
                fulfill your order and any related obligations, such as customer
                support and warranty claims.
              </li>
              <li>
                3. Intellectual Property Rights You acknowledge and agree that
                all intellectual property rights, including but not limited to
                copyrights, trademarks, and trade secrets, in our website,
                services, and products, excluding the User Content, are owned by
                us or our licensors. You agree not to use, copy, reproduce,
                distribute, or create derivative works from our intellectual
                property without our express written permission.
              </li>
              <li>
                4. Indemnification You agree to indemnify, defend, and hold
                harmless us, our affiliates, and our respective officers,
                directors, employees, and agents from and against any and all
                claims, damages, losses, costs, and expenses, including
                reasonable attorney’s fees, arising out of or in connection with
                your breach of this Agreement, your violation of any third-party
                intellectual property rights, or any other wrongful act or
                omission by you in relation to your use of our website and
                services.
              </li>
              <li>
                5. Termination We reserve the right to terminate this Agreement
                and your access to our website and services if we believe, in
                our sole discretion, that you have violated any term or
                condition of this Agreement, infringed upon any third-party
                intellectual property rights, or engaged in any other conduct
                that we deem harmful to our business, reputation, or customers.
              </li>
              <li>
                6. Governing Law and Dispute Resolution This Agreement shall be
                governed by and construed in accordance with the laws of [Your
                Jurisdiction]. Any disputes arising out of or in connection with
                this Agreement or your use of our website and services shall be
                resolved through amicable negotiations or, if necessary, through
                the courts of [Your Jurisdiction].
              </li>
              <li>
                7. Entire Agreement This Agreement, together with our Terms of
                Service and Privacy Policy, constitutes the entire agreement
                between you and us with respect to your use of our website and
                services, and supersedes all prior or contemporaneous
                understandings or agreements, written or oral, regarding such
                subject matter.
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

export default Property;
