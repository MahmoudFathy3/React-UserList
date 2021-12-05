import React, { Fragment } from "react";
import ReactDom from "react-dom";
import styles from "./Login.module.css";
import Inputs from "./Input";

const LogModel = ({ checkLogin, close }) => {
  return (
    <div
      className={`${styles.Model} ${checkLogin ? styles.show : null}`}
      onClick={close}
    ></div>
  );
};

const Overlay = ({ checkLogin, close, NewAddUser }) => {
  return (
    <div className={`${styles.overlay} ${checkLogin ? styles.show : null}`}>
      <div className={styles.box}>
        <Inputs close={close} NewAddUser={NewAddUser} />
      </div>
    </div>
  );
};

const Login = ({ checkLogin, closeModel, NewAddUser }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          <LogModel checkLogin={checkLogin} close={closeModel} />
          <Overlay
            checkLogin={checkLogin}
            close={closeModel}
            NewAddUser={NewAddUser}
          />
        </Fragment>,
        document.getElementById("Login")
      )}
    </Fragment>
  );
};

export default Login;
