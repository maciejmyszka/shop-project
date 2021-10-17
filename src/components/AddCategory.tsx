import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { api } from "../api/api";

const AddCategory = ({setStatus, setActionType}:any) => {
  const [newCategory, setNewCategory] = useState<string>()

  const onClickAddCategory = (e:any) => {
    e.preventDefault();
    const newEl = {
      name: newCategory
    }
    api.post(`/ajax/219/product_categories`, newEl)
      .then(response => setStatus(response.status))
    setActionType("")
  }

  return (
    <form>
      <p>Wpisz nazwę nowej kategorii</p>
      <input type="text" value={newCategory} onChange={(e:any) => setNewCategory(e.target.value)} placeholder="Nowa kategoria" className="category-input" />
      <Button variant="success" onClick={(e:any) => onClickAddCategory(e)}>Dodaj</Button>{' '}
    </form>
  )
}

export default AddCategory;