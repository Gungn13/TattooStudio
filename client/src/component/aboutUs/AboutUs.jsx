import "./aboutUs.css"
import leftTop from "../../img/aboutUs/leftTop.jpg"
import leftBot from "../../img/aboutUs/leftBot.jpg"
import rightTop from "../../img/aboutUs/rightTop.jpg"
import rightBot from "../../img/aboutUs/rightBot.jpg"
export default function AboutUs(){
    return(
        <section className="aboutUsImg">
            <div className="aboutUsBlock">
                <div className="title">О нас</div>
                <div className="content">Тату студия в Москве – это лучшие мастера, современное оборудование,
                    ответственные и доброжелательные администраторы, уютная атмосфера студии.<br/><br/>
                    Мы открылись 19 февраля 2024 года и продолжаем развиваться!<br/><br/>
                    Мы открыты c 11:00 до 20:00 каждый день, работаем в кредит и рассрочку.<br/><br/>
                    Наша студия находится в атмосферном живописном месте, в 3 минутах пешей доступности от станции
                    метро.<br/><br/>
                    Вы можете обратиться к нам и получить профессиональную и бесплатную консультацию по вопросам
                    татуировки. А еще, зарядиться массой положительных эмоций и отличным настроением.
                </div>
            </div>
            <div className="imgBlock">
                <img src={leftTop}/>
                <img src={leftBot}/>
                <img src={rightTop}/>
                <img src={rightBot}/>
            </div>
        </section>
    )
}