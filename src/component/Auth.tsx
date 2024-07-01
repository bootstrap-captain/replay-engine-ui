/*整个app的入口auth*/

/*如果有token，则渲染子元素，否则，跳转到登陆页面*/
import {TOKEN} from "./constant/Constants";
import {useAppSelector} from "../redux/hooks";
import {useNavigate} from "react-router-dom";

export function Auth(props: any) {

    let navigate = useNavigate();

    let localToken = localStorage.getItem(TOKEN);

    let reduxToken = useAppSelector(state => {
        return state.login.token;
    });

    if (localToken !== '' && reduxToken !== '') {
        /*渲染剩下的页面*/
        return props.children;
    } else {
        /*跳转到登陆界面*/
        navigate('login', {
            replace: false
        })
    }

}