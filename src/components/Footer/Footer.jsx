import { useState } from "react";
import "./Footer.css"
import FooterItem from "./FooterItem";

function Footer() {
    const [footerData, setFooterData] = useState([
        {
            name: "Godziny pracy wypożyczalni",
            children: [
                { LinkText: "Pon-Pt - 10:00-20:00", linkUrl: "/o_nas" },
                { LinkText: "Sob - 10:00-16:00", linkUrl: "/o_nas" },
                { LinkText: "Niedz - 10:00-14:00", linkUrl: "/o_nas" }
            ]
        },
        {
            name: "Kontakt z nami",
            children: [
                { LinkText: "Adres: ul.Wrocławska 14/1, Bielany Wr. ", linkUrl: "/o_nas" },
                { LinkText: "Tel: +48 730 173 175", linkUrl: "/o_nas" },
                { LinkText: "Email: rezerwacje@fazicars.pl ", linkUrl: "/o_nas" }
            ]
        },
        {
            name: "Polecane lokalizacje",
            children: [
                { LinkText: "Odział - Wrocław", linkUrl: "/o_nas" },
                { LinkText: "Odział - Warszawa", linkUrl: "/o_nas" },
                { LinkText: "Odział - Gdynia", linkUrl: "/o_nas" }
            ]
        },
    ])

    return (
        <div className="footer_main_container" style={{ "--footer-lenght": footerData.length }}>
            <div className="colums_container">
                {footerData.map(item => <FooterItem key={item.name} item={item} />)}
            </div>
        </div>
    )
}

export default Footer;