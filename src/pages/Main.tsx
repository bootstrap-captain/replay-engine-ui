import {routers} from "../routers/Routers";
import {Outlet, useRoutes} from "react-router-dom";
import React from "react";
import Header from "../component/Header/Header";


/*一级路由*/
export default function Main() {
    /*引入路由表*/
    const erickRouters = useRoutes(routers);

    return (
        <div>
            <Header/>

            {/*路由匹配*/}
            {erickRouters}
            {/*展示二级菜单区的标记区，因为路由表引入的原因*/}
            <Outlet/>
        </div>
    );
}