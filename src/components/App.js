import "../styles/App.scss";
import Login from "../components/Account/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register.js";
import MainSns from "./MainSns";

function App() {
  return (
    //<Login></Login>
    // <main>
    // <Register></Register>
    // </main>
    <MainSns></MainSns>
  );
}

export default App;
