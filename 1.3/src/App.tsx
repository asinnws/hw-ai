// src/App.tsx - (Fixed with Web Worker)
import { useState, useEffect } from 'react';
// Import the worker file with the `?worker` suffix
import HeavyTaskWorker from './heavyTask.worker.ts?worker';

export default function App() {
  const [data, setData] = useState<number | null>(null);

  useEffect(() => {
    // 1. Create a new worker instance
    const worker = new HeavyTaskWorker();

    // 2. Set up a listener to receive messages from the worker
    worker.onmessage = (event: MessageEvent<number>) => {
      console.log("Main Thread: Received data from worker.");
      setData(event.data);
    };

    // 3. Start the worker's task
    console.log("Main Thread: Sending message to worker.");
    worker.postMessage('start');

    // 4. Return a cleanup function to terminate the worker when the component unmounts
    return () => {
      console.log("Main Thread: Terminating worker.");
      worker.terminate();
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Result: {data === null ? 'Calculating in background...' : data}</p>
      <button onClick={() => alert("UI is responsive!")}>Test UI Responsiveness</button>
    </div>
  );
}