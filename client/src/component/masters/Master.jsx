import "./master.css"

export default function Master(props){
    let img = props.img;
    let name = props.name;
    let description = props.description;
    return(
        <section>
            <div className="master">
                <img src={img} className="imgMaster"/>
                <div className="contentBlock">
                    <div className="masterInfo">
                        <div className="name">{name}</div>
                        <div className="description">{description}</div>
                    </div>
                    <div className="buttonBlock">
                    <button className="myProjects">Мои работы</button>
                    </div>
                </div>
            </div>
        </section>
    )
}