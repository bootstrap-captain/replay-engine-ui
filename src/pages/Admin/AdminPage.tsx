import {Outlet} from "react-router-dom";

export default function AdminPage() {
    return (
        <div>
            <h2>我是admin</h2>
            {/*admin下面的子路由定位*/}
            <Outlet/>
        </div>
    );
}