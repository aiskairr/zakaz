import Header from "../components/header/Header";
import Main from "../components/main/Main";
import NavCity from "../components/navCity/NavCity";
import scss from "./HomePage.module.scss"

function HomePage() {
  return (
    <div className={scss.back__style}>
      <Header />
      <Main />
      <NavCity />
    </div>
  );
}

export default HomePage;
