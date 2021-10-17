import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {api} from "../api/api";

const AddProduct = ({categories, setStatus, setActionType}:any) => {
  const [newName, setNewName] = useState<string>("");
  const [choosedCategoryId, setChoosedCategoryId] = useState<any>();

  const onClickAddProduct = (e:any) => {
    e.preventDefault();
    const newEl = {
      name: newName,
      type: "BASIC",
      measure_type: "LITER",
      category_id: choosedCategoryId,
      tax_id: 4
    }
    api.post(`/ajax/219/products`, newEl)
      .then(response => setStatus(response.status))
    setActionType("")
  }

  return (
    <form>
      <p>Wpisz nazwę produktu</p>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nowa nazwa" />
      <p>Wybierz kategorię produktu</p>
      <select value={choosedCategoryId} onChange={(e:any) => setChoosedCategoryId(e.target.value)}>
          {categories.map((category:any) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
      </select>
      <Button variant="primary" onClick={(e) => onClickAddProduct(e)}>Dodaj</Button>{' '}
    </form>
  )
}

export default AddProduct;