import React, { useState, Fragment } from "react";
import User from "./User";
import styles from "./UserList.module.css";
import UserBtn from "../Buttons/UserBtn/userBtn";

const UserList = () => {
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(true);
  const [state, setState] = useState([
    {
      id: Math.floor(Math.random() * 100),
      name: "Mahmoud",
      age: 24,
      phone: 1110234902,
      city: "Cairo",
      Skill: "Front-End Developer (React.js)",
      type: "Boy",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Sara",
      age: 20,
      phone: 1110594432,
      city: "Cairo",
      Skill: "Software Engineer ",
      type: "Girl",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Karabwy",
      age: 30,
      phone: 119982152,
      city: "Cairo",
      Skill: "Full-Stack Development",
      type: "Boy",
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Mirna",
      age: 19,
      phone: 1010246102,
      city: "Cairo",
      Skill: "Graphic Design",
      type: "Girl",
    },
  ]);

  const FilterHandler = (name) => {
    setFilter(name);
  };

  const NamesHandler = (item) => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return item;
  };

  const showToggle = () => {
    setShow(!show);
  };

  const DelHandler = (id) => {
    setState((PrevState) => {
      return PrevState.filter((el) => el.id !== id);
    });
  };

  const ItemList = state.map(({ ...item }) => {
    return (
      <Fragment key={item.id}>
        <User items={NamesHandler(item)} DelHandler={DelHandler} show={show} />
      </Fragment>
    );
  });

  return (
    <div className={styles.UserList}>
      <UserBtn
        showToggle={showToggle}
        show={show}
        FilterHandler={FilterHandler}
      />
      {ItemList}
    </div>
  );
};

export default UserList;
