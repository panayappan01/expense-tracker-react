import React, { useReducer, createContext } from "react";
import { addTransactionInDb, getTransactions } from "../apis/api";
import contextReducer from "./contextReducer";
import axios from "axios";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //   Action Creators

  const deleteTransaction = async (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = async (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => {
    return currVal.type === "Expense"
      ? acc - currVal.amount
      : acc + currVal.amount;
  }, 0);

  console.log("Context ", transactions);

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
