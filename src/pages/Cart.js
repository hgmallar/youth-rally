import React, { Component } from "react";
import { Link } from "react-router-dom";

import Modal from "../components/Modal";
import Navbar from "./../components/Navbar";
import Header from "./../components/Header";
import TableRows from "./../components/TableRows";

class Cart extends Component {
  state = {
    shippingCharge: 5,
    finalTotal: 5,
    itemArray: []
  };

  componentDidMount() {
    this.updateTotals();
  }

  updateTotals() {
    let newShippingCharge = this.state.shippingCharge;
    newShippingCharge += Math.floor(this.props.cartTotal / 50) * 5;
    let total = this.props.cartTotal + newShippingCharge
    this.setState({shippingCharge: newShippingCharge, finalTotal: total});
  }

  updateCart(evt) {
    evt.preventDefault();
  }

  emptyCart(evt) {
    evt.preventDefault();
    sessionStorage.clear();
    this.props.updateCartTotal(0);
    this.setState({shippingCharge: 5, finalTotal: 5});
  }

  createArray() {
    let itemsArray = [];
    let id = 0;
    if (sessionStorage.getItem("wristbands-youth")) {
      itemsArray.push({
        id: id,
        storageName: "wristbands-youth",
        productName: "Wristband (Youth)",
        price: 3
      });
      id++;
    }
    if (sessionStorage.getItem("wristbands-adult")) {
      itemsArray.push({
        id: id,
        storageName: "wristbands-adult",
        productName: "Wristband (Adult)",
        price: 3
      });
      id++;
    }
    if (sessionStorage.getItem("keychains")) {
      itemsArray.push({
        id: id,
        storageName: "keychains",
        productName: "Keychain",
        price: 4
      });
      id++;
    }
    if (sessionStorage.getItem("patches")) {
      itemsArray.push({
        id: id,
        storageName: "patches",
        productName: "Patch",
        price: 4
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-small")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-small",
        productName: "Tshirt (Youth Small)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-medium")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-medium",
        productName: "Tshirt (Youth Medium)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-large")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-large",
        productName: "Tshirt (Youth Large)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-youth-xtra")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-youth-xtra",
        productName: "Tshirt (Youth Extra Large)",
        price: 15
      });
      id++;
    }
    if (sessionStorage.getItem("tshirts-adult-small")) {
      itemsArray.push({
        id: id,
        storageName: "tshirts-adult-small",
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
                  <TableRows itemArray={this.state.itemArray}/>
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
                    <td className="text-right"> ${this.state.shippingCharge}.00 </td>
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
                    <td className="text-right">${this.state.finalTotal}.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-md-6 text-center">
                <Link to="/store" className="btn btn-primary text-white mb-2 float-md-left">
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
