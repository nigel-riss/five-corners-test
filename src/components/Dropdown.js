
const Dropdown = (props) => {
  const {
    id,
    label,
    packageTypes,
  } = props;

  return (
    <div className="dropdown input">
      <select
        className="input__field"
        name=""
        id={id}
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
