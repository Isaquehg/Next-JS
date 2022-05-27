import { useState } from 'react';

function Home(){
    return(
        <div>
            <h1>Hello Next JS</h1>
            <h2>Counter</h2>
            < Counter />
        </div>
    )
}

function Counter(){
    const [counter, setCounter] = useState(1);

    function addCounter(){
        setCounter(counter + 1);
    }

    return(
        <div>
            <div>{ counter }</div>
            <button onClick={ addCounter }>Click Me!</button>
        </div>
    )
}

export default Home