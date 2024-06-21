import React from "react";

export default function Mall() {
    const [count, setCount] = React.useState(0);

    function updateCount() {
        setCount((previous) => {
            return previous + 1;
        })
    }

    /*1. 页面第一次加载完毕后，调用一次
    * 2. 后续监测的值发生改变，再调用一次*/
    React.useEffect(() => {
        console.log('count', count)
    }, [count]);

    console.log('mall')

    return (

        <div>
            <h2>当前计数{count}</h2>
            <button onClick={updateCount}>改变计数器</button>
        </div>
    )
}