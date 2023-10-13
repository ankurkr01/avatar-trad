import React, { useState } from "react";
import "../../style/homeStyle/displayvisualizer.css";
import silder1 from "../../Images/slider-2.jpg";
import silder2 from "../../Images/slider-3.jpg";

const DisplayVisualizer = () => {
  const [slideValue, setSlideValue] = useState(50);

  const handleSlide = (event) => {
    const newValue = event.target.value;
    setSlideValue(newValue);
  };

  const clipPathStyle = {
    clipPath: `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`,
  };

  return (
    <div>
      <section className="comaprison_body">
        <div className="mt-5">
          <div className="content_text">
            <h2 className="text-dark text-center display-6 font-weight-bold">Two Image Comparision</h2>
            <p className="text-dark mt-5">
              m Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets
            </p>
          </div>
        </div>
        <div className="comparison_container">
          <img src={silder1} alt="image-1" />
          <img id="my-img" src={silder2} alt="image-2" style={clipPathStyle} />
          <input
            type="range"
            min="0"
            max="100"
            value={slideValue}
            id="slider"
            onChange={handleSlide}
          />
        </div>
        <div className="bottom_content">
          <div className="row">
            <div className="col">
              <h2>Upload Design</h2>
            </div>
            <div className="col">
              <h2>Upload Design</h2>
            </div>
            <div className="col">
              <h2>Upload Design</h2>
            </div>
            <div className="col">
              <h2>Upload Design</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisplayVisualizer;
