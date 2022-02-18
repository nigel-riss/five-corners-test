import { IconCart } from './IconCart.js';
import { IconFavorite } from './IconFavorite.js';
import { IconProfile } from './IconProfile.js';
import { IconMenu } from './IconMenu.js';
import { Search } from './Search.js';
import '../styles/header-top.css';
import logo from '../img/logo.svg';


const HeaderTop = (props) => {
  const {
    isMenuShown,
    isMobile,
    itemsCount,
    toggleMenu,
  } = props;

  return (
    <div className="header-top">
      {isMobile && <IconMenu
        isOpen={isMenuShown}
        onClick={toggleMenu}
      />}

      <Search />

      <div className="header-top__logo">
        <img
          src={logo}
          alt="logo"
        />
      </div>

      { !isMobile && <IconProfile /> }
      <IconFavorite />

      <IconCart
        itemsCount={itemsCount}
      />
    </div>
  );
};


export { HeaderTop };
