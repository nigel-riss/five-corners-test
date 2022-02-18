const TotalPrice = (props) => {
  const {
    value,
  } = props;

  return (
    <div className="cart__total">
      <p className="cart__total-text">Итог:</p>
      <p className="cart__total-price">
        {value} руб.
      </p>
    </div>
  );
};


export { TotalPrice };
