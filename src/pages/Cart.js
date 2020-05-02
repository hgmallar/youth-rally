import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaypalExpressBtn from "react-paypal-express-checkout";

import PaypalModal from "../components/PaypalModal";
import Header from "./../components/Header";
import TableRows from "../components/TableRows";

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
    let finalTotal = this.props.shipping + this.props.subtotal
    let env = "production";
    const client = {
      sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
      production: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
    };
    console.log(client);
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);
      this.setState({
        show: true,
        title: "Payment Successful",
        message: `The payment was successful. Thank you ${payment.address.recipient_name} for your payment!`,
      });
      sessionStorage.clear();
      this.props.updateCartTotal(0);
      this.createArray();
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      this.setState({
        show: true,
        title: "Payment Cancelled",
        message: `The payment was cancelled!`,
      });
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    return (
      <div>
        <PaypalModal
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          message={this.state.message}
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
                      itemArray = {this.props.itemArray}
                      changeQuantity = {this.props.changeQuantity}
                      deleteItem = {this.props.deleteItem}
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
                    <td className="text-right">
                      {" "}
                      ${this.props.shipping}.00{" "}
                    </td>
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
                    <PaypalExpressBtn
                      env={env}
                      client={client}
                      currency={"USD"}
                      total={finalTotal}
                      onError={onError}
                      onSuccess={onSuccess}
                      onCancel={onCancel}
                      paymentOptions={{
                        redirect_urls: {
                          cancel_url: "https://youthrally.org/cart",
                        },
                        transactions: [
                          {
                            amount: {
                              total: finalTotal,
                              currency: "USD",
                              details: {
                                subtotal: this.props.cartTotal,
                                tax: "0.00",
                                shipping: this.props.shippingCharge,
                                handling_fee: "0.00",
                                shipping_discount: "0.00",
                                insurance: "0.00",
                              },
                            },
                            description: "Youth Rally Store Order.",
                            payment_options: {
                              allowed_payment_method: "INSTANT_FUNDING_SOURCE",
                            },
                            item_list: {
                              items: this.state.itemArray,
                            },
                          },
                        ],
                        note_to_payer:
                          "Contact info@youthrally.org for any questions on your order.",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
