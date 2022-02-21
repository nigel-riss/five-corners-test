import { useEffect, useState } from 'react';
import { useMobileWidth } from '../hooks/useMobileWidth.js';
import { getTotalItemsCount } from '../utils/common.js';
import { validate } from '../utils/validation.js';
import { Header } from './Header.js';
import { Cart } from './Cart.js';
import {
  API_URL,
  MAP_DEFAULT_CENTER,
} from '../utils/constants.js';

function App() {
  const [items, setItems] = useState([]);
  const [contacts, setContacts] = useState({
    address: ``,
    name: ``,
    phone: ``,
    email: ``,
    packageType: ``,
    comment: ``,
  });
  const [validity, setValidity] = useState({
    address: true,
    name: true,
    phone: true,
    email: true,
    packageType: true,
    comment: true,
  });
  const [coords, setCoords] = useState(MAP_DEFAULT_CENTER);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setItems(JSON.parse(data)))
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setValidity(validate(contacts).fields);
  }, [contacts]);

  const isMobile = useMobileWidth();

  const handleContactsUpdate = ({name, value}) => {
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

  const handleCoordsChange = (newCoords) => {
    setCoords({...newCoords});
  };

  const handleFormSubmit = () => {
    const validity = validate(contacts);
    setValidity(validity.fields);

    if (validity.isValid) {
      const order = JSON.stringify({
        contacts,
        coords,
        items,
      });

      alert(order);
      console.log(order);
    } else {
      window.scrollTo({top: 0, behavior:`smooth`});
    }
  };

  const validateContacts = () => {
    setValidity(validate(contacts).fields);
  };


  return (
    <div className="app">
      <Header
        isMobile={isMobile}
        itemsCount={getTotalItemsCount(items)}
      />
      <Cart
        contacts={contacts}
        coords={coords}
        isMobile={isMobile}
        items={items}
        onCoordsChange={handleCoordsChange}
        onContactsUpdate={handleContactsUpdate}
        onFormSubmit={handleFormSubmit}
        onItemCountInc={handleItemCountInc}
        onItemCountDec={handleItemCountDec}
        onItemRemove={handleItemRemoval}
        validate={validateContacts}
        validity={validity}
      />
    </div>
  );
}

export default App;
