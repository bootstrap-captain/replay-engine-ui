import {axiosRequest} from "../utils";
import {CustomerDisplay, CustomerSearchEntity} from "../pages/Customer/entity/CustomerEntity";
import {httpCall} from "../utils/axiosRequest";

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
        const data = await httpCall('/customer/query', customerSearchEntity);
        console.log('query:', data)
    } catch (error) {
        console.log(error);
    }
}

export async function updateCustomer(customerDisplay: CustomerDisplay) {
    try {
        const data = await httpCall('/customer/update', customerDisplay);
        console.log('update:', data)
    } catch (error) {
        console.log(error);
    }
}

export async function createCustomer(customerDisplay: CustomerDisplay) {
    try {
        const data = await httpCall('/customer/create', customerDisplay);
        console.log('create:', data)
    } catch (error) {
        console.log(error);
    }
}