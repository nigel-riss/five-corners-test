
const Dropdown = (props) => {
  const {
    id,
    isValid,
    label,
    onChange,
    // packageTypes,
    value,
  } = props;

  const className = `
    input
    ${value !== `` ? `input--filled` : ``} 
    ${isValid ? `` : `input--invalid`} 
  `;

  return (
    <div className={className}>
      <select
        className="input__field"
        name={id}
        id={id}
        onChange={(event) => onChange(event.target)}
        value={value}
      >
        <option value=""></option>
        <option value="unpacked">без упаковки</option>
        <option value="standard">стандартная</option>
        <option value="gift">подарочная</option>
      </select>

      <label
        className="input__label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}


export { Dropdown };
