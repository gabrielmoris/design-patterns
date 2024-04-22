import React, { useState } from "react";

// Define the state
const initialState = {
  count: 0,
  isLoading: false,
  error: null,
};

// Define the state actions
const actions = {
  increment: (state) => ({ ...state, count: state.count + 1 }),
  decrement: (state) => ({ ...state, count: state.count - 1 }),
  startLoading: (state) => ({ ...state, isLoading: true }),
  stopLoading: (state) => ({ ...state, isLoading: false }),
  setError: (state, error) => ({ ...state, error }),
};

// Define the component
function Counter() {
  const [state, setState] = useState(initialState);

  const handleIncrement = () => {
    setState(actions.increment);
  };

  const handleDecrement = () => {
    setState(actions.decrement);
  };

  const handleFetch = async () => {
    try {
      setState(actions.startLoading);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setState(actions.stopLoading);
    } catch (error) {
      setState(actions.setError(error));
    }
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleFetch}>
        {state.isLoading ? "Loading..." : "Fetch Data"}
      </button>
      {state.error && <p>Error: {state.error.message}</p>}
    </div>
  );
}

export default Counter;
