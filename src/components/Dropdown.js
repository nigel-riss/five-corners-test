
const Dropdown = (props) => {
  const {
    id,
    label,
    onChange,
    packageTypes,
    value,
  } = props;

  console.log(value);

  return (
    <div className={`dropdown input ${value !== `` ? `input--filled` : ``}`}>
      <select
        className="input__field"
        name={id}
        id={id}
        onChange={onChange}
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
