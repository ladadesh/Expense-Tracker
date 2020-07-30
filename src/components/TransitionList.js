import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transactions from "./Transactions";

const TransitionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transactions transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransitionList;
