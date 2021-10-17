import React, { Dispatch} from "react";
import { Toast } from "react-bootstrap";

interface Props {
  setStatus: Dispatch<number>;
  status: number;
}

const Notification = ({setStatus, status}: Props) => {

  return (
    <Toast onClose={() => setStatus(0)} style={{display: status === 0 ? "none" : "block"}}>
      <Toast.Header>
        <strong className="me-auto">SUKCES</strong>
        <small>Przed chwilą</small>
      </Toast.Header>
      <Toast.Body>Operacja wykonana pomyślnie.</Toast.Body>
    </Toast>
  )
}

export default Notification;