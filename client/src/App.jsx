import { Route, Routes} from "react-router-dom";
import MainButton from "./component/main/MainButton";
import Services from "./component/services/Services";
import React from "react";
import Header from "./component/header/Header";
import Masters from "./component/masters/Masters";
import Contacts from "./component/contacts/Contacts";
import AboutUs from "./component/aboutUs/AboutUs";
import Styles from "./component/styles/Styles";
import MakeOrder from "./component/makeOrder/MakeOrder";
import CreateTattoo from "./component/createTattoo/CreateTattoo";
export default function App(){
    return(
        <>
            <Routes>
                <Route path = "" element={<Header/>}>
                    <Route index element={<MainButton/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/masters" element={<Masters/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/aboutUs" element={<AboutUs/>}/>
                    <Route path="/styles" element={<Styles/>}/>
                    <Route path="/createTattoo" element={<CreateTattoo/>}/>
                    <Route path="/makeOrder" element={<MakeOrder/>}/>
                </Route>
            </Routes>
        </>
    )
}