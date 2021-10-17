import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import { api } from "../api/api";

const CategoryForm = ({choosedCategory, categories, setChoosedCategory, setStatus}: any) => {
  const [newValue, setNewValue] = useState<string>()
  const editedId = categories.filter((category : any) => category.name === choosedCategory)[0].id

  const editedElement = {
    id: editedId,
    name: newValue
  }

  const editCategory = (e: Event) => {
    e.preventDefault();
    api.put(`/ajax/219/product_categories/${editedId}`, editedElement)
      .then(response => setStatus(response.status))
    setNewValue("")
    setChoosedCategory("")
  }

  const deleteCategory = (e: Event) => {
    e.preventDefault();
    api.delete(`/ajax/219/product_categories/${editedId}`)
    .then(response => setStatus(response.status))
    setNewValue("")
    setChoosedCategory("")
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wpisz nazwę nowej kategorii</Form.Label>
        <Form.Control type="text" placeholder="Nowa kategoria" value={newValue} onChange={(e) => setNewValue(e.target.value)}/>
      </Form.Group>
      <div className="buttons-wrapper">
        <Button variant="success" type="submit" onClick={(e:any) => editCategory(e)}>
        Potwierdź
        </Button>
        <Button variant="danger" onClick={(e:any) => deleteCategory(e)}>Usuń</Button>
      </div>
    </Form>
  )
}

export default CategoryForm;