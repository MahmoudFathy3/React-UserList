import React, { Fragment } from "react";
import Filter from "../../Filter/Filter";
import styles from "./userBtn.module.css";

const UserBtn = ({ showToggle, show, FilterNames }) => {
  return (
    <Fragment>
      <div className={styles.userBtn}>
        <button onClick={() => showToggle(true)}>{`${
          show ? "Hide Items" : "Show Items"
        }`}</button>
      </div>
      <Filter FilterNames={FilterNames} />
    </Fragment>
  );
};

export default UserBtn;
