// dependency imports
import { useState } from "react";
import axios from "axios";

// style imports
import "./style.min.css";

// util component imports
import { Button1 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

const Signin = () => {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const { name, password } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, error: "", [name]: e.target.value });
  };

  return (
    <form className="form">
      <Input1
        value={name}
        placeholder="enter name"
        onChange={handleChange("name")}
      />
      <Input1
        value={password}
        placeholder="enter password"
        type="password"
        onChange={handleChange("password")}
      />
      <Button1 text="enter" />
    </form>
  );
};

export default Signin;
