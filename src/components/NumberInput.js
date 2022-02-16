import '../styles/number.css';


const NumberInput = (props) => {
  const {
    onInc,
    onDec,
    value,
  } = props;

  return (
    <div className="number">
      <button
        className="number__button"
      >
      -
      </button>
      <div className="number__value">
        {value}
      </div>
      <button
        className="number__button"
      >
      +
      </button>
    </div>
  );
};


export { NumberInput };
