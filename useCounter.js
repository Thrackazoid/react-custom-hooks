import {useState} from "react"

function useCounter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
        // You can return as an object but you mush use the same variable names wherever you import it
    return [count, increment]
}

export default useCounter