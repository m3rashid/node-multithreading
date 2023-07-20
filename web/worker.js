onmessage = (msg) => {
	console.log(msg.data)

	if (msg.data === 'sum') {
		let sum = 0;
		for (let i = 0; i < 1e9; i++) sum += i;
		postMessage(sum);
	}
};
