import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaypalExpressBtn from "react-paypal-express-checkout";

import Modal from "../components/Modal";
import Navbar from "./../components/Navbar";
import Header from "./../components/Header";
import TableRows from "./../components/TableRows";

class Cart extends Component {
  state = {
    itemArray: [],
    wristbandsYouth: sessionStorage.getItem("wristbands-youth"),
    wristbandsAdult: sessionStorage.getItem("wristbands-adult"),
    patches: sessionStorage.getItem("patches"),
    keychains: sessionStorage.getItem("keychains"),
    tshirtsYouthSmallBlue: sessionStorage.getItem("tshirts-youth-small-blue"),
    tshirtsYouthMediumBlue: sessionStorage.getItem("tshirts-youth-medium-blue"),
    tshirtsYouthLargeBlue: sessionStorage.getItem("tshirts-youth-large-blue"),
    tshirtsYouthXtraBlue: sessionStorage.getItem("tshirts-youth-xtra-blue"),
    tshirtsAdultSmallBlue: sessionStorage.getItem("tshirts-adult-small-blue"),
    tshirtsAdultMediumBlue: sessionStorage.getItem("tshirts-adult-medium-blue"),
    tshirtsAdultLargeBlue: sessionStorage.getItem("tshirts-adult-large-blue"),
    tshirtsAdultXtraBlue: sessionStorage.getItem("tshirts-adult-xtra-blue"),
    tshirtsAdultXtraXtraBlue: sessionStorage.getItem(
      "tshirts-adult-xtra-xtra-blue"
    ),
    tshirtsYouthSmallPurp: sessionStorage.getItem("tshirts-youth-small-purp"),
    tshirtsYouthMediumPurp: sessionStorage.getItem("tshirts-youth-medium-purp"),
    tshirtsYouthLargePurp: sessionStorage.getItem("tshirts-youth-large-purp"),
    tshirtsYouthXtraPurp: sessionStorage.getItem("tshirts-youth-xtra-purp"),
    tshirtsAdultSmallPurp: sessionStorage.getItem("tshirts-adult-small-purp"),
    tshirtsAdultMediumPurp: sessionStorage.getItem("tshirts-adult-medium-purp"),
    tshirtsAdultLargePurp: sessionStorage.getItem("tshirts-adult-large-purp"),
    tshirtsAdultXtraPurp: sessionStorage.getItem("tshirts-adult-xtra-purp"),
    tshirtsAdultXtraXtraPurp: sessionStorage.getItem(
      "tshirts-adult-xtra-xtra-purp"
    ),
    show: false,
    title: "",
    message: ""
  };

