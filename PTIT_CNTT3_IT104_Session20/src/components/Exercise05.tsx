import React from 'react'
import { useState, useEffect } from 'react';

export default function Exercise05() {
    const [count, setCount] = useState<number>(0);

    useEffect(() =>{
        let id = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(id)
    } )

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}
