import '../styles/menu-icon.css';


const IconMenu = (props) => {
  const {
    isOpen,
    onClick,
  } = props;

  return (
    <div
      className={`menu-icon ${isOpen ? `menu-icon--open` : ``}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="1" x2="28" y2="1" stroke="black" strokeWidth="2"/>
        <line y1="11" x2="28" y2="11" stroke="black" strokeWidth="2"/>
        <line y1="21" x2="28" y2="21" stroke="black" strokeWidth="2"/>
      </svg>
    </div>
  );
};


export { IconMenu };
