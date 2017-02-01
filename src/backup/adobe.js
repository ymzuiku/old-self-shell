#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

let dir = `${__dirname}/../../backup`
let project = 'adobe'
let projectDir = `${dir}/${project}`

let temp = '~/Library/Preferences/Adobe Photoshop CC 2017 Settings'

const open = ()=>{
	let target = '~/Library/Preferences'
	cd(`${target}`)
	exec('open .')
}
const save = ()=>{
	rm('-r', `${projectDir}/*`)
	rm('-r', `${projectDir}/.*`)
	let life = `~/Library/Preferences/Adobe Photoshop CC 2017 Settings`
	cd(life)
	rm('-r', 'Materials.psp')
	rm('-r', 'PluginCache.psp')
	exec(`zip -r ${projectDir}/photoshop.zip ./`)
	let life2 = `~/Library/Preferences/Adobe Illustrator 21 Settings`
	cd(life2)
	rm('-r', 'AIMenuFaceCache')
	rm('-r', 'AdobeFnt_OSFonts.lst')
	rm('-r', 'DF_sim_fea_sys.cch')
	exec(`zip -r ${projectDir}/illustrator.zip ./`)
}
const restore = ()=>{
	let life0 = `~/Library/Preferences`
	cd(life0)
	mkdir('Adobe\ Photoshop\ CC\ 2017\ Settings')
	mkdir('Adobe\ Illustrator\ 21\ Settings')

	let life = `~/Library/Preferences/Adobe Photoshop CC 2017 Settings`
	cd(life)
	rm('-r', `${life}/*`)
	rm('-r', `${life}/.*`)
	exec(`unzip -o -d ./ ${projectDir}/photoshop.zip`)

	let life2 = `~/Library/Preferences/Adobe Illustrator 21 Settings`
	cd(life2)
	rm('-r', `${life}/*`)
	rm('-r', `${life}/.*`)	
	exec(`unzip -o -d ./ ${projectDir}/illustrator.zip`)
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