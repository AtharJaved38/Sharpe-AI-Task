import { db } from "../Firebase-config";

import { collection, getDocs, addDoc } from "firebase/firestore";

const txnCollectionRef = collection(db, "transaction");
class TxnDataService {

    //Adding the Transactional records
    addTxn = (newTxn) =>{
        return addDoc(txnCollectionRef, newTxn);
    }

    // Fetching the transactional records
    getAllTxns = () => {
        return getDocs(txnCollectionRef);
    }
}


export default new TxnDataService();
