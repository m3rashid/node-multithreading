const path = require('path')
const { Worker } = require('worker_threads');

const sharedBuffer = new SharedArrayBuffer(4)
const buffer = new Uint8Array(sharedBuffer)
buffer.fill(5)

console.log('buffer', buffer)

const worker = new Worker(path.join(__dirname, './work.js'), { workerData: { sharedBuffer } })
worker.on('message', () => {
	console.log('data', buffer)
})
