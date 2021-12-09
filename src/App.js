import {useState} from "react";
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState("enter value")

    return (
        <div className="App">
            <Counter/>
            <h2>{value}</h2>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
}

export default App;
