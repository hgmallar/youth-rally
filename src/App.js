import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Jumbotron, Footer, Navbar } from "./Elements";
import {
  About,
  Applications,
  Campers,
  Cart,
  Contact,
  Counselors,
  Goldenticket,
  Events,
  Extras,
  Faq,
  Getinvolved,
  Give,
  Home,
  Leaders,
  Mission,
  Nurses,
  Partners,
  Photos,
  Store,
} from "./Pages";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.incrementCart = this.incrementCart.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.state = {
      itemArray: [
        // {
        //   unit_amount: {
        //     currency_code: "USD",
        //     value: "3.00",
        //   },
        //   id: 0,
        //   item: "bracelets_yth",
        //   name: "Bracelets (Youth)",
        //   price: 3,
        //   quantity: parseInt(sessionStorage.getItem("bracelets_yth")) || 0,
        // },
        // {
        //   unit_amount: {
        //     currency_code: "USD",
        //     value: "3.00",
        //   },
        //   id: 1,
        //   item: "bracelets_adlt",
        //   name: "Bracelets (Adult)",
        //   price: 3,
        //   quantity: parseInt(sessionStorage.getItem("bracelets_adlt")) || 0,
        // },
        // {
        //   unit_amount: {
        //     currency_code: "USD",
        //     value: "4.00",
        //   },
        //   id: 2,
        //   item: "keychains",
        //   name: "Keychains",
        //   price: 4,
        //   quantity: parseInt(sessionStorage.getItem("keychains")) || 0,
        // },
        // {
        //   unit_amount: {
        //     currency_code: "USD",
        //     value: "3.00",
        //   },
        //   id: 3,
        //   item: "patches",
        //   name: "Patches",
        //   price: 4,
        //   quantity: parseInt(sessionStorage.getItem("patches")) || 0,
        // },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 4,
          item: "blue_tshirts_yth_sm",
          name: "Blue Tshirts Youth Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_sm")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 5,
          item: "blue_tshirts_yth_md",
          name: "Blue Tshirts Youth Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_md")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 6,
          item: "blue_tshirts_yth_lg",
          name: "Blue Tshirts Youth Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_lg")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 7,
          item: "blue_tshirts_yth_xl",
          name: "Blue Tshirts Youth XL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_xl")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 8,
          item: "blue_tshirts_adlt_sm",
          name: "Blue Tshirts Adult Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_sm")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 9,
          item: "blue_tshirts_adlt_md",
          name: "Blue Tshirts Adult Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_md")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 10,
          item: "blue_tshirts_adlt_lg",
          name: "Blue Tshirts Adult Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_lg")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 11,
          item: "blue_tshirts_adlt_xl",
          name: "Blue Tshirts Adult XL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_xl")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 12,
          item: "blue_tshirts_adlt_xxl",
          name: "Blue Tshirts Adult XXL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_xxl")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 13,
          item: "purp_tshirts_yth_sm",
          name: "Purple Tshirts Youth Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_sm")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 14,
          item: "purp_tshirts_yth_md",
          name: "Purple Tshirts Youth Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_md")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 15,
          item: "purp_tshirts_yth_lg",
          name: "Purple Tshirts Youth Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_lg")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 16,
          item: "purp_tshirts_yth_xl",
          name: "Purple Tshirts Youth XL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_xl")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 17,
          item: "purp_tshirts_adlt_sm",
          name: "Purple Tshirts Adult Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_sm")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 18,
          item: "purp_tshirts_adlt_md",
          name: "Purple Tshirts Adult Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_md")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 19,
          item: "purp_tshirts_adlt_lg",
          name: "Purple Tshirts Adult Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_lg")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 20,
          item: "purp_tshirts_adlt_xl",
          name: "Purple Tshirts Adult XL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_xl")) || 0,
        },
        {
          unit_amount: {
            currency_code: "USD",
            value: "20.00",
          },
          id: 21,
          item: "purp_tshirts_adlt_xxl",
          name: "Purple Tshirts Adult XXL",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_xxl")) || 0,
        },
      ],
      subtotal: parseInt(sessionStorage.getItem("subtotal")) || 0,
      shipping: parseInt(sessionStorage.getItem("shipping")) || 0,
    };
  }

  updateShipping(newTotal, newItemArray) {
    let newShipping = this.state.shipping;
    if (newTotal) {
      newShipping = Math.ceil(newTotal / 50) * 4;
      sessionStorage.setItem("subtotal", newTotal);
      sessionStorage.setItem("shipping", newShipping);
    } else {
      newShipping = 0;
      sessionStorage.removeItem("subtotal");
      sessionStorage.removeItem("shipping");
    }
    this.setState({
      itemArray: newItemArray,
      subtotal: newTotal,
      shipping: newShipping,
    });
  }

  incrementCart(item, price) {
    const newTotal = this.state.subtotal + price;
    let objIndex = this.state.itemArray.findIndex((obj) => obj.item === item);
    let newItemArray = this.state.itemArray;
    newItemArray[objIndex].quantity += 1;
    sessionStorage.setItem(item, newItemArray[objIndex].quantity);
    this.updateShipping(newTotal, newItemArray);
  }

  changeQuantity(itemName, quantity, price, evt) {
    let objIndex = this.state.itemArray.findIndex(
      (obj) => obj.item === itemName
    );
    let newItemArray = this.state.itemArray;
    newItemArray[objIndex].quantity = parseInt(evt.target.value);
    const newTotal =
      this.state.subtotal - (quantity - parseInt(evt.target.value)) * price;
    sessionStorage.setItem(itemName, newItemArray[objIndex].quantity);
    this.updateShipping(newTotal, newItemArray);
  }

  deleteItem(itemName, quantity, price) {
    let objIndex = this.state.itemArray.findIndex(
      (obj) => obj.item === itemName
    );
    let newItemArray = this.state.itemArray;
    newItemArray[objIndex].quantity = 0;
    const newTotal = this.state.subtotal - quantity * price;
    sessionStorage.removeItem(itemName);
    this.updateShipping(newTotal, newItemArray);
  }

  emptyCart() {
    let newItemArray = this.state.itemArray;
    newItemArray.map((item) => (item.quantity = 0));
    this.setState({
      itemArray: newItemArray,
      subtotal: 0,
      shipping: 0,
    });
    sessionStorage.clear();
  }

  render() {
    
    return (
      <BrowserRouter>
        <div className="mainContainer">
          {window.location.pathname !== '/extras' && <Jumbotron />}
          {window.location.pathname !== '/extras' && <Navbar />}
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/applications" component={Applications} />
            <Route path="/campers" component={Campers} />
            <Route
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  itemArray={this.state.itemArray}
                  subtotal={this.state.subtotal}
                  shipping={this.state.shipping}
                  deleteItem={this.deleteItem}
                  changeQuantity={this.changeQuantity}
                  emptyCart={this.emptyCart}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/counselors" component={Counselors} />
            <Route path="/goldenticket" component={Goldenticket} />
            <Route path="/events" component={Events} />
            <Route path="/extras" component={Extras} />
            <Route path="/faq" component={Faq} />
            <Route path="/getinvolved" component={Getinvolved} />
            <Route path="/give" component={Give} />
            <Route path="/leaders" component={Leaders} />
            <Route path="/mission" component={Mission} />
            <Route path="/nurses" component={Nurses} />
            <Route path="/partners" component={Partners} />
            <Route path="/photos" component={Photos} />
            <Route
              path="/store"
              render={(props) => (
                <Store
                  {...props}
                  subtotal={this.state.subtotal}
                  incrementCart={this.incrementCart}
                />
              )}
            />
            <Route component={Home} />
          </Switch>
        </div>
        {window.location.pathname !== '/extras' && <Footer />}
      </BrowserRouter>
    );
  }
}

export default App;
