import scss from "./Slider.module.scss";
import Slider from "react-slick";
// import image from "../../../public/images/sliderArrow.svg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "none",
        position: "absolute",
        top: "205px",
        left: "370px",
        width: "29px",
        height: "29px",
        border: "3px solid white",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img
        style={{ transform: "rotate(180deg)" }}
        src="./images/sliderArrow.svg"
        alt="sliderArrow"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundImage: `url("/public/images/sliderArrow.svg"))`,
        borderRadius: "20px",
        position: "absolute",
        top: "205px",
        left: "320px",
        zIndex: "2",
        width: "29px",
        height: "29px",
        border: "3px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <img src="./images/sliderArrow.svg" alt="sliderArrow" />
    </div>
  );
}

function SliderPage() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    speed: 500,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Slider className={scss.slider__container} {...settings}>
      <div>
        <img src="./images/Intersect.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-1.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-2.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-1.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-1.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-2.svg" alt="slide_immg" />
      </div>
      <div>
        <img src="./images/Intersect-1.svg" alt="slide_immg" />
      </div>
    </Slider>
  );
}

export default SliderPage;
