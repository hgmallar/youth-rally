import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

function PaypalModal(props) {
  return (
    <Modal show={props.show}  onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton={true}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{props.message}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="button"
            className="btn green-btn mb-2"
            onClick={props.handleClose}
            data-dismiss="modal"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default PaypalModal;

PaypalModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};