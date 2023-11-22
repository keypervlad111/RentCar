import "./BtnNavBarStyle.css";
import { Link } from 'react-router-dom'

function BtnNavBar ({btn}){
    return (
        <div className="single_btn"><Link style={{ textDecoration: 'none' }} to={btn.url}>{ btn.name }</Link></div>
     )
}

export default BtnNavBar;