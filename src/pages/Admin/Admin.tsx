import React from "react";
import Display from "./Display";
import CreateUser from "./Create";
import Search from "./Search";
import {User} from "./User";
import {query} from "../../api/User";

export default function Admin() {
    console.log('hi,admin')
    const [data, setData] = React.useState<User[]>([{}]);
    const [writeOps, setWriteOps] = React.useState(false);

    const [queryCondition, setQueryCondition] = React.useState<User>({});


    /*将搜索条件维护在admin中*/
    const saveSearchCondition = (searchCondition: User) => {
        return () => {
            setQueryCondition(searchCondition);
        }
    }

    const writeOperation = () => {
        setWriteOps((prevState) => {
            return !prevState;
        })
    }

    /*副作用钩子监控queryCondition,每次会渲染两次：一次是queryCondition，一次是data*/
    React.useEffect(() => {
        /*调用后台数据*/
        query(queryCondition).then((value) => {
            // @ts-ignore
            setData(value);
        })
    }, [queryCondition,writeOps])


    /*1. 页面首次加载后，查询一次数据*/
    return (
        <div>
            <Search saveSearchCondition={saveSearchCondition}/>
            <CreateUser writeOperation={writeOperation}/>
            <Display data={data}/>
        </div>
    );
}