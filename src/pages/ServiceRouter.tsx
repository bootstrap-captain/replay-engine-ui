import React from "react";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {Home} from "../component/Home/Home";
import {Cart} from "../component/Cart/Cart";
import {Admin} from "../component/Admin/Admin";
import {Approve} from "../component/Approve/Approve";
import {LoginContainer} from "../container/user/LoginContainer";

export function ServiceRouter() {
    return (
        <>
            <div>

                <Link to='/home'></Link>
                <Link to='/cart'></Link>
                <Link to='/admin'></Link>
                <Link to='/approve'></Link>

                {/*不管以什么方式进来，都会跳转到登陆页面*/}
                <Redirect to='/login'/>

                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/cart' component={Cart}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/approve' component={Approve}></Route>
                    <Route path='/login' component={LoginContainer}></Route>
                </Switch>

            </div>
        </>
    );
}