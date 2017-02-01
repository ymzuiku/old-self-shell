#!/usr/bin/env node

require('shelljs/global')
var fs = require('fs')
//获取输入的字符串
var str = process.argv[2]
var cliPackage = require('./package.json')
var kuaPackage = require('./app/package.json')
var pwd = process.cwd()

var nodePath = `${__dirname}/app/node_modules`
function removeAppNodeModules(){
	exec(`rm -r ${nodePath}`)
}
function lsAppFile(){
	exec(`ls ${__dirname}/app`)
}

// exec('cd app') 无效
//不要直接用cd命令, 这样后面容易删错位置
//使用这个方法, 使用完cd之后,cd回项目目录
function tempCd(event) {
	event()
	cd(pwd)
	console.log(`------------tempCd end-----------`)
	ls('-A')
}

//#查看版本
if(str === '-version' || str ==='-v') {
	console.log(`react-kua-cli version: ${cliPackage.version}`)
	console.log(`react-kua version: ${kuaPackage.version}`)
}
//查看目录
if(str === 'ls') {
	lsAppFile()
}

if(str === 'dir') {
	console.log(__dirname)
}

if(str === '-install') {
	removeAppNodeModules()
	console.log(`install kua's node_modules, please wait...`)
	tempCd(function(){
		cd(`${__dirname}/app`)
		exec(`npm install`)
	})
	console.log(`----- Done! -----`)
	console.log(`kua is installed, you can run:`)
	console.log(`$ mkdir Project & cd Project`)	
	console.log(`$ kua init`)
}

if(str === 'init') {
	fs.exists(nodePath, function(ishavNode) {
		if(!ishavNode) {
			console.log('react-kua uninstall, please run:')
			console.log('kua -install')
		} else {
			fs.exists(`${pwd}/package.json`, function(ishave) {
				if (ishave) {
					console.log(`Error: the Project not empty`)
				} else {
					console.log(`copying node_modules...`)	
					cp(`-r`, `${__dirname}/app/*`, pwd)
					cp(`-r`, `${__dirname}/app/.*`, pwd)
					console.log(`----- Done! -----`)
					console.log(`now version is: ${kuaPackage.version}. if you need new react-kua, run:`)		
					console.log(`$ kua -install`)
					console.log(`if you need start WebDevServer, you can run:`)
					console.log(`$ kua web`)
				}
			})
		}
	})
}

//update没有做完, 以后再做
if(str === '-update') {
	console.log(`delete... ${__dirname}/app/node_modules/react-kua`)
	exec(`rm -r ${__dirname}/app/node_modules/react-kua`)
	console.log(`install new react-kua`)
	tempCd(function(){
		cd(`${__dirname}/app`)
		exec(`npm i --save react-kua`)
	})
	console.log(`----- Done! -----`)
	console.log(`kua is installed, you can run:`)
	console.log(`$ mkdir Project & cd Project`)	
	console.log(`$ kua init`)
}
if (str === 'web') {
	exec('webpack --watch & npm run web')
	console.log(`you can change the package.json`)
	console.log(`is running ${kuaPackage.scripts.web} .`)
}
