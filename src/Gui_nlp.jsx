import React from "react";
import { Form } from "react-bootstrap";

const Gui_nlp = (props) => {
  const { input_txt, setInput_txt, dienDauCau, handleClickPhanLop, setOutput_txt, setPhanLop } = props;

  const handleChange = (e) => {
    setInput_txt(e.target.value);
  };

  const handleClick = () => {
    handleClickPhanLop(input_txt)
    setOutput_txt("")
    setInput_txt("");
  };

  const handleClickDienDau = () => {
    dienDauCau(input_txt)
    setPhanLop('')
  }
  return (
    <div className="container">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <b>
              <br />
              Nhập dữ dữ liệu:
            </b>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={input_txt}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
      <p className="btn btn-primary" onClick={handleClick}>
        Dự đoán bình luận
      </p>
      <p className="btn btn-primary" style={{marginLeft: 100}} onClick={handleClickDienDau}>
        Điền dấu câu
      </p>
    </div>
  );
};
export default Gui_nlp;
