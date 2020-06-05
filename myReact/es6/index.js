function* getHello(){
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = getHello();

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())


function* gen() {
    yield  123 + 456;
    yield  444 + 555;
    return "xxxxx";
}

var a = gen();

console.log(a.next())
console.log(a.next())
console.log(a.next())
// function* F() {
//     this.a = 1;
//     yield this.b = 2;
//     yield this.c = 3;
//   }
//   var obj = {};
//   var f = F.call(obj);
  
//   f.next();  // Object {value: 2, done: false}
//   f.next();  // Object {value: 3, done: false}
//   f.next();  // Object {value: undefined, done: true}
  
// //   obj.a // 1
// //   obj.b // 2
// //   obj.c // 3


// async 隐藏的Promise 
// async function getStockPriceByName(name) {

//     function getStockSymbol(name){
//         return name + " zuo "   // goog + zuo
//     }

//     function getStockPrice(symbol){
//         return  " RMB 1810 "+symbol;
//     }

//     const symbol = await getStockSymbol(name);
//     const stockPrice = await getStockPrice(symbol);   
//     return stockPrice;
// }

// getStockPriceByName('goog').then(function (result) {
//       console.log(result);
// });


function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
  
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 2000);


  import {Toast } from "antd-mobile"
  import axios from 'axios'
  // 测试地址
  // axios.defaults.baseURL = 'http://47.104.209.44:1810';
  axios.defaults.baseURL = 'http://localhost:3000';
  // 线上地址
  // axios.defaults.baseURL = '';
  // request拦截器   
  axios.interceptors.request.use(function (config) {
      // 进行 ajax 发送之前 操作  loading 弹框 
      // Toast.loading("加载中",1000000);
      return config;
  }, function (error) {
    
    return Promise.reject(error);
  });
  var http = {
  
    /** get 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    get: function(url,params){
      return new Promise((resolve,reject) => {
        axios.get(url,{
          params:params
        })
        .then((response) => {
          // Toast.hide();
          resolve( response.data );
        })
        .catch((error) => {
          // Toast.hide();
          // Toast.info("请求失败!")
          reject( error );
        });
      })
    },
    /** post 请求
     * @param  {接口地址} url
     * @param  {请求参数} params
     */
    post: function(url,params){
      return new Promise((resolve,reject) => {
        axios.post(url,params)
        .then((response) => {
          // Toast.hide();
          resolve( response.data );
        })
        .catch((error) => {
          // Toast.hide();
          // Toast.info("请求失败!")
          reject( error );
        });
      })
    }
}

async function  textRequest(){
    var data =   await http.get("/vue/allGoods",{limit:10});
    return data;
} 


textRequest().then(res=>{console.log(res)})

async function getGoodTypes(){
  var  data = await http.get("/vue/getTypes");
  console.log(data);
}

// getGoodTypes();


function getGoodTypesSync(){
  var  data =  http.get("/vue/getTypes");
  console.log(data);
}

// getGoodTypesSync();