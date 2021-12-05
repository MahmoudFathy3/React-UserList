import React, { Fragment } from "react";

const BtnLogin = ({ LoginHandler }) => {
  return (
    <Fragment>
      <button onClick={() => LoginHandler(true)}>Login</button>
    </Fragment>
  );
};

export default BtnLogin;
