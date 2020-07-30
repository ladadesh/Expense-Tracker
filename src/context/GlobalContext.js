import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//intial state

const initialState = {
  transactions: [],
};

//create global context

export const GlobalContext = React.createContext();

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id, //data to be send
    });
  }

  function addTransactions(transactions) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
