import React from "react";
import "./service.css";
import {Link} from "react-router-dom";

export default function Service(props){
    let img = props.imgUrl;
    let nameService = props.nameService;
    console.log(img)
    return(
        <section>
            <div>
            <div className="imgBox" style={{
                backgroundImage: `url(${img})`
            }}>
                <div className="titleService">{nameService}</div>
                <div className="bottomBlock">
                    <div className="formalizeButton">
                        <Link to={"/makeOrder"}>Оформить</Link>
                    </div>
                </div>

            </div>
            </div>
        </section>
    )
}