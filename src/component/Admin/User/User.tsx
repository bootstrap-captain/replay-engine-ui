import React from "react";
import Display from "./component/Display";
import CreateUser from "./component/Create";
import Search from "./component/Search";
import {UserEntity} from "./entity/UserEntity";
import {query} from "../../../api/User";

export default function User() {

    const [data, setData] = React.useState<UserEntity[]>([{}]);
    const [queryCondition, setQueryCondition] = React.useState<UserEntity>({});
    let queryConditionRef = React.useRef<UserEntity>(queryCondition);

    const saveSearchCondition = (searchCondition: UserEntity) => {
        setQueryCondition(searchCondition);
        queryConditionRef.current = searchCondition;
    }

    const searchByCondition = () => {
        query(queryConditionRef.current).then((value) => {
            // @ts-ignore
            setData(value);
        })
    }

    return (
        <div>
            <Search saveSearchCondition={saveSearchCondition} searchByCondition={searchByCondition}/>
            <CreateUser searchByCondition={searchByCondition}/>
            <Display data={data} searchByCondition={searchByCondition}/>
        </div>
    );
}

