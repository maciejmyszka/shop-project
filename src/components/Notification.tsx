import React from "react";
import {Toast} from "react-bootstrap";

const Notification = ({setStatus}: any) => {

  return (
    <Toast onClose={() => setStatus(0)}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">SUKCES</strong>
          <small>Przed chwilą</small>
        </Toast.Header>
        <Toast.Body>Operacja wykonana pomyślnie.</Toast.Body>
      </Toast>
  )
}

export default Notification;