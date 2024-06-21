import React from "react";

export default function Mall() {
    const [count, setCount] = React.useState(0);
    const countRef = React.useRef<number>();

    function updateCount() {
        let newNumber = 10;
        setCount(10)
        countRef.current = 10;
        log();
    }

    /*假如调用完了上面的方法，立刻要使用到count的值，就可以用countRef*/
    function log() {
        console.log(countRef.current)
    }

    return (
        <div>
            <h2>当前计数{count}</h2>
            <button onClick={updateCount}>改变计数器</button>
        </div>
    )
}