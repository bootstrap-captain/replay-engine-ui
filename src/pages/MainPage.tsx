import {Outlet} from "react-router-dom";
import React from "react";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";


/*一级路由*/
export default function MainPage() {
    return (
        <div>
            {/*只有Auth验证通过，才会去渲染剩下的页面*/}

            <Header/>
            <Outlet/>
            <Footer/>

        </div>
    );
}