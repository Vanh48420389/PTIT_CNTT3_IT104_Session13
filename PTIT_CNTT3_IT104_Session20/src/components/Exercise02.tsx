import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name || !email) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
  };
  return (
    <div>
      <h2>Nhập thông tin cá nhân</h2>
      <form>
        <input
          type="text"
          placeholder="nhập tên"
          style={{ padding: "8px", marginBottom: "4px", width: "100%" }}
          onChange={handleChange}
          name="name"
          value={name}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="nhập email"
          style={{ padding: "8px", marginBottom: "4px", width: "100%" }}
          onChange={handleChange}
          name="email"
          value={email}
        />{" "}
        <br />
        <button
          type="submit"
          style={{ backgroundColor: "#4caf50" }}
          onClick={handleClick}
        >
          gửi
        </button>
      </form>
      {submit && (
        <div
          style={{
            backgroundColor: "#e7f8e7",
            padding: "8px",
            marginTop: "8px",
            width: "100%",
          }}
        >
          <p>Tên : {name}</p>
          <p>Email : {email}</p>
        </div>
      )}
    </div>
  );
}