import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//First filterout items with a quantity > 0, them map out a row for each of those items.
function TableRows(props) {
  return props.itemArray
    .filter((item) => item.quantity > 0)
    .map((filteredItem) => (
      <tr key={filteredItem.id}>
        <td>{filteredItem.description}</td>
        <td>
          <div className="row">
            <div className="col-8">
              <input
                className={`form-control`}
                type="text"
                name={filteredItem.item}
                onChange={(e) => props.changeQuantity(filteredItem.item, filteredItem.quantity, filteredItem.price, e)}
                value={filteredItem.quantity}
              />
            </div>
            <FontAwesomeIcon
              className="my-auto trash-can"
              icon={faTrashAlt}
              onClick={() =>
                props.deleteItem(filteredItem.item, filteredItem.quantity, filteredItem.price)
              }
            />
          </div>
        </td>
        <td className="text-right">${filteredItem.price}.00</td>
        <td className="text-right">
          ${filteredItem.price * filteredItem.quantity}
          .00
        </td>
      </tr>
    ));
}

export default TableRows;

TableRows.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
