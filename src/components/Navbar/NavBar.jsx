import "./NavBarStyle.css"
import logo from "../../assets/LogoRentCar.png"
import BtnNavBar from "./BtnNavBar";
import { useState } from "react";

function NavBar (){
    const [btnNavBar, setBtnNavBar] = useState([
        {name: "home", url: "/home"},
        {name: "cars", url: "/cars"},
        {name: "contact", url: "/contact"}
    ])
    return (
        <div className="navbar">
            <div className="container_navbar">
                <img src={logo} alt="Alternative" />
                <div className="buttons" style={{ "--btnNavBar-lenght": btnNavBar.length }}>
                    {btnNavBar.map(btn => (<BtnNavBar btn={btn} />))}
                </div>
                <div className="reservation_btn">
                    <button className="reservation_btn_children">Reservation Online</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;