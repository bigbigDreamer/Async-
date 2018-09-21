/**
 * @time  2018/9/21 10:44
 * @author  Bill Wang <1826001146@qq.com>
 * @desc  瀑布模式流程控制
 * @param  waterfall(tasks,callback)
 *         @tasks:可以是一个数组
 *         @callback:回调函数，用来接收前面返回的结果
 * @todo  练习并且熟练使用
 */
const async = require('async');
async.waterfall([
    (callback) => {
        callback(null, 1);
    },
    (data,callback) => {
        callback('test', 2);
    },
    (data,callback) => {
        callback(null, 3);
    }
],(err,results)=>{
    console.log(results)
})