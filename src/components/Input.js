import '../styles/input.css';


const Input = (props) => {
  const {
    id,
    label,
    value,
    onBlur,
    onChange,
  } = props;

  return (
    <div className={`input ${value !== `` ? `input--filled` : ``}`}>
      <input
        className="input__field"
        id={id}
        name={id}
        type="text"
        value={value}
        onBlur={onBlur}
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
