const sharedBuffer = new SharedArrayBuffer(10 * 4);
const buffer = new Uint32Array(sharedBuffer);
buffer.fill(40);

module.exports = {
	sharedBuffer,
	buffer
}
