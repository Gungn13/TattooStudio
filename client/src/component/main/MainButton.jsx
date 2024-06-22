import "./mainButton.css"
import {Link} from "react-router-dom";

export default function MainButton(){
    return(
        <section className="mainButton">
            <div className="row">
                <Link className="createTattoo" to="/createTattoo">Создай свой эскиз сам</Link>
            </div>
        </section>
    )
}