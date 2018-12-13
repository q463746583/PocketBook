import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
// import "./styles/styles.scss";
import "./styles/base/_base.scss";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { addExpense } from "./action/expenses";
import { setTextFilter, sortByDate, sortByAmount } from "./action/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 100,
    createdAt: 1543453542525
  })
);
store.dispatch(
  addExpense({ description: "Gas", amount: 30, createdAt: 10000 })
);
store.dispatch(
  addExpense({ description: "Rent Bill", amount: 200, createdAt: 123 })
);

store.dispatch(sortByDate());
// store.dispatch(setTextFilter("Water biLL"));
// console.log(store.getState());
// const state = store.getState();
// console.log(getVisibleExpenses(state.expenses, state.filters));

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
const rootElement = document.getElementById("app");
ReactDOM.render(template, rootElement);
