import Navbar from "./Navbar/NavBar";
import Footer from "./Footer/Footer";
import "./MainStyle.css";
import Body from "./Body/Body";

function Main (){
    return (
        <div className="main">
            <Navbar/>
            <main className="main_container">
                <Body />
            </main>
            <Footer/>
        </div>
    )
}

export default Main;