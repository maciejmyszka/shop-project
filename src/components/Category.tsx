import React from "react";
import { ListGroup } from "react-bootstrap";


const Category = ({name}:{name: string}) => {
  return (
    <ListGroup.Item>{name}</ListGroup.Item>
  )
}

export default Category;