#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv


if (str[2] ==='v'  && !str[3]) {
	console.log(`
	k : pkill node
	code : 使用code打开self-shell项目
	ar : 覆盖模式的a命令
	cd : 显示slef-shell的路径
	ls : 显示shelf-shell的文件
	self push : push self-shell到github
	s s <name/all> : save某个项目的配置到库中(all标示所有)
	s r <name/all> : restore某个项目的配置到库中(all标示所有)
	s o <name/all> : open某个项目的配置到库中(all标示所有)
	`)
}

if (str[2] === 'k' && !str[3]) {
	exec('pkill node')
} else if (str[2] === 'code' && !str[3]) {
	exec(`code ${__dirname}/..`)
} else if (str[2] === 'cd' && !str[3]) {
	console.log(__dirname)
} else if (str[2] === 'ls' && !str[3]) {
	exec(`ls ${__dirname}/..`)
}
