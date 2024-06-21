import React from "react";
import Display from "./Display";
import CreateUser from "./Create";
import Search from "./Search";
import {User} from "./User";
import {query} from "../../api/User";

export default function Admin() {
    console.log('hi,admin')

    const [data, setData] = React.useState<User[]>([{}]);
    const [queryCondition, setQueryCondition] = React.useState<User>({});
    let queryConditionRef = React.useRef<User>(queryCondition);

    const saveSearchCondition = (searchCondition: User) => {
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

