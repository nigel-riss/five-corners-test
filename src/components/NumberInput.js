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
        <div className="number__icon">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="8" x2="16" y2="8" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
      </button>
      <div className="number__value">
        {value}
      </div>
      <button
        className="number__button"
      >
        <div className="number__icon">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="8" x2="16" y2="8" stroke="black" strokeWidth="2"/>
            <line x1="8" y1="16" x2="8" stroke="black" strokeWidth="2"/>
          </svg>
        </div>
      </button>
    </div>
  );
};


export { NumberInput };
