import { useState } from 'react';
import { Header } from './Header.js';
import { Cart } from './Cart.js';
import data from '../mocks.json';


function App() {
  const [items, setItems] = useState(JSON.parse(data));
  const [isMobile, setIsMobile] = useState(true);

  return (
    <div className="app">
      <Header
        isMobile={isMobile}
        items={items}
      />
      <Cart 
        isMobile={isMobile}
        items={items}
        updateItems={() => {}}
      />
    </div>
  );
}

export default App;
