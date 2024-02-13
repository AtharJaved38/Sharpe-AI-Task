import Header from "./Components/Header/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Data from "./Components/Data/Data";
import Form from "./Components/Transaction/Form"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transaction" element={<Form />} />
        <Route path="/data" element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
