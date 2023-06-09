import React from "react";
import style from "./WebsiteOwner.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Policies from "../Policies/Policies";

function WebsiteOwner() {
  return (
    <>
      <Navbar />
      <div className={style.ownerContainer}>
        <div className={style.ownerContent}></div>
      </div>
      <Footer />
      <Policies />
    </>
  );
}

export default WebsiteOwner;
