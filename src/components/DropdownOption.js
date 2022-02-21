
const DropdownOption = (props) => {
  const {
    children,
    onClick,
    value,
  } = props;

  return (
    <li className="dropdown__item"
      onClick={() => onClick(value)}
    >
      {children}
    </li>
  );
};


export { DropdownOption };
