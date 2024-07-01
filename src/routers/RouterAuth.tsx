import {useAppSelector} from "../redux/hooks";
import {Navigate} from "react-router-dom";
import React from "react";

/*路由守卫*/
export default function RouterAuth(props: any) {

    const token = useAppSelector(state => {
        return state.login.token;
    });

    if (token === '') {
        return (<Navigate to='/login'/>);
    } else {
        return (
            props.children
        )
    }
}