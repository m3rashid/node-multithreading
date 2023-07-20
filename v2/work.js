const path = require('path');
const { buffer } = require('./buffer');
const { parentPort, Worker } = require('worker_threads');

for (let i = 0; i < buffer.length; i++) {
	const worker = new Worker(path.join(__dirname, './fib.js'), {
		workerData: { iter: buffer[i] },
	});
	worker.on('message', (result) => {
		buffer[i] = result;
		console.log('result', result);

		if (i === buffer.length - 1) {
			console.log('Buffer:', buffer);
			parentPort.postMessage('done');
		}
	});
}
