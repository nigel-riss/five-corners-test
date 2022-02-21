import { useCallback, useState } from 'react';
// import 
import '../styles/dropdown.css';
import { DropdownOption } from './DropdownOption';


const Dropdown = (props) => {
  const {
    id,
    isValid,
    label,
    onChange,
    packageTypes,
    value,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const renderOptions = useCallback((options) => {
    return Object.keys(options).map(key => (
      <DropdownOption
        key={key}
        value={key}
        onClick={(val) => {
          onChange({value: options[val], name: id});
          setIsOpen(false);
        }}
      >
        {options[key]}
      </DropdownOption>
    ));
  }, [id, onChange]);

  const className = `
    dropdown
    ${isOpen ? `dropdown--open` : ``}
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
        onClick={() => {
          setIsOpen(prevState => !prevState)
        }}
        readOnly
        type="text"
        value={value}
      />
      {isOpen && <ul className="dropdown__options">
        {renderOptions(packageTypes)}
      </ul>}

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
