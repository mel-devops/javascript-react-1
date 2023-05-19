import React from "react";
import { useState } from "react";
import "./Main.css";
import "./Main";


const Account = () => {
  const [isShown, setShow] = useState(false);
  const clickHandler = () => {
    setShow(!isShown);
  };
  return (
    <div className="table">
      <h3>Account Information</h3>
      <tr>
        <td>Balance</td>
        <td>$100,000</td>
      </tr>
      <tr>
        <td>Interest</td>
        <td>%5.0</td>
      </tr>
      <tr>
        <td>Account Number {isShown ? <span>11-1234</span> : null}</td>
        <td>
          <div>
            <button onClick={() => clickHandler()}>
              {isShown ? "Hide" : "Show"}
            </button>
          </div>
        </td>
      </tr>
    </div>
  );
};
export default Account;
