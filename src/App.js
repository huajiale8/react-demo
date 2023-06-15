import './index.css'
// 依赖的数据
import React from "react";

// this 指向问题
class TestComponent extends React.Component {

    // 如果我们不用箭头函数，使用普通函数

    getList() {
        // 我们发现打印出来的this是undefined
        console.log(this)
    }

    // 解决这个问题 有两种方式
    // 1，使用箭头函数
    getLists = () => {
        console.log(this)
    }
    // 2.使用constructor
    // constructor() {
    //     super();
    //     // 使用bind强行执行修改this的指向
    //     // 永远指向当前组件实例对象 不推荐
    //     this.getList = this.getList.bind(this)
    // }
    // 3，标签中使用箭头函数的方式调用
// <button onClick={() => this.getList()}>点击</button>

    render() {
        return (
            <div>
                <button onClick={() => this.getList()}>点击</button>
                <button onClick={this.getLists}>箭头</button>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <TestComponent/>
        </div>
    )
}

export default App
