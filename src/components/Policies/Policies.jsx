import React from "react";
import style from "./Policies.module.css";
import { useNavigate } from "react-router-dom";

function Policies() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <hr />
      <div className={style.policyList}>
        <div className={style.policyItem}>
          <h4
            className={style.policyTitle}
            onClick={() =>
              navigate("/intellectual-property-and-licensing-agreement")
            }
          >
            Intellectual Property and Licensing Agreement
          </h4>
        </div>
        <div className={style.policyItem}>
          <h4
            className={style.policyTitle}
            onClick={() =>
              navigate("/legal-disclaimer-and-liability-disclaimer")
            }
          >
            Legal Disclaimer and Liability Disclaimer
          </h4>
        </div>
        <div className={style.policyItem}>
          <h4
            className={style.policyTitle}
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </h4>
        </div>
        <div className={style.policyItem}>
          <h4
            className={style.policyTitle}
            onClick={() => navigate("/return-and-cancellation-policy")}
          >
            Return and Cancellation Policy
          </h4>
        </div>
        <div className={style.policyItem}>
          <h4 className={style.policyTitle} onClick={() => navigate("/terms")}>
            Terms
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Policies;
