﻿var settings = require('../settings');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
// var db_options={
        // w:-1,// 设置w=-1是mongodb 1.2后的强制要求，见官方api文档
        // logger:{
			// doDebug:true,
			// debug:function(msg,obj){
				// console.log('[debug]',msg);
			// },
			// log:function(msg,obj){
				// console.log('[log]',msg);
			// },
			// error:function(msg,obj){
				// console.log('[error]',msg);
			// }
		// }
	// };
var server_options={};//poolSize:5
var db_options={w:1};
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT, server_options),db_options);