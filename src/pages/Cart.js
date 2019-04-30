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
    tshirtsYouthSmall: sessionStorage.getItem("tshirts-youth-small"),
    tshirtsYouthMedium: sessionStorage.getItem("tshirts-youth-medium"),
    tshirtsYouthLarge: sessionStorage.getItem("tshirts-youth-large"),
    tshirtsYouthXtra: sessionStorage.getItem("tshirts-youth-xtra"),
    tshirtsAdultSmall: sessionStorage.getItem("tshirts-adult-small"),
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
    if (sessionStorage.getItem("tshirts-youth-small")) {
      items.push({
        name: "tshirts",
        description: "Youth Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-small"),
        price: "15",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-medium")) {
      items.push({
        name: "tshirts",
        description: "Youth Medium Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-medium"),
        price: "15",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-large")) {
      items.push({
        name: "tshirts",
        description: "Youth Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-large"),
        price: "15",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-youth-xtra")) {
      items.push({
        name: "tshirts",
        description: "Youth Xtra-Large Tshirt",
        quantity: sessionStorage.getItem("tshirts-youth-xtra"),
        price: "15",
        currency: "USD"
      });
    }
    if (sessionStorage.getItem("tshirts-adult-small")) {
      items.push({
        name: "tshirts",
        description: "Adult Small Tshirt",
        quantity: sessionStorage.getItem("tshirts-adult-small"),
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
