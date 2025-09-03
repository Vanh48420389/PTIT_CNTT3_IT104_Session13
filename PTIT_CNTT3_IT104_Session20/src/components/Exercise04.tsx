import React, { use } from 'react'
import { useState, useEffect } from 'react'

export default function Exercise04() {
    const [title,setTitle]= useState('')


    useEffect(() => {
        document.title=title 
    }, [title])
  return (
    <div>
      <h2>Chào mừng đến với chúng tôi</h2>
      <input type="text" placeholder="Nhập vào title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập tên vào trường trên</p>
    </div>
  )
}
