import React, { Fragment } from "react";
import styles from "./user.module.css";

const User = ({ items, DelHandler, show }) => {
  const itemList = items.map((item) => {
    return (
      <div
        className={`${show ? styles.userBox : styles.hide} ${
          item.type === "Boy" ? styles.boy : styles.girl
        }`}
      >
        <h2> {item.name} </h2>
        <span> {item.age} </span>
        <span> {`0${item.phone}`} </span>
        <span> {item.city} </span>
        <p> {item.Skill} </p>
        <span> {item.type} </span>
        <button className={styles.delBtn} onClick={(e) => DelHandler(item.id)}>
          X
        </button>
      </div>
    );
  });

  return <Fragment>{itemList}</Fragment>;
};

export default User;
