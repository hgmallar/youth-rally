import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

class Store extends Component {
  state = {
    braceletSize: "Size",
    tshirtSizeA: "Size",
    tshirtSizeB: "Size",
    dropdownBorderA: "no-border",
    dropdownBorderB: "no-border",
    dropdownBorderC: "no-border",
    errorMessage1: "",
    errorMessage2: "",
    errorMessage3: ""
  };

  updateBraceletOptions = (size, evt) => {
    evt.preventDefault();
    this.setState({
      dropdownBorderA: "no-border",
      braceletSize: size,
      errorMessage1: ""
    });
  };

  updateTshirtOptionsBlue = (size, evt) => {
    evt.preventDefault();
    this.setState({
      dropdownBorderB: "no-border",
      tshirtSizeA: size,
      errorMessage2: ""
    });
  };

  updateTshirtOptionsPurp = (size, evt) => {
    evt.preventDefault();
    this.setState({
      dropdownBorderC: "no-border",
      tshirtSizeB: size,
      errorMessage3: ""
    });
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
        this.setState({
          dropdownBorderA: "red-border",
          errorMessage1: "*Please Select Your Size*"
        });
      }
    } else if (itemType === "tshirt-blue") {
      if (this.state.tshirtSizeA === "Blue Youth Small $20") {
        this.addItemToCart("tshirts-youth-small-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Youth Medium $20") {
        this.addItemToCart("tshirts-youth-medium-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Youth Large $20") {
        this.addItemToCart("tshirts-youth-large-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Youth Extra Large $20") {
        this.addItemToCart("tshirts-youth-xtra-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Adult Small $20") {
        this.addItemToCart("tshirts-adult-small-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Adult Medium $20") {
        this.addItemToCart("tshirts-adult-medium-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Adult Large $20") {
        this.addItemToCart("tshirts-adult-large-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Adult Extra Large $20") {
        this.addItemToCart("tshirts-adult-xtra-blue", 20, evt);
      } else if (this.state.tshirtSizeA === "Blue Adult Extra Extra Large $20") {
        this.addItemToCart("tshirts-adult-xtra-xtra-blue", 20, evt);
      } else {
        this.setState({
          dropdownBorderB: "red-border",
          errorMessage2: "*Please Select Your Size*"
        });
      }
    } else if (itemType === "tshirt-purp") {
      if (this.state.tshirtSizeB === "Purple Youth Small $20") {
        this.addItemToCart("tshirts-youth-small-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Youth Medium $20") {
        this.addItemToCart("tshirts-youth-medium-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Youth Large $20") {
        this.addItemToCart("tshirts-youth-large-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Youth Extra Large $20") {
        this.addItemToCart("tshirts-youth-xtra-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Adult Small $20") {
        this.addItemToCart("tshirts-adult-small-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Adult Medium $20") {
        this.addItemToCart("tshirts-adult-medium-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Adult Large $20") {
        this.addItemToCart("tshirts-adult-large-purp", 20, evt);
      } else if (this.state.tshirtSizeB === "Purple Adult Extra Large $20") {
        this.addItemToCart("tshirts-adult-xtra-purp", 20, evt);
      } else if (
        this.state.tshirtSizeB === "Purple Adult Extra Extra Large $20"
      ) {
        this.addItemToCart("tshirts-adult-xtra-xtra-purp", 20, evt);
      } else {
        this.setState({
          dropdownBorderC: "red-border",
          errorMessage3: "*Please Select Your Size*"
        });
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
            <div className="col-md-3 m-1">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/blue_yr_shirt.jpg"
                  alt="Blue YR Tshirt"
                />
                <div className="card-body">
                  <h5 className="card-title">Youth Rally Blue T-Shirt</h5>
                  <h6>Price(USD): $20.00 </h6>
                  <p className="card-text">
                    Support Youth Rally with this fresh Unisex Youth Rally
                    T-Shirt! Front: I ain't ashamed of nothing on this body -
                    Butterball, Age 13; Back: youthrally.org
                  </p>
                  <div className="form row justify-content-center">
                    <form className="form-inline">
                      <div className="dropdown">
                        <button
                          className={`btn btn-primary text-white dropdown-toggle mb-2 ${
                            this.state.dropdownBorderB
                          }`}
                          type="button"
                          id="dropdownMenuButtonB"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="tshirt-selected-blue">
                            {this.state.tshirtSizeA}
                          </span>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButtonB"
                          id="tshirt-size-selection-blue"
                        >
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Youth Small $20",
                                e
                              )
                            }
                          >
                            Blue Youth Small $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Youth Medium $20",
                                e
                              )
                            }
                          >
                            Blue Youth Medium $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Youth Large $20",
                                e
                              )
                            }
                          >
                            Blue Youth Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Youth Extra Large $20",
                                e
                              )
                            }
                          >
                            Blue Youth Extra Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Adult Small $20",
                                e
                              )
                            }
                          >
                            Blue Adult Small $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Adult Medium $20",
                                e
                              )
                            }
                          >
                            Blue Adult Medium $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Adult Large $20",
                                e
                              )
                            }
                          >
                            Blue Adult Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Adult Extra Large $20",
                                e
                              )
                            }
                          >
                            Blue Adult Extra Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsBlue(
                                "Blue Adult Extra Extra Large $20",
                                e
                              )
                            }
                          >
                            Blue Adult Extra Extra Large $20
                          </button>
                        </div>
                      </div>
                    </form>

                    <button
                      className="btn btn-primary text-white mb-2 ml-1 float-left"
                      id="tshirt-btn-blue"
                      onClick={e => this.addSizedItemToCart("tshirt-blue", e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="red-text">{this.state.errorMessage2}</div>
                </div>
              </div>
            </div>

            <div className="col-md-3 m-1">
              <div className="card">
                <img
                  className="card-img-top store-image"
                  src="/assets/images/purp_yr_shirt.jpg"
                  alt="Purple YR Tshirt"
                />
                <div className="card-body">
                  <h5 className="card-title">Youth Rally Purple T-Shirt</h5>
                  <h6>Price(USD): $20.00 </h6>
                  <p className="card-text">
                    Support Youth Rally with this fresh new Unisex Youth Rally
                    T-Shirt! Front: There's A Camp For That? (with diagnoses
                    listed); Back: youthrally.org
                  </p>
                  <div className="form row justify-content-center">
                    <form className="form-inline">
                      <div className="dropdown">
                        <button
                          className={`btn btn-primary text-white dropdown-toggle mb-2 ${
                            this.state.dropdownBorderC
                          }`}
                          type="button"
                          id="dropdownMenuButtonC"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span id="tshirt-selected-purp">
                            {this.state.tshirtSizeB}
                          </span>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButtonC"
                          id="tshirt-size-selection-purp"
                        >
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Youth Small $20",
                                e
                              )
                            }
                          >
                            Purple Youth Small $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Youth Medium $20",
                                e
                              )
                            }
                          >
                            Purple Youth Medium $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Youth Large $20",
                                e
                              )
                            }
                          >
                            Purple Youth Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Youth Extra Large $20",
                                e
                              )
                            }
                          >
                            Purple Youth Extra Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Adult Small $20",
                                e
                              )
                            }
                          >
                            Purple Adult Small $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Adult Medium $20",
                                e
                              )
                            }
                          >
                            Purple Adult Medium $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Adult Large $20",
                                e
                              )
                            }
                          >
                            Purple Adult Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Adult Extra Large $20",
                                e
                              )
                            }
                          >
                            Purple Adult Extra Large $20
                          </button>
                          <button
                            className="dropdown-item dropdown-tshirt-size link-button"
                            href="#"
                            onClick={e =>
                              this.updateTshirtOptionsPurp(
                                "Purple Adult Extra Extra Large $20",
                                e
                              )
                            }
                          >
                            Purple Adult Extra Extra Large $20
                          </button>
                        </div>
                      </div>
                    </form>

                    <button
                      className="btn btn-primary text-white mb-2 ml-1 float-left"
                      id="tshirt-btn-purp"
                      onClick={e => this.addSizedItemToCart("tshirt-purp", e)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div className="red-text">{this.state.errorMessage3}</div>
                </div>
              </div>
            </div>

            <div className="col-md-3 m-1">
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
            <div className="col-md-3 m-1">
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
            <div className="col-md-3 m-1">
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
                          className={`btn btn-primary text-white dropdown-toggle mb-2 ${
                            this.state.dropdownBorderA
                          }`}
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
                  <div className="red-text">{this.state.errorMessage1}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/cart"
              className="btn btn-primary text-white mb-2 mx-auto purpleButton"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Store;
