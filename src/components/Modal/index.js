import React from "react";
import "./style.css";

function Modal(props) {
  const showHideStyle = props.show ? "block" : "none";
  return (
    <div className="modal" role="dialog" style={{ display: showHideStyle }}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{props.title}</h5>
          <button
            type="button text-white"
            className="close"
            onClick={props.handleClose}
            data-dismiss="modal"
            aria-label="Close"
          >
            <span className="white" aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h5>{props.message}</h5>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary text-white mb-2"
            onClick={props.handleClose}
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
