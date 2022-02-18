import logo from '../img/logo.svg';
import '../styles/main-menu.css';


const Navigation = (props) => {
  const {
    isShown,
  } = props;

  return (
    <ul
      className={`main-menu ${isShown ? `main-menu--shown` : ``}`}
    >
      <li><a href="/">Страница 1</a></li>
      <li><a href="/">Страница 2</a></li>
      <li><a href="/">Страница 3</a></li>
      <li className="main-menu__logo">
        <img
          src={logo}
          alt="logo"
        />
      </li>
      <li><a href="/">Страница 4</a></li>
      <li><a href="/">Страница 5</a></li>
      <li><a href="/">Страница 6</a></li>
    </ul>
  );
};


export { Navigation };
