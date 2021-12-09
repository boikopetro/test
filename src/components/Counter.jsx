import {useState} from "react";

const Counter = () => {
    let [counter, setCounter] = useState(0)
    const increment = () => setCounter(counter += 1)
    const decrement = () => setCounter(counter -= 1)
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;