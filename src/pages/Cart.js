import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    tshirtsYouthSmall: sessionStorage.getItem("tshirts-youth-small"),
    tshirtsYouthMedium: sessionStorage.getItem("tshirts-youth-medium"),
    tshirtsYouthLarge: sessionStorage.getItem("tshirts-youth-large"),
    tshirtsYouthXtra: sessionStorage.getItem("tshirts-youth-xtra"),
    tshirtsAdultSmall: sessionStorage.getItem("tshirts-adult-small")
  };

  componentDidMount() {
    this.createArray();
    this.props.createNewTotal();
  }

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
      sessionStorage.getItem("tshirts-youth-small") &&
      (this.state.tshirtsYouthSmall || this.state.tshirtsYouthSmall === 0) &&
      sessionStorage.getItem("tshirts-youth-small") !==
        this.state.tshirtsYouthSmall
    ) {
      this.updateQuantity(
        "tshirts-youth-small",
        this.state.tshirtsYouthSmall,
        15
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-medium") &&
      (this.state.tshirtsYouthMedium || this.state.tshirtsYouthMedium === 0) &&
      sessionStorage.getItem("tshirts-youth-medium") !==
        this.state.tshirtsYouthMedium
    ) {
      this.updateQuantity(
        "tshirts-youth-medium",
        this.state.tshirtsYouthMedium,
        15
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-large") &&
      (this.state.tshirtsYouthLarge || this.state.tshirtsYouthLarge === 0) &&
      sessionStorage.getItem("tshirts-youth-large") !==
        this.state.tshirtsYouthLarge
    ) {
      this.updateQuantity(
        "tshirts-youth-large",
        this.state.tshirtsYouthLarge,
        15
      );
    }
    if (
      sessionStorage.getItem("tshirts-youth-xtra") &&
      (this.state.tshirtsYouthXtra || this.state.tshirtsYouthXtra === 0) &&
      sessionStorage.getItem("tshirts-youth-xtra") !==
        this.state.tshirtsYouthXtra
    ) {
      this.updateQuantity(
        "tshirts-youth-xtra",
        this.state.tshirtsYouthXtra,
        15
      );
    }
    if (
      sessionStorage.getItem("tshirts-adult-small") &&
      (this.state.tshirtsAdultSmall || this.state.tshirtsAdultSmall === 0) &&
      sessionStorage.getItem("tshirts-adult-small") !==
        this.state.tshirtsAdultSmall
    ) {
      this.updateQuantity(
        "tshirts-adult-small",
        this.state.tshirtsAdultSmall,
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
    if (sessionStorage.getItem("tshirts-youth-small")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-small",
        stateName: "tshirtsYouthSmall",
        productName: "Tshirt (Youth Small)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-medium")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-medium",
        stateName: "tshirtsYouthMedium",
        productName: "Tshirt (Youth Medium)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-large")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-large",
        stateName: "tshirtsYouthLarge",
        productName: "Tshirt (Youth Large)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-xtra")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-xtra",
        stateName: "tshirtsYouthXtra",
        productName: "Tshirt (Youth Extra Large)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-small")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-small",
        stateName: "tshirtsAdultSmall",
        productName: "Tshirt (Adult Small)",
        price: 20
      });
      id++;
    }
    this.setState({ itemArray: itemsArray });
  }

  render() {
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
                    tshirtsAdultSmall={this.state.tshirtsAdultSmall}
                    tshirtsYouthSmall={this.state.tshirtsYouthSmall}
                    tshirtsYouthMedium={this.state.tshirtsYouthMedium}
                    tshirtsYouthLarge={this.state.tshirtsYouthLarge}
                    tshirtsYouthXtra={this.state.tshirtsYouthXtra}
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
                  <div id="paypal-button" className="mb-2 float-md-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal />
      </div>
    );
  }
}

export default Cart;
