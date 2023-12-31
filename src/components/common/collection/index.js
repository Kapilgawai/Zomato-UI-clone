import React from 'react'
import "./collection.css";
import Slider from 'react-slick';
import NextArrow from '../carousel/nextArrow';
import PrewArrow from '../carousel/prevArrow';




const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrewArrow />,
};




const Collection = ({list}) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collection</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Nagpur, based on trends
          </div>
          <div className="collection-location">
            <div className="collection-location-text">
              All collections in Nagpur
            </div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  className="collection-image"
                  alt={item.title}
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                  <div>{item.places}</div>
                  <i className="fi fi-rr-caret-right absolute-center"></i>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Collection;