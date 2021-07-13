// dependency imports
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// style imports
import "./style.min.css";

// util component imports
import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

const AddBlog = () => {
  const [state, setState] = useState({
    title: "",
    site: "",
    code: "",
    image: "",
    description: "",
    category: "",
  });

  const { title, site, code, image, description, category } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, error: "", [name]: e.target.value });
  };

  return (
    <form className="form">
      <Link to="/dashboard">dashboard</Link>
      <Input1
        value={title}
        placeholder="enter title"
        onChange={handleChange("title")}
      />
      <Input1 value={image} type="file" onChange={handleChange("image")} />
      <Input1
        value={site}
        placeholder="enter site"
        onChange={handleChange("site")}
      />
      <Input1
        value={code}
        placeholder="enter code"
        onChange={handleChange("code")}
      />
      <Input2
        value={description}
        placeholder="enter description"
        onChange={handleChange("description")}
      />
      <Button1 text="enter" />
    </form>
  );
};

export default AddBlog;
