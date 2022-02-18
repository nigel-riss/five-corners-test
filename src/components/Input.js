import { useState } from "react";
import '../styles/input.css';


const Input = (props) => {
  const {
    id,
    label,
    value,
    onChange,
  } = props;

  return (
    <div className={`input ${value !== `` ? `input--filled` : ``}`}>
      <input
        className="input__field"
        id={id}
        name=""
        type="text"
        value={value}
        onChange={onChange}
      />

      <label
        className="input__label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};


export { Input };
