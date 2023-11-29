import HomeChildrenCars from "./HomeChildrenCars";
import "./HomeStyle.css"
function Home (){
    return (
        <div className="home_main">
            <div className="heading"> Samochody polecane przez nas: </div>
            <HomeChildrenCars />
        </div>
    )
}

export default Home;