import { useState } from "react"

export const Count =() =>{
    const [count, setCount] = useState(0)
    const handleChange=() => {
        setCount(count +1)
    }
return (
<>
<div>{count}</div>
<button onClick={()=>handleChange()}>Count</button>
</>
)
}