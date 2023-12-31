import React from 'react'
import './exploreSection.css';
import ExploreCard from './exploreCard';

const ExploreSection = ({list, collectionName}) => {

    if (!Array.isArray(list)) {
      console.error("Invalid list format. Expected an array.");
      return null; // or you can return a default content or an empty array as needed
    }
  return (
    <div className="max-width explore-section">
      <div className="collection-title"> {collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} key={restaurant.id} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;