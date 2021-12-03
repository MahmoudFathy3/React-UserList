import React, { Fragment } from "react";
import Filter from "../../Filter/Filter";
import styles from "./userBtn.module.css";

const userBtn = ({ showToggle, show, FilterHandler }) => {
  return (
    <Fragment>
      <div className={styles.userBtn}>
        <button onClick={() => showToggle(true)}>{`${
          show ? "Hide Items" : "Show Items"
        }`}</button>
      </div>
      <Filter FilterNames={FilterHandler} />
    </Fragment>
  );
};

export default userBtn;
