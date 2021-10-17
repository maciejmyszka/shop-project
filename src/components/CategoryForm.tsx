import { AxiosResponse } from "axios";
import React, { useState, Dispatch, MouseEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { api } from "../api/api";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

interface Props {
  choosedCategory: string;
  categories: AllCategories;
  setChoosedCategory: Dispatch<string>;
  setStatus: Dispatch<number>;
}

const CategoryForm = ({choosedCategory, categories, setChoosedCategory, setStatus}: Props) => {
  const [newValue, setNewValue] = useState<string>()
  const editedId = categories.filter((category: SingleCategory) => category.name === choosedCategory)[0].id

  const editCategory = (e: Event) => {
    e.preventDefault();
    const editedElement = {
      id: editedId,
      name: newValue
    }
    api.put(`/ajax/219/product_categories/${editedId}`, editedElement)
      .then((response: AxiosResponse<any>) => setStatus(response.status))
    setNewValue("")
    setChoosedCategory("")
  }

  const deleteCategory = (e: Event) => {
    e.preventDefault();
    api.delete(`/ajax/219/product_categories/${editedId}`)
      .then((response: AxiosResponse<any>) => setStatus(response.status))
    setNewValue("")
    setChoosedCategory("")
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wpisz nazwę nowej kategorii</Form.Label>
        <Form.Control type="text" placeholder="Nowa kategoria" value={newValue} onChange={e => setNewValue(e.target.value)}/>
      </Form.Group>
      <div className="buttons-wrapper">
        <Button variant="success"  onClick={(e: MouseEvent<HTMLElement>) => editCategory(e as any)}>Potwierdź</Button>
        <Button variant="danger" onClick={(e: MouseEvent<HTMLElement>) => deleteCategory(e as any)}>Usuń</Button>
      </div>
    </Form>
  )
}

export default CategoryForm;