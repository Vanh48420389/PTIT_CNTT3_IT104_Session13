import React, { useState, useCallback } from "react";

export default function Exercise04() {
  const [color, setColor] = useState("#000000");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>

      <div>
        <label>Màu người dùng chọn:</label>
        <br />
        <input
          type="color"
          value={color}
          onChange={handleChangeColor}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Màu hiển thị:</label>
        <div
          style={{
            width: "100px",
            height: "50px",
            border: "1px solid #ccc",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
