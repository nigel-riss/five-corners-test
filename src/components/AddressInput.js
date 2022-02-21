import { Input } from './Input.js';


const AddressInput = (props) => {
  const {
    id,
    isValid,
    label,
    value,
    onBlur,
    onChange,
  } = props;

  return (
    <Input
      id={id}
      isValid={isValid}
      label={label}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
};


export { AddressInput };
