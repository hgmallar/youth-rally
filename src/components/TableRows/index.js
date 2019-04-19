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
              className={`form-control ${result.storageName}-input`}
              type="text"
              placeholder={sessionStorage.getItem(result.storageName)}
            />
          </div>
          <a href="#" id={result.storageName}>
            <i className="fas fa-trash-alt my-auto" />
          </a>
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
