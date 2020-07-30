import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransitionList from "./components/TransitionList";
import AddTransactions from "./components/AddTransactions";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransitionList />
        <AddTransactions />
      </div>
    </GlobalProvider>
  );
}

export default App;
