import { Button } from './Button.js';
import { Form } from './Form.js';
import { Items } from './Items.js';
import { Map } from './Map.js';
import { TotalPrice } from './TotalPrice.js';
import { getTotalItemsPrice } from '../utils/common.js';
import '../styles/cart.css';
import '../styles/link.css';
import '../styles/title.css';


const Cart = (props) => {
  const {
    contacts,
    coords,
    isMobile,
    items,
    onContactsUpdate,
    onCoordsChange,
    onItemCountInc,
    onItemCountDec,
    onItemRemove,
  } = props;

  return (
    <div className="wrapper">
      <section className="cart">
          <h1 className="title cart__title">Корзина</h1>
          <div className="cart__login">
            Есть аккаунт?
            <button className="link">Войти</button>
            {/* Почему <button>? Чтобы понимать какой элемент тут
                должен быть на самом деле, нужно понимать архитектуру
                целого приложения. Будет ли переход по другому URL
                или будет появляться попап.
            */}
          </div>

          <Form
            contacts={contacts}
            coords={coords}
            isMobile={isMobile}
            onContactsUpdate={onContactsUpdate}
            onCoordsChange={onCoordsChange}
          />

          <Items
            items={items}
            onItemCountInc={onItemCountInc}
            onItemCountDec={onItemCountDec}
            onItemRemove={onItemRemove}
          />

          {isMobile && <TotalPrice
            value={getTotalItemsPrice(items)}
          />}

          <Button
            title="Купить"
            onClick={() => {console.log(`Buy button click`)}}
          />

          {!isMobile && <div className="cart__map">
            <Map
              address={contacts.address}
              coords={coords}
              onClick={onCoordsChange}
            />
            <TotalPrice
              value={getTotalItemsPrice(items)}
            />
          </div>}
      </section>
    </div>
  );
};


export { Cart };
