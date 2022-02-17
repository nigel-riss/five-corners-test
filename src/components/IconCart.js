import cartIcon from '../img/icons/cart.svg';
import '../styles/cart-icon.css'


const IconCart = (props) => {
  const {
    itemsCount,
  } = props;

  return (
    <div className="cart-icon">
      <img
        src={cartIcon}
        alt="cart icon"
      />
      <div className="cart-icon__count">
        {itemsCount}
      </div>
    </div>
  );
};


export { IconCart };
