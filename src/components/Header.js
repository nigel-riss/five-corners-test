import '../styles/header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__top">
          <h3>top</h3>
        </div>
        <div className="header__nav">
          <h3>navigation</h3>
        </div>
        <div className="header__breadcrumbs">
          <h3>breadcrumbs</h3>
        </div>
      </div>
    </header>
  );
};

export { Header };
