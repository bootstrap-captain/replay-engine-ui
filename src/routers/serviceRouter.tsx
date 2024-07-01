import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import MallPage from "../pages/Mall/MallPage";
import CustomerPage from "../pages/Admin/Customer/CustomerPage";
import AdminPage from "../pages/Admin/AdminPage";
import UserPage from "../pages/Admin/User/UserPage";
import Login from "../component/Login/Login";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        {/*主页面*/}
        <Route path='/' element={<MainPage/>}>

            <Route path='mall' element={<MallPage/>}></Route>


            {/*二级路由*/}
            <Route path='admin' element={<AdminPage/>}>
                {/*三级路由*/}
                <Route path='user' element={<UserPage/>}></Route>
                <Route path='customer' element={<CustomerPage/>}></Route>
            </Route>

        </Route>

        {/*登陆页面*/}
        <Route path='/login' element={<Login/>}></Route>

    </Route>
));
