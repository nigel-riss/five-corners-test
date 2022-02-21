import '../styles/input.css';


const Input = (props) => {
  const {
    id,
    isValid,
    label,
    value,
    onBlur,
    onChange,
  } = props;

  const className = `
    input
    ${value !== `` ? `input--filled` : ``} 
    ${isValid ? `` : `input--invalid`} 
  `;

  return (
    <div className={className}>
      <input
        className="input__field"
        id={id}
        name={id}
        type="text"
        value={value}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target)}
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
