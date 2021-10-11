import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";

import { Header, PaypalModal, TableRows } from "./../Elements";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      title: "",
      message: "",
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    let finalTotal = this.props.shipping + this.props.subtotal;
    let itemsArray = this.props.itemArray.filter((item) => item.quantity > 0);
    console.log(itemsArray);
    return (
      <Fragment>
        <PaypalModal
          show={this.state.show}
          title={this.state.title}
          message={this.state.message}
          handleClose={this.handleClose}
        />

        <Header title="Shopping Cart" />

        <div id="content">
          <div className="row">
            <div className="col-md-10 mx-auto pt-2 pb-1">
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
                    itemArray={this.props.itemArray}
                    changeQuantity={this.props.changeQuantity}
                    deleteItem={this.props.deleteItem}
                  />
                  <tr>
                    <td />
                    <td />
                    <td className="font-weight-bold text-right">Subotal:</td>
                    <td className="text-right"> ${this.props.subtotal}.00 </td>
                  </tr>
                  <tr>
                    <td />
                    <td />
                    <td className="font-weight-bold text-right">Shipping:</td>
                    <td className="text-right"> ${this.props.shipping}.00 </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        id="emptyCart"
                        className="btn green-btn text-white mb-2 ml-1 float-left"
                        onClick={() => this.props.emptyCart()}
                      >
                        Empty Cart
                      </button>
                    </td>
                    <td />
                    <td className="font-weight-bold text-right">Total:</td>
                    <td className="text-right">${finalTotal}.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="row">
                <div className="col-md-6 text-center">
                  <Link
                    to="/store"
                    className="btn green-btn text-white mb-2 float-md-left"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="col-md-6 text-center">
                  <div className="mb-2 float-md-right">
                    <PayPalButton
                      amount={finalTotal}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [
                            {
                              amount: {
                                value: finalTotal,
                                currency_code: "USD",
                                breakdown: {
                                  item_total: {
                                    currency_code: "USD",
                                    value: this.props.subtotal,
                                  },
                                  shipping: {
                                    currency_code: "USD",
                                    value: this.props.shipping,
                                  },
                                },
                              },
                              items: itemsArray,
                            },
                          ],
                        });
                      }}
                      onApprove={(data, actions) => {
                        return actions.order.capture().then(function (details) {
                          // OPTIONAL: Call your server to save the transaction
                          return fetch("/paypal-transaction-complete", {
                            method: "post",
                            body: JSON.stringify({
                              orderId: data.orderID,
                            }),
                          });
                        });
                      }}
                      onSuccess={(details, data) => {
                        console.log("The payment succeeded!");
                        this.setState({
                          show: true,
                          title: "Payment Successful",
                          message: `The payment was successful. Thank you ${details.payer.name.given_name} for your payment!`,
                        });
                        this.props.emptyCart();
                      }}
                      onCancel={(data) => {
                        // User pressed "cancel" or close Paypal's popup!
                        console.log("The payment was cancelled!", data);
                        this.setState({
                          show: true,
                          title: "Payment Cancelled",
                          message: `The payment was cancelled!`,
                        });
                      }}
                      options={{
                        //clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
                        clientId:
                          process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
                        currency: "USD",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Cart;
