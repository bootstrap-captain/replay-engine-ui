import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import MallPage from "../pages/Mall/MallPage";
import CustomerPage from "../pages/Admin/Customer/CustomerPage";
import AdminPage from "../pages/Admin/AdminPage";
import UserPage from "../pages/Admin/User/UserPage";

export const router = createBrowserRouter(createRoutesFromElements(
    /*顶层路由*/
    <Route path='/' element={<MainPage/>}>

        <Route path='mall' element={<MallPage/>}></Route>

        {/*二级路由*/}
        <Route path='admin' element={<AdminPage/>}>
            {/*三级路由*/}
            <Route path='user' element={<UserPage/>}></Route>
            <Route path='customer' element={<CustomerPage/>}></Route>
        </Route>

    </Route>
));
