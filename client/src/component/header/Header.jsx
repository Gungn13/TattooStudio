import "./Header.css";
import {Link, Outlet} from "react-router-dom";

export default function Header(){

    return(
        <header className="header">
                <nav className="wrapper">
                            <Link to="/">Главная</Link>
                            <Link to="/services">Услуги</Link>
                            <Link to="/styles">Стили тату</Link>
                            <Link to="/masters">Мастера</Link>
                            <Link to="/contacts">Контакты</Link>
                            <Link to="/aboutUs">О нас</Link>
                </nav>
            <Outlet/>
        </header>
    )
}