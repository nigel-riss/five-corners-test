import { useState } from 'react';
import { useMobileWidth } from '../hooks/useMobileWidth.js';
import { getTotalItemsCount } from '../utils/common.js';
import { Header } from './Header.js';
import { Cart } from './Cart.js';
import data from '../mocks.json';


function App() {
  const [items, setItems] = useState(JSON.parse(data));
  const [contacts, setContacts] = useState({
    address: ``,
    name: ``,
    phone: ``,
    email: ``,
    packageType: ``,
    comment: ``,
  });

  const isMobile = useMobileWidth();

  const handleContactsUpdate = (event) => {
    const {
      name,
      value,
    } = event.target;

    console.log(name, value);

    setContacts(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
