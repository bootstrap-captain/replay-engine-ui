import {User} from "../pages/Admin/User";
import {axiosRequest} from "../utils";

export async function query(user: User) {
    try {
        const data = await axiosRequest.post('/user/query',
            {
                username: user.username,
                type: user.type,
            });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function create(user: User) {
    try {
        const data = await axiosRequest.post('/user/create',
            {
                username: user.username,
                type: user.type,
            });

        return data;
    } catch (error) {
        console.log(error);
    }
}

