import React, {useState} from "react";
import "./makeOrder.css";
import {createOrder} from "../../service/ApiService";
import {useNavigate} from "react-router-dom";

const MakeOrder = () =>{

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [typeService, setTypeService] = useState('');

    const navigator = useNavigate();
    function saveOrder(e){
        e.preventDefault();

        const order = {name, phoneNumber, typeService};

        createOrder(order).then((response) => {
            console.log(response.data);
            navigator("/")
        })
    }

    return(
        <section>
            <div className="titleMakeOrder">Оставить заявку</div>
            <form className={"orderForm"}>
                <div className={"personalData"}>
                    <label>Введите ваше имя:</label>
                    <input className={"text-field_input"} name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={"phoneNumber"}>
                <label>Введите ваш номер телефона:</label>
                    <input className={"text-field_input"} name="phoneNumber" value={phoneNumber} onChange={
                        (e) => setPhoneNumber(e.target.value)}/>
                </div>
                <div className={"selectServiceBlock"}>
                    <label>Выберите услугу:</label>
                    <select className={"selectService"} name="typeService" value={typeService} onChange={
                        (e) => setTypeService(e.target.value)}>
                        <option value={""} disabled selected hidden>Выберите услугу</option>
                        <option value={"createTattoo"}>Сделать тату</option>
                        <option value={"deleteTattoo"}>Удалить тату</option>
                        <option value={"piercing"}>Пирсинг</option>
                    </select>
                </div>
                <div className={"sendBlock"}>
                    <div className={"sendOrder"}>
                        <button onClick={saveOrder}>Оставить заявку</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default MakeOrder;