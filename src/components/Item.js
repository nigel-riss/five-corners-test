import { NumberInput } from './NumberInput.js';
import '../styles/item.css';


const Item = (props) => {
  const {
    item,
    onRemove,
  } = props;

  const {
    id,
    amount,
    img,
    name,
    price,
    type,
  } = item;

  return (
    <article className="item">
      <div className="item__image">
        <img
          src={img}
          alt={type}
        />
      </div>
      <div className="item__content">
        <header className="item__header">
          <h3 className="item__title">{name}</h3>
          <p className="item__price">{price} руб.</p>
        </header>

        <div className="item__description">{type}</div>

        <footer className="item__footer">
          <NumberInput
            onInc={() => {}}
            onDec={() => {}}
            value={amount}
          />
          <button
            className="item__remove"
            onClick={() => {}}
          >Удалить
          </button>
        </footer>
      </div>
    </article>
  );
};


export { Item };
