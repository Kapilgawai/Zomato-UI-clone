import React from 'react';
import "./deliveryCollections.css";
import NextArrow from '../../common/carousel/nextArrow';
import PrewArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import './deliveryItem';
import DeliveryItem from './deliveryItem';


const deliveryItems = [
  {
    id: 1,
    title: "pizza",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/d62/0e1f1a86188cf2b9cbaea73780df9d62.jpg",
  },

  {
    id: 2,
    title: "Burger",
    cover:
      "https://b.zmtcdn.com/data/pictures/chains/6/18664896/3f0c869ff188566356f661c918020135_o2_featured_v2.png",
  },

  {
    id: 3,
    title: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/e16/06e1ea4acb07b8c2864450a23ebc7e16.jpg",
  },

  {
    id: 4,
    title: "Cake",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/3be/daf857be09eff272657fa53ac9d0f3be.jpg",
  },

  {
    id: 5,
    title: "Biryani",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/e46/e9f220f4f452199af4d6f7fc8be40e46.jpg",
  },

  {
    id: 6,
    title: "Chaat",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/a37/1289a0ce5aaad2ec1e3c30153025ea37.jpg",
  },
  {
    id: 7,
    title: "Momos",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/e72/68d06c9b6e6ab1f256c1dd480816fe72.jpg?output-format=webp",
  },

  {
    id: 8,
    title: "Paneer",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/0a7/8760209b9bb5042e2077c121008070a7.jpg?output-format=webp",
  },

  {
    id: 9,
    title: "Samosa",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/ec8/6a67f46975d271f09cef4f9e16f2eec8.jpg",
  },

  {
    id: 10,
    title: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/7a7/54b55e601cee3ba4abb127d2dc4e37a7.jpg",
  },

  {
    id: 11,
    title: "Pastry",
    cover:
      "https://b.zmtcdn.com/data/dish_photos/896/8fcab206e56543fd1e40bd13262e1896.jpg?output-format=webp",
  },
];




const settings = {
  
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow/>,
  prevArrow: <PrewArrow/>,
};






const DeliveryCollections = () => {
  return (
    <div className="delivery-collection">
      <div className="max-width">
        <div className="collection-title">Eat What Makes You Happy</div>
        <Slider {...settings}>
          {deliveryItems.map((item) => {
            return <DeliveryItem item={item}/> ;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DeliveryCollections;