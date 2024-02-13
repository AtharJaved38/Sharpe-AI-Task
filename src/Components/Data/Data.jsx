import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import TxnDataService from "../../Services/Transaction.services";

const Data = () => {
  const [txn, setTxn] = useState([]);
  useEffect(() => {
    getTxns();
  }, []);

  // getiing all the transactions from firestore database
  const getTxns = async () => {
    const txns = await TxnDataService.getAllTxns();
    console.log(txns.docs);
    setTxn(txns.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <div >
        <Table striped bordered hover size="sm" style={{textAlign:"center"}}>
          <thead>
            <tr style={{border: "2px solid white"}}>
              <th >#</th>
              <th >Wallet Address</th>
              <th >Amount</th>
            </tr>
          </thead>
          <tbody>
            {txn.map((doc, index) => {
              return (
                <tr key={doc.id} style={{border: "2px solid white"}}>
                  <td >{index + 1}</td>
                  <td >{doc.WalletAddress}</td>
                  <td >{doc.Amount}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Data;
