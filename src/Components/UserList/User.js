import React from "react";
import styles from "./user.module.css";

const User = ({ items, DelHandler, show }) => {
  return (
    <div
      className={`${show ? styles.userBox : styles.hide} ${
        items.type === "Boy" ? styles.boy : styles.girl
      }`}
    >
      <h2> {items.name} </h2>
      <span> {items.age} </span>
      <span> {`0${items.phone}`} </span>
      <span> {items.city} </span>
      <p> {items.Skill} </p>
      <span> {items.type} </span>
      <button className={styles.delBtn} onClick={(e) => DelHandler(items.id)}>
        X
      </button>
    </div>
  );
};

export default User;
