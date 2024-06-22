import "./masters.css"
import Master from "./Master";
import master1 from "../../img/masters/masters1.jpg"
import master2 from "../../img/masters/masters2.jpg"

export default function Masters(){
    let list = [
        <Master img={master1} name="Максим" description="Сделал дело гуляй смело"/>,
        <Master img={master2} name="Катя" description="Высоко сижу, далеко гляжу"/>
    ];
    return(
        <>
            <div className="titleMasters">Наши мастера</div>
            {list}
        </>
    )
}