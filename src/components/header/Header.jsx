import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={`${scss.header__container__group } container`}>
      <Link to="/">
        <img src="./images/logo.svg" alt="logo" />
      </Link>
      <div className={scss.nav__group + " " + scss.display__content}>
        <Link to="/home">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/places">Places</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Map">Map</Link>
      </div>
      <div className={scss.profile__group + " " + scss.display__content}>
        <Link to="/search">
          <img src="./images/Vector.svg" alt="search" />
        </Link>
        <Link to="/profile">
          <img src="./images/profile.svg" alt="profile" />
        </Link>
        <button>
          English <img src="./images/Vector1.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Header;
