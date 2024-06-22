import "./styles.css"
import blackWhite from "../../img/styles/blackWhight.png"
import portreit from "../../img/styles/portreit.png"
import japanese from "../../img/styles/japanese.png"
import polianizm from "../../img/styles/polianizm.png"
import realizm from "../../img/styles/realizm.png"
import blackwork from "../../img/styles/blackwork.png"
import Style from "./Style";
export default function Styles(){
    let list = [
        <Style styleImg={blackWhite} styleTitle={"Черно-белые"}/>,
        <Style styleImg={portreit} styleTitle={"Портреты"}/>,
        <Style styleImg={japanese} styleTitle={"Японские"}/>,
        <Style styleImg={polianizm} styleTitle={"Полинизия"}/>,
        <Style styleImg={realizm} styleTitle={"Реализм"}/>,
        <Style styleImg={blackwork} styleTitle={"Блэкворк"}/>
    ];
    return(
    <section>
        <div className="titleStyles">Стили тату</div>
        <div className="stylesTattoo">
            {list}
        </div>
    </section>
    )
}