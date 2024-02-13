import React, { useState } from "react";
import "./form.css";
import TxnDataService from "../../Services/Transaction.services.js";

const Form = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for Null Fields
    if (walletAddress === "" || amount === "") {
      setError({ error: true, msg: "All fields are mandatory!" });
      return;
    }

    // Validation for Ethereum Address
    let regex = new RegExp(/^(0x)?[0-9a-fA-F]{40}$/);
    if (regex.test(walletAddress) == false) {
      setError({ error: true, msg: "Address format is not valid" });
      return;
    }


    // Validation for Amount
    const num = parseInt(amount);
    if (num == 0 || num > 10000) {
      console.log(parseFloat(amount));
      setError({ error: true, msg: "Invalid Amount! Should be in range 0-10000" });
      return;
    }

    const newTxn = {
      WalletAddress: walletAddress,
      Amount: amount,
    };

    try {
      await TxnDataService.addTxn(newTxn);
      setError({ error: false, msg: "Transaction Successfull!" });
    } catch (err) {
      setError({
        error: true,
        msg: "Transaction Failed! Connection Went Wrong",
      });
    }

    setAmount("");
    setWalletAddress("");
  };

  return (
    <>
      {/*Set Alert */}
      {error?.msg && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
          vari
        >
          {error?.msg}
          
        </div>
      )}

      {/* Form  */}
      <div className="container">
        <h2 className="form-title">Fill the form</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="label">Wallet Address</div>
          <input
            type="text"
            name="wal-add"
            id="wal-add"
            placeholder="Ex. 0xAC....."
            // required
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
          <div className="label">Amount</div>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="0-10000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // required
          />
          <div>
            <button className="btn btn-secondary" type="submit">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