  componentDidMount() {
    this.createArray();
    this.props.createNewTotal();
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  updateCart(evt) {
    evt.preventDefault();
    this.updateTable();
    this.props.createNewTotal();
  }

  emptyCart(evt) {
    evt.preventDefault();
    sessionStorage.clear();
    this.props.updateCartTotal(0);
    this.createArray();
  }

  deleteItem = (storageName, price, evt) => {
    evt.preventDefault();
    let newTotal =
      this.props.cartTotal - price * sessionStorage.getItem(storageName);
    this.props.updateCartTotal(newTotal);
    sessionStorage.removeItem(storageName);
    this.createArray();
  };

  handleChange = evt => {
    if (evt.target.value) {
      this.setState({ [evt.target.name]: parseInt(evt.target.value) });
    } else {
      this.setState({ [evt.target.name]: 0 });
    }
    console.log(evt.target.name);
    console.log(evt.target.value);
  };

  updateQuantity = (storageName, stateName, price) => {
    var newQuantity = stateName;
    if (newQuantity === 0) {
      sessionStorage.removeItem(storageName);
      this.createArray();
    } else {
      sessionStorage.setItem(storageName, newQuantity);
    }
  };

  updateTable = () => {
    if (
      sessionStorage.getItem("wristbands-youth") &&
      (this.state.wristbandsYouth || this.state.wristbandsYouth === 0) &&
      sessionStorage.getItem("wristbands-youth") !== this.state.wristbandsYouth
    ) {
      this.updateQuantity("wristbands-youth", this.state.wristbandsYouth, 3);
    }
    if (
      sessionStorage.getItem("wristbands-adult") &&
      (this.state.wristbandsAdult || this.state.wristbandsAdult === 0) &&
      sessionStorage.getItem("wristbands-adult") !== this.state.wristbandsAdult
    ) {
      this.updateQuantity("wristbands-adult", this.state.wristbandsAdult, 3);
    }
    if (
      sessionStorage.getItem("keychains") &&
      (this.state.keychains || this.state.keychains === 0) &&
      sessionStorage.getItem("keychains") !== this.state.keychains
    ) {
      this.updateQuantity("keychains", this.state.keychains, 4);
    }
    if (
      sessionStorage.getItem("patches") &&
      (this.state.patches || this.state.patches === 0) &&
      sessionStorage.getItem("patches") !== this.state.patches
    ) {
      this.updateQuantity("patches", this.state.patches, 4);
    }
    if (
      sessionStorage.getItem("tshirts-youth-small-blue") &&
      (this.state.tshirtsYouthSmallBlue ||
        this.state.tshirtsYouthSmallBlue === 0) &&
      sessionStorage.getItem("tshirts-youth-small-blue") !==
        this.state.tshirtsYouthSmallBlue
    ) {
      this.updateQuantity(
        "tshirts-youth-small-blue",
        this.state.tshirtsYouthSmallBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-medium-blue") &&
      (this.state.tshirtsYouthMediumBlue ||
        this.state.tshirtsYouthMediumBlue === 0) &&
      sessionStorage.getItem("tshirts-youth-medium-blue") !==
        this.state.tshirtsYouthMediumBlue
    ) {
      this.updateQuantity(
        "tshirts-youth-medium-blue",
        this.state.tshirtsYouthMediumBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-large-blue") &&
      (this.state.tshirtsYouthLargeBlue ||
        this.state.tshirtsYouthLargeBlue === 0) &&
      sessionStorage.getItem("tshirts-youth-large-blue") !==
        this.state.tshirtsYouthLargeBlue
    ) {
      this.updateQuantity(
        "tshirts-youth-large-blue",
        this.state.tshirtsYouthLargeBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-xtra-blue") &&
      (this.state.tshirtsYouthXtraBlue ||
        this.state.tshirtsYouthXtraBlue === 0) &&
      sessionStorage.getItem("tshirts-youth-xtra-blue") !==
        this.state.tshirtsYouthXtraBlue
    ) {
      this.updateQuantity(
        "tshirts-youth-xtra-blue",
        this.state.tshirtsYouthXtraBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-small-blue") &&
      (this.state.tshirtsAdultSmallBlue ||
        this.state.tshirtsAdultSmallBlue === 0) &&
      sessionStorage.getItem("tshirts-adult-small-blue") !==
        this.state.tshirtsAdultSmallBlue
    ) {
      this.updateQuantity(
        "tshirts-adult-small-blue",
        this.state.tshirtsAdultSmallBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-medium-blue") &&
      (this.state.tshirtsAdultMediumBlue ||
        this.state.tshirtsAdultMediumBlue === 0) &&
      sessionStorage.getItem("tshirts-adult-medium-blue") !==
        this.state.tshirtsAdultMediumBlue
    ) {
      this.updateQuantity(
        "tshirts-adult-medium-blue",
        this.state.tshirtsAdultMediumBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-large-blue") &&
      (this.state.tshirtsAdultLargeBlue ||
        this.state.tshirtsAdultLargeBlue === 0) &&
      sessionStorage.getItem("tshirts-adult-large-blue") !==
        this.state.tshirtsAdultLargeBlue
    ) {
      this.updateQuantity(
        "tshirts-adult-large-blue",
        this.state.tshirtsAdultLargeBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-xtra-blue") &&
      (this.state.tshirtsAdultXtraBlue ||
        this.state.tshirtsAdultXtraBlue === 0) &&
      sessionStorage.getItem("tshirts-adult-xtra-blue") !==
        this.state.tshirtsAdultXtraBlue
    ) {
      this.updateQuantity(
        "tshirts-adult-xtra-blue",
        this.state.tshirtsAdultXtraBlue,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-xtra-xtra-blue") &&
      (this.state.tshirtsAdultXtraXtraBlue ||
        this.state.tshirtsAdultXtraXtraBlue === 0) &&
      sessionStorage.getItem("tshirts-adult-xtra-xtra-blue") !==
        this.state.tshirtsAdultXtraXtraBlue
    ) {
      this.updateQuantity(
        "tshirts-adult-xtra-xtra-blue",
        this.state.tshirtsAdultXtraXtraBlue,
        20
      );
    }

    if (
      sessionStorage.getItem("tshirts-youth-small-purp") &&
      (this.state.tshirtsYouthSmallPurp ||
        this.state.tshirtsYouthSmallPurp === 0) &&
      sessionStorage.getItem("tshirts-youth-small-purp") !==
        this.state.tshirtsYouthSmallPurp
    ) {
      this.updateQuantity(
        "tshirts-youth-small-purp",
        this.state.tshirtsYouthSmallPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-medium-purp") &&
      (this.state.tshirtsYouthMediumPurp ||
        this.state.tshirtsYouthMediumPurp === 0) &&
      sessionStorage.getItem("tshirts-youth-medium-purp") !==
        this.state.tshirtsYouthMediumPurp
    ) {
      this.updateQuantity(
        "tshirts-youth-medium-purp",
        this.state.tshirtsYouthMediumPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-large-purp") &&
      (this.state.tshirtsYouthLargePurp ||
        this.state.tshirtsYouthLargePurp === 0) &&
      sessionStorage.getItem("tshirts-youth-large-purp") !==
        this.state.tshirtsYouthLargePurp
    ) {
      this.updateQuantity(
        "tshirts-youth-large-purp",
        this.state.tshirtsYouthLargePurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-xtra-purp") &&
      (this.state.tshirtsYouthXtraPurp ||
        this.state.tshirtsYouthXtraPurp === 0) &&
      sessionStorage.getItem("tshirts-youth-xtra-purp") !==
        this.state.tshirtsYouthXtraPurp
    ) {
      this.updateQuantity(
        "tshirts-youth-xtra-purp",
        this.state.tshirtsYouthXtraPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-small-purp") &&
      (this.state.tshirtsAdultSmallPurp ||
        this.state.tshirtsAdultSmallPurp === 0) &&
      sessionStorage.getItem("tshirts-adult-small-purp") !==
        this.state.tshirtsAdultSmallPurp
    ) {
      this.updateQuantity(
        "tshirts-adult-small-purp",
        this.state.tshirtsAdultSmallPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-medium-purp") &&
      (this.state.tshirtsAdultMediumPurp ||
        this.state.tshirtsAdultMediumPurp === 0) &&
      sessionStorage.getItem("tshirts-adult-medium-purp") !==
        this.state.tshirtsAdultMediumPurp
    ) {
      this.updateQuantity(
        "tshirts-adult-medium-purp",
        this.state.tshirtsAdultMediumPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-large-purp") &&
      (this.state.tshirtsAdultLargePurp ||
        this.state.tshirtsAdultLargePurp === 0) &&
      sessionStorage.getItem("tshirts-adult-large-purp") !==
        this.state.tshirtsAdultLargePurp
    ) {
      this.updateQuantity(
        "tshirts-adult-large-purp",
        this.state.tshirtsAdultLargePurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-xtra-purp") &&
      (this.state.tshirtsAdultXtraPurp ||
        this.state.tshirtsAdultXtraPurp === 0) &&
      sessionStorage.getItem("tshirts-adult-xtra-purp") !==
        this.state.tshirtsAdultXtraPurp
    ) {
      this.updateQuantity(
        "tshirts-adult-xtra-purp",
        this.state.tshirtsAdultXtraPurp,
        20
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-xtra-xtra-purp") &&
      (this.state.tshirtsAdultXtraXtraPurp ||
        this.state.tshirtsAdultXtraXtraPurp === 0) &&
      sessionStorage.getItem("tshirts-adult-xtra-xtra-purp") !==
        this.state.tshirtsAdultXtraXtraPurp
    ) {
      this.updateQuantity(
        "tshirts-adult-xtra-xtra-purp",
        this.state.tshirtsAdultXtraXtraPurp,
        20
      );
    }
  };

  createArray() {
    let itemsArray = [];
    let id = 0;
    if (sessionStorage.getItem("wristbands-youth")) {
      itemsArray.push({
        id: id,
        storageName: "wristbands-youth",
        stateName: "wristbandsYouth",
        productName: "Wristband (Youth)",
        price: 3
      });
      id++;
    }
    if (sessionStorage.getItem("wristbands-adult")) {
      itemsArray.push({
        id: id,
        storageName: "wristbands-adult",
        stateName: "wristbandsAdult",
        productName: "Wristband (Adult)",
        price: 3
      });
      id++;
    }
    if (sessionStorage.getItem("keychains")) {
      itemsArray.push({
        id: id,
        storageName: "keychains",
        stateName: "keychains",
        productName: "Keychain",
        price: 4
      });
      id++;
    }
    if (sessionStorage.getItem("patches")) {
      itemsArray.push({
        id: id,
        storageName: "patches",
        stateName: "patches",
        productName: "Patch",
        price: 4
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-small-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-small-blue",
        stateName: "tshirtsYouthSmallBlue",
        productName: "Blue Tshirt (Youth Small)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-medium-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-medium-blue",
        stateName: "tshirtsYouthMediumBlue",
        productName: "Blue Tshirt (Youth Medium)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-large-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-large-blue",
        stateName: "tshirtsYouthLargeBlue",
        productName: "Blue Tshirt (Youth Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-xtra-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-xtra-blue",
        stateName: "tshirtsYouthXtraBlue",
        productName: "Blue Tshirt (Youth Extra Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-small-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-small-blue",
        stateName: "tshirtsAdultSmallBlue",
        productName: "Blue Tshirt (Adult Small)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-medium-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-medium-blue",
        stateName: "tshirtsAdultMediumBlue",
        productName: "Blue Tshirt (Adult Medium)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-large-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-large-blue",
        stateName: "tshirtsAdultLargeBlue",
        productName: "Blue Tshirt (Adult Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-xtra-blue",
        stateName: "tshirtsAdultXtraBlue",
        productName: "Blue Tshirt (Adult Extra Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-xtra-blue")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-xtra-xtra-blue",
        stateName: "tshirtsAdultXtraXtraBlue",
        productName: "Blue Tshirt (Adult Extra Extra Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-small-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-small-purp",
        stateName: "tshirtsYouthSmallPurp",
        productName: "Purple Tshirt (Youth Small)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-medium-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-medium-purp",
        stateName: "tshirtsYouthMediumPurp",
        productName: "Purple Tshirt (Youth Medium)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-large-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-large-purp",
        stateName: "tshirtsYouthLargePurp",
        productName: "Purple Tshirt (Youth Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-xtra-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-xtra-purp",
        stateName: "tshirtsYouthXtraPurp",
        productName: "Purple Tshirt (Youth Extra Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-small-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-small-purp",
        stateName: "tshirtsAdultSmallPurp",
        productName: "Purple Tshirt (Adult Small)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-medium-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-medium-purp",
        stateName: "tshirtsAdultMediumPurp",
        productName: "Purple Tshirt (Adult Medium)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-large-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-large-purp",
        stateName: "tshirtsAdultLargePurp",
        productName: "Purple Tshirt (Adult Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-xtra-purp",
        stateName: "tshirtsAdultXtraPurp",
        productName: "Purple Tshirt (Adult Extra Large)",
        price: 20
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-xtra-purp")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-xtra-xtra-purp",
        stateName: "tshirtsAdultXtraXtraPurp",
        productName: "Purple Tshirt (Adult Extra Extra Large)",
        price: 20
      });
      id++;
    }
    this.setState({ itemArray: itemsArray });
  }

  createItemsArray() {
    var items = [];
    if (sessionStorage.getItem("wristbands-youth")) {
      items.push({
        name: "wristband",
        description: "Youth Wristband",
        quantity: sessionStorage.getItem("wristbands-youth"),
        price: "3",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("wristbands-adult")) {
      items.push({
        name: "wristband",
        description: "Adult Wristband",
        quantity: sessionStorage.getItem("wristbands-adult"),
        price: "3",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("keychains")) {
      items.push({
        name: "keychain",
        description: "Keychain",
        quantity: sessionStorage.getItem("keychains"),
        price: "4",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("patches")) {
      items.push({
        name: "patch",
        description: "Patch",
        quantity: sessionStorage.getItem("patches"),
        price: "4",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-small-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Youth Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-small-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-medium-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Youth Medium Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-medium-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-large-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Youth Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-large-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-xtra-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Youth Xtra-Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-xtra-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-small-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Adult Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-small-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-medium-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Adult Medium Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-medium-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-large-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Adult Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-large-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Adult Extra Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-xtra-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-xtra-blue")) {
      items.push({
        name: "tshirts",
        description: "Blue Adult Extra Extra Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-xtra-xtra-blue"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-small-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Youth Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-small-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-medium-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Youth Medium Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-medium-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-large-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Youth Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-large-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-xtra-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Youth Xtra-Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-xtra-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-small-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Adult Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-small-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-medium-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Adult Medium Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-medium-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-large-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Adult Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-large-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Adult Extra Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-xtra-purp"),
        price: "20",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-xtra-xtra-purp")) {
      items.push({
        name: "tshirts",
        description: "Purple Adult Extra Extra Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-xtra-xtra-purp"),
        price: "20",
        currency: "USD"
      });
    }
    return items;
  }

  render() {
    let env = "production";
    const client = {
      sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
      production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION
    };
    const onSuccess = payment => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      this.setState({
        show: true,
        title: "Payment Successful",
        message: `The payment was successful. Thank you ${
          payment.address.recipient_name
        } for your payment!`
      });
      sessionStorage.clear();
      this.props.updateCartTotal(0);
      this.createArray();
    };

    const onCancel = data => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      this.setState({
        show: true,
        title: "Payment Cancelled",
        message: `The payment was cancelled!`
      });
    };

    const onError = err => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    return (
      <div>
        <Navbar />

        <Header title="Shopping Cart" />

        <div id="content">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <table className="table" id="checkout-table">
                <thead>
                  <tr className="font-weight-bold" id="last-row">
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-right">Item Price</th>
                    <th className="text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRows
                    itemArray={this.state.itemArray}
                    deleteItem={this.deleteItem}
                    handleChange={this.handleChange}
                    wristbandsYouth={this.state.wristbandsYouth}
                    wristbandsAdult={this.state.wristbandsAdult}
                    patches={this.state.patches}
                    keychains={this.state.keychains}
                    tshirtsAdultSmallBlue={this.state.tshirtsAdultSmallBlue}
                    tshirtsAdultMediumBlue={this.state.tshirtsAdultMediumBlue}
                    tshirtsAdultLargeBlue={this.state.tshirtsAdultLargeBlue}
                    tshirtsAdultXtraBlue={this.state.tshirtsAdultXtraBlue}
                    tshirtsAdultXtraXtraBlue={this.state.tshirtsAdultXtraXtraBlue}
                    tshirtsYouthSmallBlue={this.state.tshirtsYouthSmallBlue}
                    tshirtsYouthMediumBlue={this.state.tshirtsYouthMediumBlue}
                    tshirtsYouthLargeBlue={this.state.tshirtsYouthLargeBlue}
                    tshirtsYouthXtraBlue={this.state.tshirtsYouthXtraBlue}
                    tshirtsAdultSmallPurp={this.state.tshirtsAdultSmallPurp}
                    tshirtsAdultMediumPurp={this.state.tshirtsAdultMediumPurp}
                    tshirtsAdultLargePurp={this.state.tshirtsAdultLargePurp}
                    tshirtsAdultXtraPurp={this.state.tshirtsAdultXtraPurp}
                    tshirtsAdultXtraXtraPurp={this.state.tshirtsAdultXtraXtraPurp}
                    tshirtsYouthSmallPurp={this.state.tshirtsYouthSmallPurp}
                    tshirtsYouthMediumPurp={this.state.tshirtsYouthMediumPurp}
                    tshirtsYouthLargePurp={this.state.tshirtsYouthLargePurp}
                    tshirtsYouthXtraPurp={this.state.tshirtsYouthXtraPurp}
                  />
                  <tr>
                    <td />
                    <td />
                    <td className="font-weight-bold text-right">Subotal:</td>
                    <td className="text-right"> ${this.props.cartTotal}.00 </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td className="font-weight-bold text-right">Shipping:</td>
                    <td className="text-right">
                      {" "}
                      ${this.props.shippingCharge}.00{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        id="updateCart"
                        className="btn btn-secondary text-white mb-2 float-left"
                        onClick={e => this.updateCart(e)}
                      >
                        Update Cart
                      </button>
                      <button
                        id="emptyCart"
                        className="btn btn-secondary text-white mb-2 ml-1 float-left"
                        onClick={e => this.emptyCart(e)}
                      >
                        Empty Cart
                      </button>
                    </td>
                    <td />
                    <td className="font-weight-bold text-right">Total:</td>
                    <td className="text-right">${this.props.finalTotal}.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-md-6 text-center">
                  <Link
                    to="/store"
                    className="btn btn-primary text-white mb-2 float-md-left"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="col-md-6 text-center">
                  <div className="mb-2 float-md-right">
                    <PaypalExpressBtn
                      env={env}
                      client={client}
                      currency={"USD"}
                      total={this.props.finalTotal}
                      onError={onError}
                      onSuccess={onSuccess}
                      onCancel={onCancel}
                      paymentOptions={{
                        redirect_urls: {
                          cancel_url: "https://youthrally.org/cart"
                        },
                        transactions: [
                          {
                            amount: {
                              total: this.props.finalTotal,
                              currency: "USD",
                              details: {
                                subtotal: this.props.cartTotal,
                                tax: "0.00",
                                shipping: this.props.shippingCharge,
                                handling_fee: "0.00",
                                shipping_discount: "0.00",
                                insurance: "0.00"
                              }
                            },
                            description: "Youth Rally Store Order.",
                            payment_options: {
                              allowed_payment_method: "INSTANT_FUNDING_SOURCE"
                            },
                            item_list: {
                              items: this.createItemsArray()
                            }
                          }
                        ],
                        note_to_payer:
                          "Contact info@youthrally.org for any questions on your order."
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default Cart;
