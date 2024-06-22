import "./services.css";
import Service from "./Service";
import createTattoo from "../../img/services/createTattoo.png"
import deleteTattoo from "../../img/services/deleteTattoo.png"
import piercing from "../../img/services/piercing.png"

export default function Services(){
    let list = [
        <Service imgUrl={createTattoo} nameService={"Сделать тату"}/>,
        <Service imgUrl={piercing} nameService={"Пирсинг"}/>,
        <Service imgUrl={deleteTattoo} nameService={"Удалить тату"}/>,
    ];
    return(
        <section>
            <p className="titleServices">Услуги</p>
            <div className="serviceBlock">
                {list}
            </div>
        </section>)
}