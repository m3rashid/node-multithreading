const path = require('path')
const { Worker } = require('worker_threads');
const { buffer } = require("./buffer")

console.log('initialData:', buffer)

const worker = new Worker(path.join(__dirname, './work.js'), {})
worker.on('message', () => {
	console.log('FinalData: ', buffer)
})
worker.on('error', console.error)
