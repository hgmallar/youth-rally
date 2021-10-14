import React from "react";
import { Tr, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//First filterout items with a quantity > 0, them map out a row for each of those items.
function TableRows(props) {
  return props.itemArray
    .filter((item) => item.quantity > 0)
    .map((filteredItem) => (
      <Tr key={filteredItem.id}>
        <Td>{filteredItem.name}</Td>
        <Td>
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
        </Td>
        <Td className="text-right">${filteredItem.price}.00</Td>
        <Td className="text-right">
          ${filteredItem.price * filteredItem.quantity}
          .00
        </Td>
      </Tr>
    ));
}

export default TableRows;

TableRows.propTypes = {
  itemArray: PropTypes.arrayOf(
    PropTypes.shape({
      unit_amount: PropTypes.shape({
        currency_code: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      item: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,

    }).isRequired
  ).isRequired,
};
