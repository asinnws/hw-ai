// src/heavyTask.worker.ts

// This code runs in the background thread

self.onmessage = () => {
  console.log("Worker: Starting heavy calculation...");
  let total = 0;
  // The same heavy loop, but now it's off the main thread
  for (let i = 0; i < 1e9; i++) {
    total += i;
  }
  console.log("Worker: Calculation finished.");

  // Post the result back to the main thread
  self.postMessage(total);
};