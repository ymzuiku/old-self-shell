#!/usr/bin/env node
let fs = require('fs')
require('shelljs/global')
let argv = require('yargs').argv
let pwd = process.cwd()
let str = process.argv[2]

if(argv.s === 'all')  {
	mkdir(`${__dirname}/../backup`)
}

require('./backup/adobe.js')
require('./backup/affinity.js')
require('./backup/blender.js')
require('./backup/km.js')
require('./backup/shell.js')
require('./backup/sketch.js')
require('./backup/vscode.js')