export function Hello() {

    function surprise(): void {
        alert(`hello `)
    }

    return (
        <div>
            <h2>我是hello组件</h2>
            <button onClick={surprise}>点击查看惊喜</button>
        </div>
    );
}