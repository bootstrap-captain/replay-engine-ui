import Search from "./component/Search";
import Display from "./component/Display";
import Delete from "./component/Delete";
import Edit from "./component/Edit";
import React from "react";
import {CustomerDisplay, CustomerSearchEntity, GenderType} from "./entity/CustomerEntity";
import dayjs from "dayjs";
import {axiosRequest} from "../../utils";
import {AxiosResponse} from "axios";
import Create from "./component/Create";

export default function Customer() {
    /*数据结果*/
    const [dataTable, setDataTable] = React.useState<CustomerDisplay[]>(
        [{}]
    );

    /*搜索条件*/
    const queryCondition = React.useRef<CustomerSearchEntity>({
        customerName: '',
        customerPhoneNumber: '',
        customerGender: GenderType.FEMALE,
        customerBirthday: dayjs('2024-01-01')
    });

    /*页面第一次加载，完成数据的查询*/
    React.useEffect(() => {
        queryByCondition();
    }, [])


    /*发送查询请求*/
    const queryByCondition = async () => {
        let data = queryCondition.current;

        try {
            const response: AxiosResponse<CustomerDisplay, any> = await axiosRequest.post('/customer/query',
                {
                    customerName: data.customerName,
                    customerGender: data.customerGender,
                    customerPhoneNumber: data.customerPhoneNumber
                });

            // @ts-ignore
            setDataTable(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Search queryCondition={queryCondition} queryByCondition={queryByCondition}/>
            <Create queryByCondition={queryByCondition}/>

            {/*子组件直接需要用的数据*/}
            <Display dataTable={dataTable}

                /*传递父组件的数据给子组件： queryByCondition是当前组件的方法，跨越了Display组件，传递给了子组件*/
                     deleteRender={(displayEntity) => {
                         return <Delete entity={displayEntity} queryByCondition={queryByCondition}/>
                     }}

                /*传递父组件的数据给子组件*/
                     editRender={(displayEntity) => {
                         return <Edit entity={displayEntity} queryByCondition={queryByCondition}/>
                     }}
            />
        </div>
    );
}