import { Item } from './Item.js';

import '../styles/items.css';


const Items = (props) => {
  const {
    items,
  } = props;

  console.log(items);

  const renderItems = (items) => items
    .map(item => (
        <Item
          key={item.id}
          item={item}
        />
      )
    );

  return (
    <div className="items">
      <h2 className="items__title">Выбранные товары</h2>
      <div className="items__items">
        {renderItems(items)}
      </div>
    </div>
  );
};


export { Items };
