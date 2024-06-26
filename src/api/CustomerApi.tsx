import {axiosRequest} from "../utils";
import {postHttpCall} from "../utils/axiosRequest";
import {CustomerDisplay, CustomerSearchEntity} from "../component/Admin/Customer/entity/CustomerEntity";

export function query(customerSearchEntity: CustomerSearchEntity) {
    try {
        const data = axiosRequest.post('/customer/query',
            {
                customerSearchEntity
            });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function queryCustomer(customerSearchEntity: CustomerSearchEntity) {
    try {
        const data = await postHttpCall('/customer/query', customerSearchEntity);
        console.log('query:', data)
    } catch (error) {
        console.log(error);
    }
}

export async function updateCustomer(customerDisplay: CustomerDisplay) {
    try {
        const data = await postHttpCall('/customer/update', customerDisplay);
        console.log('update:', data)
    } catch (error) {
        console.log(error);
    }
}

export async function createCustomer(customerDisplay: CustomerDisplay) {
    try {
        const data = await postHttpCall('/customer/create', customerDisplay);
        console.log('create:', data)
    } catch (error) {
        console.log(error);
    }
}