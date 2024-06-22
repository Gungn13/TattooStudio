import React, {useState} from "react";
import "./createTattoo.css";
import {generateImg} from "../../service/ApiService";
import {fromBase64} from "js-base64";





const CreateTattoo = () => {

    const [description, setDescription] = useState('');
    const [style, setStyle] = useState('');


    function generate(e){
        e.preventDefault();

        const descriptionTattoo = {description, style}

        generateImg(descriptionTattoo).then((response) => {
            console.log(response.data)
            const content = response.data;
            let base64= content[0].image
            const image = document.getElementById("generateImg")
            image.src = `data:image/png;base64,${base64.replace(
                /[\[\]']+/g,
                ""
            )}`;

        });

    }


    return(
        <section>
            <div className="titleCreateTattoo">Создать эскиз</div>
            <div>
                <div className={"createTattooBlock"}>
                    <div>
                    <label className={"labelTattoo"}>Опишите татуировку, которую хотите получить:</label>
                        <textarea className={"descriptionTattoo"} value={description} onChange={e => {setDescription(e.target.value)}}/>
                        <div className={"selectBlock"}>
                            <select className={"selectStyle"} name="selectStyle" value={style}
                                    onChange={(e) => setStyle(e.target.value)}>
                                <option value={""} disabled selected hidden>Выберите стиль эскиза</option>
                                <option value={0}>UHD</option>
                                <option value={1}>Anime</option>
                                <option value={2}>Default</option>
                            </select>

                            <div className={"generateBlock"}>
                                <button className={"buttonGenerate"} onClick={generate}>Сгенерировать эскиз</button>
                            </div>
                        </div>
                    </div>
                    <div className={"genImgBlock"}>
                        <img id={"generateImg"} className={"img"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateTattoo;