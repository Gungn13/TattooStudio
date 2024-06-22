import "./contact.css"
export default function Contact(props){
    let title = props.title;
    let content = props.content;
    return(
        <section>
            <div className="contactBlock">
                <div className="titleContent">
                    <div>{title}</div>
                    <div>{content}</div>
                </div>
            </div>
        </section>
    )
}