import "../styles/App.scss";
import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Login from "../components/Login.js"
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import MainSns from "./MainSns";


function App() {
  return (
    <Login></Login>
    // <main>
    // <Register></Register>
    // </main>
    // <MainSns></MainSns>
  );
}

export default App;
