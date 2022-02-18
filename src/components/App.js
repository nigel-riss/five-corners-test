import { useState } from 'react';
import { useMobileWidth } from '../hooks/useMobileWidth.js';
import { getTotalItemsCount } from '../utils/common.js';
import { Header } from './Header.js';
import { Cart } from './Cart.js';
import data from '../mocks.json';


function App() {
  const [items, setItems] = useState(JSON.parse(data));
  const [contacts, setContacts] = useState({
    address: `мой адрес`,
    name: `Юра`,
    phone: `+7123`,
    email: `my.email.com`,
    packageType: `gift`,
    comment: `123`,
  });

  const isMobile = useMobileWidth();

  const handleContactsUpdate = (name, value) => {
    console.log(name, value);
  };

  const handleItemRemoval = (id) => {
    setItems(prevItems => prevItems
      .filter(item => item.id !== id)
    );
  };

  const handleItemCountInc = (id) => {
    setItems(prevItems => prevItems
      .map(item => ({
        ...item,
        amount: item.id === id ? item.amount + 1 : item.amount,
      }))
    );
  };

  const handleItemCountDec = (id) => {
    setItems(prevItems => prevItems
      .map(item => ({
        ...item,
        amount: (item.id === id && item.amount > 0)
          ? item.amount - 1
          : item.amount,
      }))
    );
  };

  return (
    <div className="app">
      <Header
        isMobile={isMobile}
        itemsCount={getTotalItemsCount(items)}
      />
      <Cart
        contacts={contacts}
        onContactsUpdate={handleContactsUpdate}
        isMobile={isMobile}
        items={items}
        onItemCountInc={handleItemCountInc}
        onItemCountDec={handleItemCountDec}
        onItemRemove={handleItemRemoval}
      />
    </div>
  );
}

export default App;
