import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-b81f77eb2fb39ce8cc77d178739099f6"
        alt="zomatologo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Nagpur</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i class="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">KD</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;