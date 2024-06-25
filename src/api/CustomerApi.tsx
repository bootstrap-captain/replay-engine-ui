import {axiosRequest} from "../utils";
import {CustomerSearchEntity} from "../pages/Customer/entity/CustomerEntity";

export async function query(customerSearchEntity: CustomerSearchEntity) {
    try {
        const data = await axiosRequest.post('/customer/query',
            {
                customerSearchEntity
            });

        return data;
    } catch (error) {
        console.log(error);
    }
}