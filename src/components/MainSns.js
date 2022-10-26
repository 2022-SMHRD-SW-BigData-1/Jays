import "../styles/App.scss";
import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Login from "../components/Login.js"
import { Route, Routes } from "react-router-dom";
import Register from "./Register";

function MainSns(){
    return(
       
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
        
    );
}
export default MainSns;