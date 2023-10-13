import React from "react";
import "../../style/homeStyle/productimage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductImage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="container">
        <div className="content_text">
          <h2 className="text-center mt-5 display-6 text-weight-bold">Product Series</h2>
          <p className="mt-5 text-danger text-center">
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets
          </p>
        </div>
      </div>
      <div className="slider">
        <Carousel responsive={responsive}>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 1</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 2</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 3</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 4</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 5</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 6</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 7</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 8</div>
            </div>
          </div>
          <div className="card">
            <div className="card_img">
              <div className="card_info">card 9</div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductImage;
