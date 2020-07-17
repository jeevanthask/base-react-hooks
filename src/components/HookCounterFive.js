import React, {useState, useEffect} from 'react'

function HookCounterFive() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `you clicked ${count} times`
    },[count])


    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterFive
