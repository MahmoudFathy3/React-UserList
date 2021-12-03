import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({ FilterNames }) => {
  const [filter, setFilter] = useState("");

  const FilterHandler = (e) => {
    const name = e.target.value;
    setFilter(name);
    FilterNames(name);
  };

  return (
    <div className={styles.filterName}>
      <input
        type="text"
        placeholder="search"
        value={filter}
        onChange={FilterHandler}
      />
    </div>
  );
};

export default Filter;
