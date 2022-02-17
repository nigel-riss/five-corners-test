
import { useState } from 'react';
import { Breadcrumbs } from './Breadcrumbs.js';
import { HeaderTop } from './HeaderTop.js';
import { Navigation } from './Navigation.js';
import '../styles/header.css';


const Header = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const {
    isMobile,
    items,
  } = props;

  const handleMenuToggle = () => {
    console.log(`wtf really`);
    setIsMenuShown(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <HeaderTop
          isMobile={isMobile}
          items={items}
          isMenuShown={isMenuShown}
          toggleMenu={handleMenuToggle}
        />
        <Navigation
          isShown={isMenuShown}
        />
        <Breadcrumbs />
      </div>
    </header>
  );
};

export { Header };
