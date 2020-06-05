

console.log("这个就是项目的主入口文件-- react");


import "./scripts"
import "./styles/index.scss";





// import {demo} from "./scripts"

// import img from "./assets/images/img3.jpg";


import React, { Component, useState } from "react";    // 负责创建组件 
import ReactDOM from "react-dom";     // 负责 把组件渲染成真实DOM 

// 创建组件
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2> 这是我的 第一个  react 组件</h2>
//                 <h2> react -- javascript-xml 语言 </h2>
//                 <hr />
//                 {/* <Demo></Demo> */}
//             </div>
//         )
//     }
// }



// function app() {
//     const [count, setCount] = useState(0);
//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick={() => {
//                 setCount(count + 1)
//             }}>+</button>
//             <button onClick={() => { setCount(count - 1) }}>-</button>
//         </div>
//     )

// }


// class Demo extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2> demo - demo -demo </h2>
//                 <ImgDemo></ImgDemo>
//                 <FirstCpt></FirstCpt>
//             </div>
//         )
//     }
// }

// class ImgDemo extends React.Component{
//     render(){
//         return (
//             <img src={img} alt="" width="300" height="300"/>
//         )
//     }
// }

// class FirstCpt extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h2> first react Component 组件</h2>
//             </div>
//         )
//     }
// }

// var rootEle = document.getElementById("app");

// ReactDOM.render(
//     <App></App>,
//     rootEle
// )

// // document.getElementById("app").innerHTML = demo + "<img src="+img+" alt='' />";


// import "./styles/index.scss";




