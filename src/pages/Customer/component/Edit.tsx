import {CustomerDisplay} from "../entity/CustomerEntity";

type CustomerEditProps = {
    queryByCondition: () => Promise<void>;
    entity: CustomerDisplay
}

export default function Edit(props: CustomerEditProps) {
    return (
        <></>
    );
}