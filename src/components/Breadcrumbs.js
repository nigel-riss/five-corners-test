import '../styles/breadcrumbs.css';


const Breadcrumbs = () => {
  return (
    <ol className="breadcrumbs">
      <li className="breadcrumbs__item">
        <a href="/">Главная</a>
      </li>
      <li className="breadcrumbs__item breadcrumbs__item--current">
        Корзина
      </li>
    </ol>
  );
};


export { Breadcrumbs };
