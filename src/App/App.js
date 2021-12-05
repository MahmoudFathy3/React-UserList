import React, { useState, Fragment } from "react";
import "./App.css";
import UserList from "../Components/UserList/UserList";
import Login from "../Components/Login/Login";

const App = () => {
  return (
    <Fragment>
      <div className="Container">
        <UserList />
      </div>
    </Fragment>
  );
};

export default App;
