import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Dropdown, Form } from "react-bootstrap";

import AddToCart from "./../AddToCart";

class SizedItemCard extends Component {
  constructor(props) {
    super(props);
    this.checkSize = this.checkSize.bind(this);
    this.state = {
      dropdownDisp: "Size",
      storageSize: "",
      redBorder: false,
    };
  }

  checkSize() {
    if (this.state.dropdownDisp === "Size") {
      this.setState({ redBorder: true });
      return true;
    } else {
      this.setState({ redBorder: false });
      return false;
    }
  }

  render() {
    let borderClass = "green-btn";
    if (this.state.redBorder) {
      borderClass += " red-border";
    }
    return (
      <div className="col-md-3 m-1">
        <Card>
          <Card.Img
            variant="top"
            className="store-image"
            src={this.props.imageSource}
            alt={this.props.imageAlt}
          />

          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Subtitle>Price(USD): ${this.props.price} </Card.Subtitle>
            <Card.Text>{this.props.text}</Card.Text>
            <Form>
              <Dropdown className="mb-2">
                <Dropdown.Toggle id="dropdown-basic" className={borderClass}>
                  {this.state.dropdownDisp}
                </Dropdown.Toggle>
                <Dropdown.Menu className="green-btn">
                  {this.props.sizes.map((size) => (
                    <Dropdown.Item
                      key={size.id}
                      className="green-btn"
                      onSelect={() => {
                        this.setState({
                          dropdownDisp: size.title,
                          storageSize: this.props.baseName + "_" + size.size,
                          redBorder: false,
                        });
                      }}
                    >
                      {size.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <AddToCart
                price={this.props.price}
                incrementCart={this.props.incrementCart}
                sizedItem={true}
                checkSize={this.checkSize}
                baseName={this.state.storageSize}
              />
            </Form>
            {this.state.redBorder && (
              <Card.Text className="mt-2 red-text">
                *Please Select Your Size*
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SizedItemCard;

SizedItemCard.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  baseName: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
