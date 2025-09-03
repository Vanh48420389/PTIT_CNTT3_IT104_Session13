import React from 'react'
import { useState } from 'react'
export default function Exercise06() {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div>
      <h3>Ứng dụng React với Modal và Focus Input</h3>
      <button style={{color: 'white', backgroundColor: 'green', margin: '20px', }} onClick={() => setShow(true)}>Hien thi</button>
      {show ? (
        <div className="modal">
          <div className="modal-body">
            <h3>Đăng nhập</h3>
            <input type="text" placeholder='Nhap ten nguoi dung' />
            <button style={{color: 'white', backgroundColor: 'red', margin: '20px', }} onClick={() => setShow(false)}>Close</button>
          </div>
        </div>
      ) : (
        ''
      )}

    </div>
  )
}
