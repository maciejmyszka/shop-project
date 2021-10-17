import { AxiosResponse } from "axios";
import React, {useEffect, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { api } from "../api/api";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

const ProductForm = ({products, choosedProduct, setStatus, setChoosedProduct}: any) => {
  const [newName, setNewName] = useState<string>()
  const [categories, setCategories] = useState<AllCategories>([])
  const [choosedCategoryId, setChoosedCategoryId] = useState<any>()

  useEffect(() => {
    api.get(`/ajax/219/product_categories`)
      .then((response: AxiosResponse<any>) => setCategories(response.data.data))
  }, [])

  const editedProductId = products.filter((product:any) => product.name === choosedProduct)[0].id

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
      .then(response => setStatus(response.status))
    setChoosedProduct("")
  }

  const deleteProduct = (e:Event) => {
    e.preventDefault();
    api.delete(`/ajax/219/products/${editedProductId}`)
      .then(response => setStatus(response.status))
    setChoosedProduct("")
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Wpisz nową nazwę produktu</Form.Label>
        <Form.Control type="text" placeholder="Nowa nazwa produktu" value={newName} onChange={(e) => setNewName(e.target.value)} />
      </Form.Group>
      <p>Wybierz kategorię do której chcesz przypisać produkt</p>
      <select value={choosedCategoryId} onChange={(e) => setChoosedCategoryId(e.target.value)}>
        {categories.map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <div className="buttons-wrapper">
        <Button variant="success" type="submit" onClick={(e:any) => editProduct(e)}>
        Potwierdź
      </Button>
        <Button variant="danger" onClick={(e:any) => deleteProduct(e)}>Usuń</Button>
      </div>
    </Form>
  )
}

export default ProductForm;