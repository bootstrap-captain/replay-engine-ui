import {axiosRequest} from "../utils";
import {UserEntity} from "../component/Admin/User/entity/UserEntity";

export async function query(user: UserEntity) {
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

export async function create(user: UserEntity) {
    try {
        const data = await axiosRequest.post('/user/create', user);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteById(userId: string | undefined) {
    try {
        const data = await axiosRequest.get('/user/delete', {
            params: {
                userId: userId
            }
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function update(user: UserEntity) {
    try {
        const data = await axiosRequest.post('/user/update', {
            userId: user.userId,
            type: user.type,
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

