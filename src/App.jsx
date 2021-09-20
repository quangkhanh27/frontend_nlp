import "./App.css";
import React, { useState } from "react";

function App() {
  const [age, setAge] = useState();
  const handClick = () => {
    alert("Chiều cao của bạn là: " + age + " cm")
  }
  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className="App">
      <p>App tính chiều cao:</p>
      Nhập chiều cao của bạn:
      <input type="text" id="lname" name="lname" value={age} onChange={handleChange}></input>
      <button type="button" onClick={handClick}>OK</button>
    </div>
  );
}

export default App;
