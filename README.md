### Multi Threading in NodeJs

Multi-threading is a concept of executing multiple threads of a single process at the same time. In a single threaded application, there is only one thread which executes all the tasks. Whereas, in a multi-threaded application, multiple threads are spawned to execute multiple tasks concurrently. Each thread has its own set of registers and stack. A thread shares its code section, data section, and other operating system resources, such as open files and signals, with other threads. This is the reason why multi-threaded programs are fast.

Since JavaScript and/or NodeJs is a single threaded language, it can handle only one task at a time. But, there are some ways by which we can achieve multi-threading in NodeJs.

Yes, we can fork a process in NodeJs. But, it is not recommended to fork a process for every task. It is a very expensive operation. It takes a lot of time to fork a process.

Threads on the other hand are efficient. They are lightweight and can be created and destroyed easily. Inter process communication is also very expensive. It is not recommended to use IPC for every task.

#### Why do we need Multi Threading?

- Faster execution of tasks
- Better performance
- Better resource utilization
- Better user experience
- Just to brag, your application is multi-threaded :)

#### Approach - v1

- Use `worker_threads` from NodeJs standard library (after `NodeJs 12.x`) and create worker threads.
- Then pass the data around using `postMessage`
- Listen to the `message` event on the worker thread to get the data back from the worker thread.
- Use `parentPort` to send data back to the main thread.

This is the simplest way to achieve multi-threading in NodeJs. But, this has some downsides.

- We have to pass the data around using `postMessage` and `parentPort`.
- This is not very efficient as we are passing copies of the data around.
- Did'nt share memory between threads.

#### Approach - v2

- Approach is same as before, but we use shared memory, to just mutate the memory in place without passing copies of the data around.
- This is achieved using `SharedArrayBuffer` from NodeJs standard library.
- We can also use `Atomics` from NodeJs standard library to perform atomic operations on shared memory.
- This saves us from passing copies of the data around two times (one sending the data and second on receiving with `postMessage`), and is more efficient.
