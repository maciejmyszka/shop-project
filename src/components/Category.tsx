import React from "react";
import { ListGroup } from "react-bootstrap";

const Category = ({category} : any) => {
  return (
    <ListGroup.Item>{category.name}</ListGroup.Item>
  )
}

export default Category;