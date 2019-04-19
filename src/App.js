import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

import "./App.css";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Callforleaders from "./pages/Callforleaders";
import Campers from "./pages/Campers";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Cost from "./pages/Cost";
import Counselors from "./pages/Counselors";
import Events from "./pages/Events";
import Getinvolved from "./pages/Getinvolved";
import Give from "./pages/Give";
import Message from "./pages/Message";
import Mission from "./pages/Mission";
import Newsletters from "./pages/Newsletters";
import Nurses from "./pages/Nurses";
import Partners from "./pages/Partners";
import Photos from "./pages/Photos";
import Resources from "./pages/Resources";
import Sponsorship from "./pages/Sponsorship";
import Store from "./pages/Store";

class App extends Component {
  state = {
    cartTotal: 0
  };

  componentDidMount() {
    let total = 0;
    if (sessionStorage.getItem("wristbands-youth")) {
      total += (3 * sessionStorage.getItem("wristbands-youth"));
    }
    if (sessionStorage.getItem("wristbands-adult")) {
      total += (3 * sessionStorage.getItem("wristbands-adult"));
    }
    if (sessionStorage.getItem("keychains")) {
      total += (4 * sessionStorage.getItem("keychains"));
    }
    if (sessionStorage.getItem("patches")) {
      total += (4 * sessionStorage.getItem("patches"));
    }
    if (sessionStorage.getItem("tshirts-youth-small")) {
      total += (15 * sessionStorage.getItem("tshirts-youth-small"));
    }
    if (sessionStorage.getItem("tshirts-youth-medium")) {
      total += (15 * sessionStorage.getItem("tshirts-youth-medium"));
    }
    if (sessionStorage.getItem("tshirts-youth-large")) {
      total += (15 * sessionStorage.getItem("tshirts-youth-large"));
    }
    if (sessionStorage.getItem("tshirts-youth-xtra")) {
      total += (15 * sessionStorage.getItem("tshirts-youth-xtra"));
    }
    if (sessionStorage.getItem("tshirts-adult-small")) {
      total += (20 * sessionStorage.getItem("tshirts-adult-small"));
    }
    this.setState({ cartTotal: total });
  }

  updateCartTotal = (newAmount) => {
    this.setState({cartTotal: newAmount});
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/applications" component={Applications} />
            <Route path="/callforleaders" component={Callforleaders} />
            <Route path="/campers" component={Campers} />
            <Route path="/cart" render={(props) => <Cart {...props} updateCartTotal={this.updateCartTotal} cartTotal={this.state.cartTotal} />} />
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
            <Route path="/store" render={(props) => <Store {...props} updateCartTotal={this.updateCartTotal} cartTotal={this.state.cartTotal} />} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
