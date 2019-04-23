import React from "react";

function TableRows(props) {
  let newArray = props.itemArray;
  return newArray.map(result => (
    <tr key={result.id}>
      <td>{result.productName}</td>
      <td>
        <div className="row">
          <div className="col-8">
            <input
              className={`form-control`}
              type="text"
              name={result.stateName}
              onChange={e => props.handleChange(e)}
              value={parseInt(props[result.stateName])}
            />
          </div>
          <i className="fas fa-trash-alt my-auto" onClick={e => props.deleteItem(result.storageName, result.price, e)} />
        </div>
      </td>
      <td className="text-right">${result.price}.00</td>
      <td className="text-right">
        ${result.price * parseInt(sessionStorage.getItem(result.storageName))}
        .00
      </td>
    </tr>
  ));
}

export default TableRows;
