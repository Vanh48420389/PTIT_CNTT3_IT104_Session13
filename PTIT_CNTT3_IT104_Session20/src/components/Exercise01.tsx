import React, { useState } from 'react'

export default function Exercise01() {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const isLong = value.length > 5

  return (
    <div>
      <h2>Kiem tra do dai chuoi nhap vao</h2>
      <input type="text" name="value" onChange={handleChange} value={value} />
      {isLong && (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          Chuỗi nhập vào dài hơn 5 kí tự
        </div>
      )}
    </div>
  )
}
