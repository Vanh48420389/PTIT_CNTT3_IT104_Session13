import React from 'react'
import { useEffect } from 'react'

export default function Exercise03() {
    useEffect(() => {
        console.log('Render lần đầu')
    }, [])
  return (
    <div>
      <h1>Chào mừng đến với chúng tôi</h1>

    </div>
  )
}
