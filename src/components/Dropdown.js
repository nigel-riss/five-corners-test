
const Dropdown = (props) => {
  const {
    id,
    label,
    packageTypes,
    value,
  } = props;

  console.log(value);

  return (
    <div className="dropdown input">
      <select
        className="input__field"
        name=""
        id={id}
        value={value}
      >
        <option value="not_packed">без упаковки</option>
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
