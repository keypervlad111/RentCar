import "./ContactStyle.css"

function Contact (){
    return (
        <div className="contact_main">
            <div className="text_form">
                Imię i Nazwisko 
                <input type="text" className="input_contact" />
            </div>
            <div className="text_form">
                Adres e-mail 
                <input type="text" className="input_contact" />
             </div> 
            <div className="text_form">
                Wprowadź nazwę samochodu, który Cię interesuje 
                <input type="text" className="input_contact" />
            </div>
            <div className="text_form">
                Treść wiadomości 
                <input type="text" className="input_contact" />
            </div>
        </div>
    )
}

export default Contact;