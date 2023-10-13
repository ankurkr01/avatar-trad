import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import card1 from "../../Images/cromatic.jpg";
import "../../style/homeStyle/categoriesimage.css";

const CategoriesImages = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="ml-5 me-5 product_container">
      <h2 className="text-center display-6 font-weight-bold">
        Browse our Category
      </h2>
      <div className="mt-5">
        <Carousel
          responsive={responsive}
          // swipeable={false}
          // draggable={false}
          // showDots={true}
          // ssr={true}
          // infinite={true}
          // autoPlaySpeed={1000}
          // keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          // containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
          <div className="carousel_card">
            <img src={card1} alt="" />
            <div className="card_info">tushar</div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesImages;
