import React from "react";

export default () => (
  <div
    className="modal fade"
    id="myModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header purpleButton text-white">
          <h5 className="modal-title">Purchase Complete</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Thank you for making a purchase and supporting The Youth Rally!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
);
