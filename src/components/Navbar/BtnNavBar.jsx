import "./BtnNavBarStyle.css";

function BtnNavBar ({btn}){
    return (
        <div className="single_btn">{ btn.name }</div>
     )
}

export default BtnNavBar;