import React, { useState, Fragment } from "react";

const Inputs = ({ close, NewAddUser }) => {
  const [input, setInput] = useState({
    name: "",
    password: "",
    Age: "",
    phone: "",
    city: "",
    Skills: "",
    type: "",
  });

  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const sumbitHandler = (e) => {
    e.preventDefault();

    NewAddUser({
      id: Math.floor(Math.random() * 100),
      name: input.name,
      age: input.Age,
      phone: input.phone,
      city: input.city,
      Skill: input.Skills,
      type: input.type,
    });

    setInput({
      name: "",
      password: "",
      Age: "",
      phone: "",
      city: "",
      Skills: "",
      type: "",
    });
    close();
  };

  return (
    <Fragment>
      <h2>Create Account</h2>
      <form onSubmit={sumbitHandler}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={input.name}
          onChange={inputHandler}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Your Password"
          value={input.password}
          onChange={inputHandler}
        />

        <label htmlFor="Age">Age: </label>
        <input
          type="number"
          id="Age"
          placeholder="Your Age"
          value={input.Age}
          onChange={inputHandler}
        />

        <label htmlFor="phone">Phone: </label>
        <input
          type="number"
          id="phone"
          placeholder="Your Phone"
          value={input.phone}
          onChange={inputHandler}
        />

        <label htmlFor="city">City: </label>
        <select id="city" value={input.city} onChange={inputHandler}>
          <option value="..">...</option>
          <option value="Egypt">Egypt</option>
          <option value="USA">USA</option>
          <option value="Algeria">Algeria</option>
          <option value="Austria">Austria</option>
          <option value="Canada">Canada</option>
          <option value="Denmark">Denmark</option>
          <option value="France">France</option>
        </select>

        <label htmlFor="Skills">Skills: </label>
        <input
          type="text"
          id="Skills"
          placeholder="Your Skills"
          value={input.Skills}
          onChange={inputHandler}
        />

        <label htmlFor="type">Type: </label>
        <select id="type" value={input.type} onChange={inputHandler}>
          <option value="..">...</option>
          <option value="Boy">Boy</option>
          <option value="Girl">Girl</option>
        </select>
        <input type="submit" value="Create" />
      </form>
    </Fragment>
  );
};

export default Inputs;
