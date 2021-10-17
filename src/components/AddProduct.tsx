import React, { useState, Dispatch, MouseEvent } from "react";
import { Button } from "react-bootstrap";
import { api } from "../api/api";
import { AxiosResponse } from "axios";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

interface Props {
  categories: AllCategories;
  setStatus: Dispatch<number>;
  setActionType: Dispatch<string>;
}

const AddProduct = ({categories, setStatus, setActionType}: Props) => {
  const [newName, setNewName] = useState<string>("");
  const [choosedCategoryId, setChoosedCategoryId] = useState<number>();

  const onClickAddProduct = (e:Event) => {
    e.preventDefault();
    const newEl = {
      name: newName,
      type: "BASIC",
      measure_type: "LITER",
      category_id: choosedCategoryId,
      tax_id: 4
    }
    api.post(`/ajax/219/products`, newEl)
      .then((response: AxiosResponse<any>) => setStatus(response.status))
    setActionType("")
  }

  return (
    <form>
      <p>Wpisz nazwę produktu</p>
      <input 
        type="text" 
        value={newName} 
        onChange={(e) => setNewName(e.target.value)} 
        placeholder="Nowa nazwa" 
      />
      <p>Wybierz kategorię produktu</p>
      <select value={choosedCategoryId} onChange={(e: any) => setChoosedCategoryId(e.target.value)}>
          {categories.map((category: SingleCategory) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
      </select>
      <Button variant="primary" onClick={(e: MouseEvent<HTMLElement>) => onClickAddProduct(e as any)}>Dodaj</Button>
    </form>
  )
}

export default AddProduct;