const { workerData, parentPort } = require("worker_threads")

const fibonacci = (n) => n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
const result = fibonacci(workerData.iter)
parentPort.postMessage(result)
