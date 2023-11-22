import Navbar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import Home from "./Body/Home.jsx";
import "./MainStyle.css";
import { Routes, Route } from "react-router-dom";
import Cars from "./Body/Cars.jsx";
import Contact from "./Body/Contact.jsx";

function Main (){
    return (
        <div className="main">
            <Navbar/>
            <main className="main_container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/home" element={<Home/>} />
            </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default Main;