import "./App.css";
import React, { useState } from "react";

function App() {
  const [age, setAge] = useState();
  const [hinh, setHinh] = useState("");
  const [mess, setMess] = useState("");
  const handClick = (e) => {
    setHinh("https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.18169-9/21150278_1761946690771532_840871712300140804_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=SZqMZr8tum4AX-bWSR-&_nc_ht=scontent.fsgn8-1.fna&oh=84a0ed2a0c266f0d773635b340fe71bc&oe=616EE95E")
    setMess("BỊ LỪA RỒI GIẬN GHÊ")
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
      <br/><br/><br/>
      <img src={hinh} alt="" />
      <br/>
      <p style={{color:"red", fontSize:"30px"}}>{mess}</p>
    </div>
  );
}

export default App;
