import { KeyboardArrowRight } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { Slide } from "react-slideshow-image";
import style from "./Slideshow.module.css";
import "react-slideshow-image/dist/styles.css";

const Slideshow = ({ images }) => {
  return (
    <div className={style.SlideContainer}>
      <Slide
        duration={2000}
        transitionDuration={500}
        arrows={true}
        prevArrow={<KeyboardArrowLeft className="arrow prev" />}
        nextArrow={<KeyboardArrowRight className="arrow next" />}
      >
        {images.map((image, index) => (
          <div className={style.EachSlide} key={index}>
            <img
              style={{ margin: "0 auto", display: "flex" }}
              width={"80%"}
              height={"100%"}
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
