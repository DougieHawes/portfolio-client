// dependency imports
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// style imports
import "./style.min.css";

// util component imports
import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

const AddWork = () => {
  const [state, setState] = useState({
    title: "",
    image: "",
    text: "",
  });

  const { title, image, text } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, error: "", [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Link to="/dashboard">dashboard</Link>
      <Input1
        value={title}
        placeholder="enter title"
        onChange={handleChange("title")}
      />
      <Input1 value={image} type="file" onChange={handleChange("image")} />
      <Input2
        value={text}
        placeholder="enter text"
        onChange={handleChange("text")}
      />
      <Button1 text="enter" />
    </form>
  );
};

export default AddWork;
