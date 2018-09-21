/**
 * @time  2018/9/21 10:26
 * @author  Bill Wang <1826001146@qq.com>
 * @desc    Async异步流程控制
 * @param   series()串行流程控制
 *          语法：series(tasks,callback)
 *          @tasks:可以是json,可以是array,参数类型不同，返回值不同，在回调函数中的返回值就是什么。
 *          @callback:回调函数，用来接收串行流程控制所得到的值。
 * @todo   练习并且熟练使用
 */
const async = require('Async');
async.series([
        (callback) => {
            callback(null, 'Hello');
        },
        (callback) => {
            callback(null, 'World');
        },
        (callback) => {
            callback(null, 'Bill Wang');
        }
    ],
    (err, results) => {
    //这里使用扩展运算符进行内部遍历数组的值，序列化参数列表
        console.log(...results)
    });