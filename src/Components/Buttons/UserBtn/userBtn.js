import React, { Fragment } from "react";
import Filter from "../../Filter/Filter";
import BtnLogin from "../LoginBtn/LoginBtn";
import styles from "./userBtn.module.css";

const UserBtn = ({ showToggle, show, FilterNames, LoginHandler }) => {
  return (
    <Fragment>
      <div className={styles.userBtn}>
        <button onClick={() => showToggle(true)}>{`${
          show ? "Hide Items" : "Show Items"
        }`}</button>
        <BtnLogin LoginHandler={LoginHandler} />
      </div>
      <Filter FilterNames={FilterNames} />
    </Fragment>
  );
};

export default UserBtn;
