#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'vscode'
let projectDir = `${dir}/${project}`

const open = ()=>{
	let target = '~/Library/Application Support/Code'
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	rm('-r', `${backup}/*`)
	rm('-r', `${backup}/.*`)

	let life = '~/Library/Application Support/Code'
	cd(life)
	exec(`zip -r ${projectDir}/User.zip User`)
	let life2 = '~/.vscode'
	cd(life2)
	exec(`zip -r ${projectDir}/extensions.zip extensions`)
}
const restore = ()=>{
	let life = `~/Library/Application Support/Code`
	rm('-r', `${life}/User`)
	cd(life)
	exec(`unzip -o -d ./ ${projectDir}/User.zip`)

	let life2 = `~/.vscode`
	rm('-r', `${life2}/extensions`)
	cd(life2)
	exec(`unzip -o -d ./ ${projectDir}/extensions.zip`)
}

if (argv.o === project || argv.o === 'all') {
	console.log(`open ${project}...`)
	open()
	console.log('------ Done ------')
} else if (argv.s === project || argv.s === 'all') {
	console.log(`save ${project}...`)
	save()
	console.log('------ Done ------')
} else if (argv.r === project || argv.s === 'all') {
	console.log(`restore ${project}...`)
	restore()
	console.log('------ Done ------')
}