import SliderPage from "../slider/SliderPage";
import scss from "./Main.module.scss";

function Main() {
  return (
    <div className={scss.main__content + " " + "container"}>
      <div className={scss.left__content}>
        <h1>osh</h1>
        <p>
          Osh is the second-largest city in{" "}
          <a href="https://en.wikipedia.org/wiki/Kyrgyzstan">Kyrgyzstan</a>,
          located in the
          <a href="https://en.wikipedia.org/wiki/Fergana_Valley"> Fergana Valley</a>
          in the south of the country and often referred to as the "capital of
          the south".
        </p>
        <button>
          Explore <img src="./images/Vector1.svg" alt="arrow" />
        </button>
      </div>
      <div className={scss.right__content}>
        <SliderPage />
      </div>
    </div>
  );
}

export default Main;
