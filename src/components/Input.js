import { useState } from 'react';
import '../styles/input.css';


const Input = (props) => {
  const {
    id,
    isValid,
    label,
    value,
    onBlur,
    onChange,
    validate,
  } = props;

  const [isTouched, setIsTouched] = useState(false);

  const className = `
    input
    ${value !== `` ? `input--filled` : ``}
    ${!isValid && isTouched ? `input--invalid` : ``}
  `;

  return (
    <div className={className}>
      <input
        className="input__field"
        id={id}
        name={id}
        type="text"
        value={value}
        onBlur={(event) => {
          if (onBlur) onBlur(event);
          if (validate) validate();
          setIsTouched(true);
        }}
        onChange={(event) => {
          onChange(event.target);
        }}
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
