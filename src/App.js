import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Jumbotron, Footer, Navbar } from "./Elements";
import {
  Applications,
  Callforleaders,
  Campers,
  Cart,
  Contact,
  Cost,
  Counselors,
  Events,
  Getinvolved,
  Give,
  Home,
  Message,
  Mission,
  Newsletters,
  Nurses,
  Partners,
  Photos,
  Resources,
  Sponsorship,
  Store,
  VirtualRally,
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
        {
          id: 0,
          item: "bracelets_yth",
          description: "Bracelets (Youth)",
          price: 3,
          quantity: parseInt(sessionStorage.getItem("bracelets_yth")) || 0,
        },
        {
          id: 1,
          item: "bracelets_adlt",
          description: "Bracelets (Adult)",
          price: 3,
          quantity: parseInt(sessionStorage.getItem("bracelets_adlt")) || 0,
        },
        {
          id: 2,
          item: "keychains",
          description: "Keychains",
          price: 4,
          quantity: parseInt(sessionStorage.getItem("keychains")) || 0,
        },
        {
          id: 3,
          item: "patches",
          description: "Patches",
          price: 4,
          quantity: parseInt(sessionStorage.getItem("patches")) || 0,
        },
        {
          id: 4,
          item: "blue_tshirts_yth_sm",
          description: "Blue Tshirts Youth Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_sm")) || 0,
        },
        {
          id: 5,
          item: "blue_tshirts_yth_md",
          description: "Blue Tshirts Youth Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_md")) || 0,
        },
        {
          id: 6,
          item: "blue_tshirts_yth_lg",
          description: "Blue Tshirts Youth Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_lg")) || 0,
        },
        {
          id: 7,
          item: "blue_tshirts_yth_xl",
          description: "Blue Tshirts Youth Extra Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_yth_xl")) || 0,
        },
        {
          id: 8,
          item: "blue_tshirts_adlt_sm",
          description: "Blue Tshirts Adult Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_sm")) || 0,
        },
        {
          id: 9,
          item: "blue_tshirts_adlt_md",
          description: "Blue Tshirts Adult Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_md")) || 0,
        },
        {
          id: 10,
          item: "blue_tshirts_adlt_lg",
          description: "Blue Tshirts Adult Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_lg")) || 0,
        },
        {
          id: 11,
          item: "blue_tshirts_adlt_xl",
          description: "Blue Tshirts Adult Extra Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_xl")) || 0,
        },
        {
          id: 12,
          item: "blue_tshirts_adlt_xxl",
          description: "Blue Tshirts Adult Extra Extra Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("blue_tshirts_adlt_xxl")) || 0,
        },
        {
          id: 13,
          item: "purp_tshirts_yth_sm",
          description: "Purple Tshirts Youth Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_sm")) || 0,
        },
        {
          id: 14,
          item: "purp_tshirts_yth_md",
          description: "Purple Tshirts Youth Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_md")) || 0,
        },
        {
          id: 15,
          item: "purp_tshirts_yth_lg",
          description: "Purple Tshirts Youth Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_lg")) || 0,
        },
        {
          id: 16,
          item: "purp_tshirts_yth_xl",
          description: "Purple Tshirts Youth Extra Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_yth_xl")) || 0,
        },
        {
          id: 17,
          item: "purp_tshirts_adlt_sm",
          description: "Purple Tshirts Adult Small",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_sm")) || 0,
        },
        {
          id: 18,
          item: "purp_tshirts_adlt_md",
          description: "Purple Tshirts Adult Medium",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_md")) || 0,
        },
        {
          id: 19,
          item: "purp_tshirts_adlt_lg",
          description: "Purple Tshirts Adult Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_lg")) || 0,
        },
        {
          id: 20,
          item: "purp_tshirts_adlt_xl",
          description: "Purple Tshirts Adult Extra Large",
          price: 20,
          quantity:
            parseInt(sessionStorage.getItem("purp_tshirts_adlt_xl")) || 0,
        },
        {
          id: 21,
          item: "purp_tshirts_adlt_xxl",
          description: "Purple Tshirts Adult Extra Extra Large",
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
        <Jumbotron />
        <Navbar />
        <Switch>
          <Route path="/applications" component={Applications} />
          <Route path="/callforleaders" component={Callforleaders} />
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
          <Route path="/cost" component={Cost} />
          <Route path="/counselors" component={Counselors} />
          <Route path="/events" component={Events} />
          <Route path="/getinvolved" component={Getinvolved} />
          <Route path="/give" component={Give} />
          <Route path="/message" component={Message} />
          <Route path="/mission" component={Mission} />
          <Route path="/newsletter" component={Newsletters} />
          <Route path="/nurses" component={Nurses} />
          <Route path="/partners" component={Partners} />
          <Route path="/photos" component={Photos} />
          <Route path="/resources" component={Resources} />
          <Route path="/sponsorship" component={Sponsorship} />
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
          <Route path="/virtualrally" component={VirtualRally} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
