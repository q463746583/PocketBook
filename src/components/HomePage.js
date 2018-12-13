import React from "react";
import { Link } from "react-router-dom";
import ExpenseList from "./ExpenseList";
import Filters from "./Filters";

const HomePage = () => (
  <div>
    <Filters />
    <ExpenseList />
  </div>
);

export default HomePage;
