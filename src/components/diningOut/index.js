import React from 'react'
import "./DiningOut.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { Dining } from '../../data/dining';
import DeliveryCollections from '../delivery/deliveryCollections';
import TopBrands from '../delivery/topBrands';












const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>

      <div>
        <DeliveryCollections />

        <div>
          <TopBrands />
        </div>
      </div>
      <div className="gold">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
          alt="offer"
          loading="auto"
          className="goldImg"
        />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Trending dining restaurants in Nagpur"
      />
    </div>
  );
};
const collectionList = [
  {
    id: "1",
    title: "Great Cafes",
    cover:
      "https://b.zmtcdn.com/data/collections/390362a568b42aaf49e9c12d9960f65b_1692184849.jpg",
    places: "11 places",
  
  },
  {
    id: "2",
    title: "Best Pubs And Bars",
    cover:
      "https://b.zmtcdn.com/data/collections/f141889a9c1564098ee6a9763a941d78_1692186590.jpg",
    places: "10 places",
  },
  {
    id: "3",
    title: "Romantic Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/6d0f0062154163f1a6a1a4a33353a645_1692188276.jpg",
    places: "5 places",
  },
  {
    id: "4",
    title: "Secret Rppftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1692187932.jpg",
    places: "6 places",
  },
  {
    id: "5",
    title: "Best Luxury Dining PLaces",
    cover:
      "https://b.zmtcdn.com/data/collections/d33b7f16f6f9549049b2c1ac96970be4_1692187359.jpg",
    places: "5 places",
  },
  {
    id: "6",
    title: "Pan Asian Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/8049ed160722a4dcf04adde41aaac43e_1692186941.jpg",
    places: "7 places",
  },
  {
    id: "7",
    title: "Live Sport Screening",
    cover:
      "https://b.zmtcdn.com/data/collections/9e73ab453b81b26a5381b592d41a8f78_1680858001.png",
    places: "10 places",
  },
  {
    id: "8",
    title: "Bingeworthy dessert",
    cover:
      "https://b.zmtcdn.com/data/collections/f25bd6f11a1e82e6b073ab3d91877570_1692188633.png",
    places: "6 places",
  },
];


const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },

  {
    id: 2,
    title: "Rating 4.0+",
  },

  {
    id: 3,
    title: "Safe and Hygenic",
  },

  {
    id: 4,
    title: "Pure veg",
  },

  {
    id: 5,
    icon: <i className="fi fi-rr-time-forward absolute-center"></i>,
    title: "Delivery Time",
  },

  {
    id: 6,
    title: "Great Offer",
  },
];

const diningList = Dining;


export default DiningOut