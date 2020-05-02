import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Header from "./../components/Header";
import SizedItemCard from "./../components/SizedItemCard";
import ItemCard from "./../components/ItemCard";

const Store = (props) => (
  <div>
    <Header title="Store" />

    <div className="container-fluid mx-auto pt-2 pb-1">
      {props.subtotal !== 0 && (
        <div className="shopping-cart text-right">
          <Link to="/cart">
            <FontAwesomeIcon
              className="fontAwesome my-1"
              icon={faShoppingCart}
              size="2x"
            />
            <div className="caption purpleText">
              <p id="total" className="font-weight-bold">
                ${props.subtotal}
              </p>
            </div>
          </Link>
        </div>
      )}
      <div className="row justify-content-center text-center">
        <SizedItemCard
          imageSource="/assets/images/blue_yr_shirt.jpg"
          imageAlt="Blue YR Tshirt"
          title="Youth Rally Blue T-Shirt"
          price={20.0}
          text="Support Youth Rally with this fresh Unisex Youth Rally
              T-Shirt! Front: I ain't ashamed of nothing on this body -
              Butterball, Age 13; Back: youthrally.org"
          sizes={[
            { id: 1, title: "Blue Youth Small", size: "yth_sm" },
            { id: 2, title: "Blue Youth Medium", size: "yth_md" },
            { id: 3, title: "Blue Youth Large", size: "yth_lg" },
            {
              id: 4,
              title: "Blue Youth Extra Large",
              size: "yth_xl",
            },
            { id: 5, title: "Blue Adult Small", size: "adlt_sm" },
            { id: 6, title: "Blue Adult Medium", size: "adlt_md" },
            { id: 7, title: "Blue Adult Large", size: "adlt_lg" },
            {
              id: 8,
              title: "Blue Adult Extra Large",
              size: "adlt_xl",
            },
            {
              id: 9,
              title: "Blue Adult Extra Extra Large",
              size: "adlt_xxl",
            },
          ]}
          baseName="blue_tshirts"
          incrementCart={props.incrementCart}
        />

        <SizedItemCard
          imageSource="/assets/images/purp_yr_shirt.jpg"
          imageAlt="Purple YR Tshirt"
          title="Youth Rally Purple T-Shirt"
          price={20.0}
          text="Support Youth Rally with this fresh new Unisex Youth Rally
              T-Shirt! Front: There's A Camp For That? (with diagnoses
              listed); Back: youthrally.org"
          sizes={[
            { id: 1, title: "Purple Youth Small", size: "yth_sm" },
            {
              id: 2,
              title: "Purple Youth Medium",
              size: "yth_md",
            },
            { id: 3, title: "Purple Youth Large", size: "yth_lg" },
            {
              id: 4,
              title: "Purple Youth Extra Large",
              size: "yth_xl",
            },
            { id: 5, title: "Purple Adult Small", size: "adlt_sm" },
            {
              id: 6,
              title: "Purple Adult Medium",
              size: "adlt_md",
            },
            { id: 7, title: "Purple Adult Large", size: "adlt_lg" },
            {
              id: 8,
              title: "Purple Adult Extra Large",
              size: "adlt_xl",
            },
            {
              id: 9,
              title: "Purple Adult Extra Extra Large",
              size: "adlt_xxl",
            },
          ]}
          baseName="purp_tshirts"
          incrementCart={props.incrementCart}
        />
        <ItemCard
          imageSource="/assets/images/20150924_150546.jpg"
          imageAlt="YR Keychain"
          title="Keychain"
          price={4.0}
          text="Find your keys quickly with this Youth Rally YOU ARE NOT
                ALONE glow in the dark keychain."
          baseName="keychains"
          incrementCart={props.incrementCart}
        />
        <ItemCard
          imageSource="/assets/images/patch.jpg"
          imageAlt="YR Patch"
          title="Patch"
          price={4.0}
          text="Personalize your own Youth Rally gear with this YOU ARE NOT
                ALONE embroidered patch. 3 inch by 3 inch square patch."
          baseName="patches"
          incrementCart={props.incrementCart}
        />
        <SizedItemCard
          imageSource="/assets/images/YR_-_bracelet.jpg"
          imageAlt="YR Bracelet"
          title="Wristband"
          price={3.0}
          text="YOU ARE NOT ALONE - wear your Rally family with you
                year-round. This original white Rally wristband glows green
                in the dark!"
          sizes={[
            { id: 1, title: "Youth", size: "yth" },
            { id: 2, title: "Adult", size: "adlt" },
          ]}
          baseName="bracelets"
          incrementCart={props.incrementCart}
        />
      </div>
      <div className="text-center">
        <Button as={Link} to="/cart" className="btn mb-2 mx-auto purpleButton">
          Go to Checkout
        </Button>
      </div>
    </div>
  </div>
);

export default Store;

Store.propTypes = {
  subtotal: PropTypes.number.isRequired
};

