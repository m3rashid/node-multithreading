const path = require('path');
const { Worker } = require('worker_threads');

const doFib = async (iter) =>
	new Promise((resolve, reject) => {
		const start = Date.now();
		const worker = new Worker(path.join(__dirname, './fib.js'), {
			workerData: { iter },
		});
		worker.on('message', (data) => {
			console.log(data, 'time:', Date.now() - start);
			resolve(data);
		});
		worker.once('error', reject);
	});

const main = async () => {
	const start = Date.now();
	const values = await Promise.all([
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
		doFib(40),
	]);
	console.log('results:', values);
	console.log(`Time taken: ${Date.now() - start}ms`);
};

main().catch(console.error);
