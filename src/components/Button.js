import '../styles/button.css';


const Button = (props) => {
  const {
    onClick,
    title,
  } = props;

  return (
    <button
      className="button"
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {title}
    </button>
  );
};


export { Button };
