#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'affinity'
let projectDir = `${dir}/${project}`

const open = ()=>{
	let target = '~/Library/Containers/com.seriflabs.affinitydesigner.beta/Data/Library/Application Support/'
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	cd(dir)
	rm('-r', project)
	mkdir(project)
	
	let life = `~/Library/Containers/com.seriflabs.affinitydesigner.beta/Data/Library/Application Support`
	cd(life)
	rm('-r', 'AddressBook')
	rm('-r', 'autosave')
	rm('-r', 'backup')
	rm('-r', 'iCloud')
	rm('-r', 'profiles')
	rm('-r', 'shunt')
	rm('-r', 'SyncServices')
	rm('-r', 'temp')
	exec(`zip -r ${projectDir}/affinity.zip ./`)
}
const restore = ()=>{
	let life = `~/Library/Containers/com.seriflabs.affinitydesigner.beta/Data/Library/Application Support`
	rm('-r', `${life}/*`)
	cd(life)
	// exec(`mkdir Plugins`)
	exec(`unzip -o -d ./ ${projectDir}/affinity.zip`)
}

if(str[4]) {
	console.log('error')
} else if (str[2] === 'o' && (str[3] === project || str[3] === 'all')) {
	console.log(`open ${project}...`)
	open()
	console.log('------ Done ------')
} else if (str[2] === 's' && (str[3] === project || str[3] === 'all'))  {
	console.log(`save ${project}...`)
	save()
	console.log('------ Done ------')
} else if (str[2] === 'r' && (str[3] === project || str[3] === 'all'))  {
	console.log(`restore ${project}...`)
	restore()
	console.log('------ Done ------')
}