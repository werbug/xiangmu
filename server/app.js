//web 项目框架
var express = require('express');
//导入 request 模块 http 请求模块插件
var request = require('request');
// 实例化 express 模块
var app = express();
// 术语  ： 路由

// req : request 浏览器发送给服务器的对象
// res : response 服务器发送给浏览器的对象
app.route('/api').get(function(req, res){
	request.post({
		url : "http://op.juhe.cn/onebox/weather/query",
		formData:{
			cityname : "北京",
			key : "48f0c60d463f680e427d47cee43b8bc7"
		}
		/**
		 * error : 判断结果是否错误
		 * response : 请求的头文件信息
		 * data ： 返回的结果数据
		 */
	},function(error,response,data){
		res.send(data);
	});
});

// express 开启静态服务器，把指定的目录做跟目录
app.use(express.static("./dest"));

//创建一个 http 服务
var server  = require('http').createServer(app);
//监听端口和 ip 地址
//0.0.0.0 本机网卡
server.listen(9010, "0.0.0.0", function() {
	console.log('http://127.0.0.1:9010');
});