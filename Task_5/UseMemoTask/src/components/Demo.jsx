import React, { useMemo, useState } from 'react'
import { initialItems } from './util';

const Demo = () => {
    const [count, setCount] = useState(0);
    const[items] = useState(initialItems);
    const selectedItem = useMemo(()=> items.find((item) => item.isSelected,[items] )
)

  return (
    <div className="demo">
        <h1>Count : {count}</h1>
        <h1>Selected item : {selectedItem.id}</h1>
        <button onClick={()=> setCount(count+1)}>
            Increment
        </button>
    </div>
  )
}

export default Demo