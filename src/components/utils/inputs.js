// style imports
import "./style.min.css";

export const Input1 = ({ value, placeholder, type = "text", onChange }) => (
  <input
    className="input input1"
    value={value}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
  />
);

export const Input2 = ({ value, placeholder, type = "text", onChange }) => (
  <textarea
    className="input input2"
    value={value}
    placeholder={placeholder}
    type={type}
    onChange={onChange}
  />
);
