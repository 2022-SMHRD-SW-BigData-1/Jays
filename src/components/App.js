import "../styles/App.scss";
import Login from "../components/Account/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register.js";
import MainSns from "./MainSns";
import MyProfile from "./Account/MyProfile";
import Login from "./Login";

function App() {
  return (
    <>
      {/* <MyProfile></MyProfile> */}
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mainsns" element={<MainSns></MainSns>}></Route>
      </Routes>
    </>
  );
}

export default App;
