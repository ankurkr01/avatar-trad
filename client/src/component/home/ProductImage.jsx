import React from "react";
import "../../style/homeStyle/productimage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../Images/1.jpg'
import image2 from '../../Images/2.jpg'
import image3 from '../../Images/3.jpg'
import image4 from '../../Images/4.jpg'
import image5 from '../../Images/6.jpg'
import image6 from '../../Images/7.jpg'

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
          <p className="mt-5 text-center">
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
            <img src={image1} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image2} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image3} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image4} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image5} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image6} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image4} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image3} alt="Image 1" />
            </div>
          </div>
          <div className="card">
            <div className="card_img">
            <img src={image2} alt="Image 1" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductImage;
