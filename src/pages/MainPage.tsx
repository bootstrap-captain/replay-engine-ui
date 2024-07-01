import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import RouterAuth from "../routers/RouterAuth";
/*一级路由*/
export default function MainPage() {

    return (
        <div>
            <RouterAuth>
                <Header/>
                <Outlet/>
                <Footer/>
            </RouterAuth>
        </div>
    );
}