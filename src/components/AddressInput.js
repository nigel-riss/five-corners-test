import { Input } from './Input.js';


const AddressInput = (props) => {
  const {
    id,
    label,
    value,
    onBlur,
    onChange,
  } = props;

  return (
    <Input
      id={id}
      label={label}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
};


export { AddressInput };
