import React, { Dispatch } from "react";
import { Toast } from "react-bootstrap";

interface Props {
  setStatus: Dispatch<number>;
  status: number;
}

const ErrorMessage = ({setStatus, status}: Props) => {
  return (
    <Toast onClose={() => setStatus(0)} style={{display: status === 0 ? "none" : "block"}} className="failed">
      <Toast.Header>
        <strong className="me-auto">NIEPOWODZENIE</strong>
        <small>Przed chwilą</small>
      </Toast.Header>
      <Toast.Body>Ups, coś poszło nie tak.</Toast.Body>
    </Toast>
  )
}

export default ErrorMessage;