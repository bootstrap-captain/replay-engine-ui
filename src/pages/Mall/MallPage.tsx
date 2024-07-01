import React from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export default function MallPage(props:any) {

    let navigate: NavigateFunction = useNavigate();

    async function jump() {
        let data = 1;
        if (data === 1) {
            navigate('/admin/user', {
                replace: false,
                state: {}
            })
        }
    }

    return (
        <div>
            <button onClick={jump}>跳转到Cart</button>
            <button onClick={jump}>跳转到Good</button>
        </div>
    );
}