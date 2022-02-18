import { Item } from './Item.js';
import '../styles/items.css';


const Items = (props) => {
  const {
    items,
    onItemCountInc,
    onItemCountDec,
    onItemRemove,
  } = props;

  const renderItems = (items) => items
    .map(item => (
        <Item
          item={item}
          key={item.id}
          onInc={onItemCountInc}
          onDec={onItemCountDec}
          onRemove={onItemRemove}
        />
      )
    );

  return (
    <div className="items">
      <h2 className="items__title">Выбранные товары:</h2>
      <div className="items__items">
        {renderItems(items)}
      </div>
    </div>
  );
};


export { Items };
