/*定义数据类型*/
import {Dayjs} from "dayjs";

/*展示数据*/
export type CustomerDisplay = {
    customerId?: string;
    customerName?: string;
    customerPhoneNumber?: string;
    customerEmail?: string;
    customerAge?: number;
    customerAddress?: string;
    customerGender?: GenderType;
    customerBirthday?: Dayjs|null;
    createdTime?: string;
    lastUpdateTime?: string;
}

/*查询条件*/
export type CustomerSearchEntity = {
    customerName: string;
    customerPhoneNumber: string;
    customerGender: GenderType;
    customerBirthday: Dayjs | null;
}

export enum GenderType {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    HALF_MONSTER = 'HALF_MONSTER'
}