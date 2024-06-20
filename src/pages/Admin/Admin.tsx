import React, {BaseSyntheticEvent} from "react";
import Display from "./Display";
import CreateUser from "./Create";
import Search from "./Search";
import {User} from "./User";
import {query} from "../../api/User";
import {SelectChangeEvent} from "@mui/material";


export default function Admin() {

    console.log('hi,admin')
    const [data, setData] = React.useState<User[]>([{}]);

    const [queryCondition, setQueryCondition] = React.useState<User>({});

    /*从Search中找到查询条件*/
    const handleQueryCondition = (type: string) => {
        return (event: SelectChangeEvent|BaseSyntheticEvent) => {
            setQueryCondition({
                /*原对象解构*/
                ...queryCondition,
                /*新对象覆盖属性*/
                [type]: event.target.value
            });
        }
    }

    /*根据当前搜索条件查询*/
    const callQueryApi = () => {
        query(queryCondition).then((value) => {

            // @ts-ignore
            setData(value);
        })
    }

    /*1. 页面首次加载后，查询一次数据*/
    return (
        <div>
            <Search callQueryApi={callQueryApi}/>
            <CreateUser/>
            <Display data={data}/>
        </div>
    );
}