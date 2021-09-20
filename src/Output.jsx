import React, {useState} from "react";

const Output = (props) => {
  const { input_txt, output_txt, phanLop } = props;
  const label = {
    "0":"👍🏻 Tốt",
    "1":"👉🏻👈🏻 Trung bình",
    "2":"👎🏻 Tệ",
    "":""
  }
  return (
    <div>
      <p>
        <br />
        <b>Kết quả là:</b>
      </p>
      <div>
      <p className="btn btn-primary" style={{opacity: phanLop.length===0?0:1}}>{label[phanLop]}</p>
      </div>
      <p className="btn btn-success" style={{opacity: output_txt.length===0?0:1}}>{output_txt}</p>
    </div>
  );
};

export default Output;
