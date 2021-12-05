import React, { Fragment, useState } from "react";
import User from "./User";
import styles from "./UserList.module.css";
import UserBtn from "../Buttons/UserBtn/userBtn";
import Login from "../Login/Login";

const UserList = () => {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(true);
  const [state, setState] = useState([
    {
      id: Math.floor(Math.random() * 100),
      name: "Mahmoud",
      age: 24,
      phone: `01110234902`,
      city: "Cairo",
      Skill: "Front-End Developer (React.js)",
      type: "Boy",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Sara",
      age: 20,
      phone: `01110594432`,
      city: "Cairo",
      Skill: "Software Engineer ",
      type: "Girl",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Karabwy",
      age: 30,
      phone: `0119982152`,
      city: "Cairo",
      Skill: "Full-Stack Development",
      type: "Boy",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Mirna",
      age: 19,
      phone: `01010246102`,
      city: "Cairo",
      Skill: "Graphic Design",
      type: "Girl",
    },
  ]);

  const NewAddUser = (data) => {
    setState((PrevState) => [...PrevState, data]);
  };

  const FilterNames = (name) => {
    setFilter(name);
  };

  const NamesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };

  const showToggle = () => {
    setShow(!show);
  };

  const DelHandler = (id) => {
    setState((PrevState) => {
      return PrevState.filter((el) => el.id !== id);
    });
  };
  const [login, setLogin] = useState(false);

  const LoginHandler = () => {
    setLogin(!login);
  };

  return (
    <Fragment>
      <Login
        checkLogin={login}
        closeModel={() => setLogin(false)}
        NewAddUser={NewAddUser}
      />
      <div className={styles.UserList}>
        <UserBtn
          showToggle={showToggle}
          show={show}
          FilterNames={FilterNames}
          LoginHandler={LoginHandler}
        />
        <User items={NamesHandler()} DelHandler={DelHandler} show={show} />
      </div>
    </Fragment>
  );
};

export default UserList;
