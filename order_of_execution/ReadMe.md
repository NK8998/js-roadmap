# 🌀 JavaScript Event Loop Demo

This simple Node.js script demonstrates **how JavaScript executes code asynchronously** — even though it’s **single-threaded**.

It shows the order in which different types of tasks are executed:

* **Synchronous code (Call Stack)**
* **Microtasks (Promises, `await`)**
* **Macrotasks (Callback Queue — e.g. `setTimeout`)**

---

## 🧠 What’s the Event Loop?

JavaScript runs on a **single thread** — it can only do one thing at a time.
But thanks to the **event loop**, it can schedule and manage asynchronous tasks without blocking execution.

Think of it as a manager that decides what runs next:

1. Run all **synchronous** code (top-level).
2. Run all **microtasks** queued (like resolved Promises).
3. Then move on to **macrotasks** (like `setTimeout`, I/O, etc.).
4. Repeat forever.

---

## ⚙️ How It Works in This Demo

### 🔹 Code Flow

```bash
Call Stack → Microtask Queue → Callback Queue
```

### 🔹 Example Snippet

```js
// Synchronous
console.log("1️⃣ Start");

// Macrotask
setTimeout(() => console.log("5️⃣ setTimeout callback"), 0);

// Microtasks
Promise.resolve()
  .then(() => console.log("3️⃣ Promise.then"))
  .then(() => console.log("4️⃣ Promise.then chained"));

// Top-level await (now supported in Node.js)
await new Promise((resolve) => {
  console.log("2️⃣ Awaited promise created");
  resolve();
});

console.log("6️⃣ After await");

let name;
setTimeout(() => console.log(`7️⃣ Name inside callback: ${name}`), 0);
name = "Mike";
console.log("8️⃣ Name set to:", name);
```

### 🔹 Expected Output

```text
1️⃣ Start
2️⃣ Awaited promise created
8️⃣ Name set to: Mike
3️⃣ Promise.then
4️⃣ Promise.then chained
6️⃣ After await
5️⃣ setTimeout callback
7️⃣ Name inside callback: Mike
```

---

## 🧩 Explanation of Each Step

| Step    | Type                    | Description                                                                                            |
| ------- | ----------------------- | ------------------------------------------------------------------------------------------------------ |
| 1️⃣     | Synchronous             | Runs immediately on the call stack.                                                                    |
| 2️⃣     | Synchronous             | Still in the call stack — creating a Promise doesn’t make it async yet.                                |
| 3️⃣–4️⃣ | Microtasks              | Promise callbacks go into the microtask queue, executed after sync code.                               |
| 5️⃣–7️⃣ | Macrotasks              | `setTimeout` callbacks are placed in the callback queue and executed after all microtasks are cleared. |
| 6️⃣     | Microtask (after await) | Resumes execution once the awaited Promise resolves.                                                   |
| 8️⃣     | Synchronous             | Variable assigned before callbacks fire, showing timing differences.                                   |

---

## 🧩 Key Takeaways

* 🧵 **JavaScript is single-threaded**, but async behavior is simulated using the event loop.
* 🧠 **Microtasks (Promises, `await`)** always run **before** macrotasks like `setTimeout`.
* ⏰ **Top-level await** is now supported in Node.js (v14.8+ with ESM or v16+ by default).
* ⚡ Understanding this order helps you **debug async code** and **avoid race conditions**.

---

## 🚀 Run It Yourself

1. Save the file as `event-loop-demo.mjs` (so Node treats it as an ES module).
2. Run it using:

   ```bash
   node event-loop-demo.mjs
   ```
3. Observe the execution order in your terminal.

---

## 💬 Analogy

> “If JavaScript were a restaurant:
> 🍳 **Synchronous code** is the chef cooking your meal.
> 🎟️ **Microtasks** are VIP customers — they get served right after the chef finishes.
> 🧍 **Macrotasks** are regular customers waiting in line — they get served next.”

---
