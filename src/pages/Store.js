import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

class Store extends Component {
  state = {
    braceletSize: "Size",
    tshirtSize: "Size",
    dropdownBorderA: "no-border",
    dropdownBorderB: "no-border"
  };

  updateBraceletOptions = (size, evt) => {
    evt.preventDefault();
    this.setState({ dropdownBorderA: "no-border", braceletSize: size });
  };

  updateTshirtOptions = (size, evt) => {
    evt.preventDefault();
    this.setState({ dropdownBorderB: "no-border", tshirtSize: size });
  };

  addItemToCart(itemName, price, evt) {
    evt.preventDefault();
    let quantity = 0;
    //update the quantity in storage and update the total
    if (sessionStorage.getItem(itemName)) {
      quantity = parseInt(sessionStorage.getItem(itemName));
    }
    quantity += 1;
    let newTotal = this.props.cartTotal;
    newTotal += price;
    this.props.updateCartTotal(newTotal);
    sessionStorage.setItem(itemName, quantity);
  }

  addSizedItemToCart(itemType, evt) {
    evt.preventDefault();
    if (itemType === "wristband") {
      if (this.state.braceletSize === "Youth") {
        this.addItemToCart("wristbands-youth", 3, evt);
      } else if (this.state.braceletSize === "Adult") {
        this.addItemToCart("wristbands-adult", 3, evt);
      } else {
        this.setState({dropdownBorderA: "red-border"});
      }
    } else if (itemType === "tshirt") {
      if (this.state.tshirtSize === "Youth Small $15") {
        this.addItemToCart("tshirts-youth-small", 15, evt);
      } else if (this.state.tshirtSize === "Youth Medium $15") {
        this.addItemToCart("tshirts-youth-medium", 15, evt);
      } else if (this.state.tshirtSize === "Youth Large $15") {
        this.addItemToCart("tshirts-youth-large", 15, evt);
      } else if (this.state.tshirtSize === "Youth Extra Large $15") {
        this.addItemToCart("tshirts-youth-xtra", 15, evt);
      } else if (this.state.tshirtSize === "Adult Small $20") {
        this.addItemToCart("tshirts-adult-small", 20, evt);
      } else {
        this.setState({dropdownBorderB: "red-border"});
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        
        <Header title="Store" />

        <div className="container-fluid mx-auto">
          {this.props.cartTotal ? (
            <Link to="/cart">
              <div className="shopping-cart text-right">
                <i className="fas fa-shopping-cart fa-2x my-1" id="cart-img" />
                <div className="caption purpleText">
                  <p id="total" className="font-weight-bold">
                    ${this.props.cartTotal}
                  </p>
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/YR_-_bracelet.jpg"
                  alt="YR bracelet"
                />
                <div className="card-body">
                  <h5 className="card-title">Wristband</h5>
                  <h6>Price(USD): $3.00 </h6>
                  <p className="card-text">
                    "YOU ARE NOT ALONE" - wear your Rally family with you
                    year-round. This original white Rally wristband glows green
                    in the dark!
                  </p>

                  <div className="form row justify-content-center">
                    <form className="form-inline">
                      <div className="dropdown">
                        <button
                          className={`btn btn-primary text-white dropdown-toggle mb-2 ${this.state.dropdownBorderA}`}
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="bracelet-selected">
                            {this.state.braceletSize}
                          </span>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <button
                            className="dropdown-item dropdown-bracelet-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateBraceletOptions("Youth", e)
                            }
                          >
                            Youth
                          </button>
                          <button
                            className="dropdown-item dropdown-bracelet-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateBraceletOptions("Adult", e)
                            }
                          >
                            Adult
                          </button>
                        </div>
                      </div>
                    </form>

                    <button
                      className="btn btn-primary text-white ml-1 mb-2"
                      id="wristband-btn"
                      onClick={e => this.addSizedItemToCart("wristband", e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/20150924_150546.jpg"
                  alt="YR keychain"
                />
                <div className="card-body">
                  <h5 className="card-title">Keychain</h5>
                  <h6>Price(USD): $4.00 </h6>
                  <p className="card-text">
                    Find your keys quickly with this Youth Rally "YOU ARE NOT
                    ALONE" glow in the dark keychain.
                  </p>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-primary text-white mb-2 float-left"
                      id="keychain-btn"
                      onClick={e => this.addItemToCart("keychains", 4, e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/patch.jpg"
                  alt="YR Patch"
                />
                <div className="card-body">
                  <h5 className="card-title">Patch</h5>
                  <h6>Price(USD): $4.00 </h6>
                  <p className="card-text">
                    Personalize your own Youth Rally gear with this "YOU ARE NOT
                    ALONE" embroidered patch. 3 inch by 3 inch square patch.
                  </p>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-primary text-white mb-2 float-left"
                      id="patch-btn"
                      onClick={e => this.addItemToCart("patches", 4, e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/frontback.png"
                  alt="YR Tshirts"
                />
                <div className="card-body">
                  <h5 className="card-title">Youth Rally T-Shirt</h5>
                  <h6>Price(USD): $15.00/$20.00 </h6>
                  <p className="card-text">
                    Contact{" "}
                    <span className="greenText">
                      <a href="mailto:info@youthrally.org">
                        info@youthrally.org
                      </a>
                    </span>
                    for sizes/availability. Unisex Youth Rally T-Shirt in
                    electric blue! Front: I ain't ashamed of nothing on this
                    body - "Butterball", Age 13; Back: youthrally.org Support
                    Youth Rally with this fresh new t-shirt!{" "}
                  </p>

                  <div className="form row justify-content-center">
                    <form className="form-inline">
                      <div className="dropdown">
                        <button
                          className={`btn btn-primary text-white dropdown-toggle mb-2 ${this.state.dropdownBorderB}`}
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="tshirt-selected">
                            {this.state.tshirtSize}
                          </span>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          id="tshirt-size-selection"
                        >
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptions("Youth Small $15", e)
                            }
                          >
                            Youth Small $15
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptions("Youth Medium $15", e)
                            }
                          >
                            Youth Medium $15
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptions("Youth Large $15", e)
                            }
                          >
                            Youth Large $15
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptions(
                                "Youth Extra Large $15",
                                e
                              )
                            }
                          >
                            Youth Extra Large $15
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptions("Adult Small $20", e)
                            }
                          >
                            Adult Small $20
                          </button>
                        </div>
                      </div>
                    </form>

                    <button
                      className="btn btn-primary text-white mb-2 ml-1 float-left"
                      id="tshirt-btn"
                      onClick={e => this.addSizedItemToCart("tshirt", e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
          <Link to="/cart" className="btn btn-primary text-white mb-2 mx-auto purpleButton">
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
