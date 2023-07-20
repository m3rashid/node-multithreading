const worker = new Worker('./worker.js');
const bgBtn = document.querySelector('#bgBtn');
const sumBtn = document.querySelector('#sumBtn');

bgBtn.addEventListener('click', () => {
	if (document.body.style.background !== 'green')
		document.body.style.background = 'green';
	else document.body.style.background = 'red';
});

worker.onmessage = (msg) => {
	alert(`The result is: ${msg.data}`);
}

sumBtn.addEventListener('click', () => {
	worker.postMessage('sum');
})
