import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import emailjs from "@emailjs/browser";

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
    let purchases = itemsArray.map(function(item) {
      return `${item['item']}: ${item['quantity']}`;
    });
    let templateParams = {
      message: purchases,
    };
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
              <Table className="table" id="checkout-table">
                <Thead>
                  <Tr className="font-weight-bold" id="last-row">
                    <Th>Product</Th>
                    <Th>Quantity</Th>
                    <Th className="text-right">Item Price</Th>
                    <Th className="text-right">Subtotal</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <TableRows
                    itemArray={this.props.itemArray}
                    changeQuantity={this.props.changeQuantity}
                    deleteItem={this.props.deleteItem}
                  />
                </Tbody>
              </Table>
              <p className="mr-2 text-right">
                <span className="font-weight-bold">Subotal:</span> $
                {this.props.subtotal}.00{" "}
              </p>
              <p className="mr-2 text-right">
                <span className="font-weight-bold">Shipping:</span> $
                {this.props.shipping}.00{" "}
              </p>
              <p className="mr-2 text-right">
                <span className="font-weight-bold">Total:</span> ${finalTotal}
                .00{" "}
              </p>
              <div className="row">
                <div className="col-md-6 text-center">
                  <button
                    id="emptyCart"
                    className="btn green-btn text-white mb-2 ml-1 float-md-left"
                    onClick={() => this.props.emptyCart()}
                  >
                    Empty Cart
                  </button>
                </div>
                <div className="col-md-6 text-center">
                  <Link
                    to="/store"
                    className="btn green-btn text-white mb-2 float-md-right"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-center"></div>
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
                        //send email here
                        emailjs
                          .send(
                            process.env.REACT_APP_EMAILJS_SERVICE_ID,
                            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                            templateParams,
                            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                          )
                          .then(
                            (result) => {
                              console.log(result.text);
                            },
                            (error) => {
                              console.log(error.text);
                            }
                          );
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
