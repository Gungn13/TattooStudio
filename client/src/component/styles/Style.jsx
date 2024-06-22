import "./style.css"
export default function Style(props){
    let img = props.styleImg;
    let title = props.styleTitle;
return(
    <section>
        <div className="styleBlock" style={{
            backgroundImage: `url(${img})`
        }}>
            <div className="styleTitle">{title}</div>
        </div>
    </section>
)
}