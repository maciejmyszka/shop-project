import { AxiosResponse } from "axios";
import React, { useEffect, useState, Dispatch, MouseEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { api } from "../api/api";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

interface SingleProduct {
  id: number;
  name: string;
}

interface AllProducts extends Array<SingleProduct>{}

interface Props {
  products: AllProducts;
  choosedProduct: string;
  setStatus: Dispatch<number>;
  setChoosedProduct: Dispatch<string>;
}

const ProductForm = ({products, choosedProduct, setStatus, setChoosedProduct}: Props) => {
  const [newName, setNewName] = useState<string>()
  const [categories, setCategories] = useState<AllCategories>([])
  const [choosedCategoryId, setChoosedCategoryId] = useState<any>()

  useEffect(() => {
    api.get(`/ajax/219/product_categories`)
      .then((response: AxiosResponse<any>) => setCategories(response.data.data))
  }, [])

  const editedProductId = products.filter((product: SingleProduct) => product.name === choosedProduct)[0].id

  const editProduct = (e:Event) => {
    e.preventDefault()
    const newEl = {
      id: editedProductId,
      name: newName,
      recipe_amount: 1.00000,
      type: "BASIC",
      measure_type: "LITER",
      category_id: choosedCategoryId,
      tax_id: 4
    }
    api.put(`/ajax/219/products/${editedProductId}`, newEl)
      .then((response: AxiosResponse<any>) => setStatus(response.status))
    setChoosedProduct("")
  }

  const deleteProduct = (e:Event) => {
    e.preventDefault();
    api.delete(`/ajax/219/products/${editedProductId}`)
      .then((response: AxiosResponse<any>) => setStatus(response.status))
    setChoosedProduct("")
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wpisz nową nazwę produktu</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Nowa nazwa produktu" 
          value={newName} 
          onChange={e => setNewName(e.target.value)} 
        />
      </Form.Group>
      <p>Wybierz kategorię do której chcesz przypisać produkt</p>
      <select value={choosedCategoryId} onChange={e => setChoosedCategoryId(e.target.value)}>
      <option disabled hidden selected value="categories">Kategorie</option>
        {categories.map((category: SingleCategory) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <div className="buttons-wrapper">
        <Button disabled variant="success"  onClick={(e: MouseEvent<HTMLElement>) => editProduct(e as any)}>Potwierdź</Button>
        <Button variant="danger" onClick={(e: MouseEvent<HTMLElement>) => deleteProduct(e as any)}>Usuń</Button>
      </div>
    </Form>
  )
}

export default ProductForm;