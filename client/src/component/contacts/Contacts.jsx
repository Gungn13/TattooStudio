import "./contacts.css"
import Contact from "./Contact";
export default function Contacts(){
    let contacts = [
        <Contact title = "Адрес" content = "ул. Иванова д.1 под.1"/>,
        <Contact title = "Телефон" content = "8-800-555-35-35"/>
    ]
    return(
        <section>
            <p className="titleContacts">Контакты</p>
            <div className="contactsBlock">
                {contacts}
            </div>
        </section>
    )
}