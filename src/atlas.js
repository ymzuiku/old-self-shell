#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv

if (str[2] === 'k' && !str[3]) {
	exec('pkill node')
} else if (str[2] === 'code' && !str[3]) {
	exec(`code ${__dirname}/..`)
} else if (str[2] === 'cd' && !str[3]) {
	console.log(__dirname)
	exec(`cd ${__dirname}`)
} else if (str[2] === 'ls' && !str[3]) {
	exec(`ls ${__dirname}`)
} else if (str[2] === 'git' && str[3]==='push') {
	exec(`git add .`)
	exec(`git add cm 'shell atlas quick push'`)
	exec(`git pusha`)
}

if(str[2] === 'self' && str[3] === 'push') {
	console.log('正在push <self-shell> 到github')
	if(!str[4]) {
		cd(__dirname)
		exec('git add .')
		exec('git cmm')
		exec('git pusha')
	} else {
		cd(__dirname)
		exec('git add .')
		exec(`git cm ${str[4]}`)
		exec('git pusha')
	}
}

if(str[2] === 'self' && str[3] === 'push') {
	console.log('正在push到github')
	if(!str[4]) {
		cd(pwd)
		exec('git add .')
		exec('git cmm')
		exec('git pusha')
	} else {
		cd(pwd)
		exec('git add .')
		exec(`git cm ${str[4]}`)
		exec('git pusha')
	}
}