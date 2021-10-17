import React, { useState, useEffect } from 'react';
import { api } from "../api/api";
import { AxiosResponse } from "axios"
import ProductForm from './ProductForm';
import Notification from "./Notification";

interface SingleProduct {
  id: number;
  name: string;
}

interface AllProducts extends Array<SingleProduct>{}

const EditProduct = () => {
  const [products, setProducts] = useState<AllProducts>([])
  const [choosedProduct, setChoosedProduct] = useState<any>()
  const [status, setStatus] = useState<number>(0)

  useEffect(() => {
    api.get(`/ajax/219/products`).then((response:AxiosResponse<any>) => {
      setProducts(response.data.data)
    })
  }, [])

  return (
    <div className="edit-product-wrapper">
      <h1>Edycja produktu</h1>
      <p>Wybierz produkt, który chcesz edytować</p>
      <select placeholder="Wybierz produkt" value={choosedProduct} onChange={(e) => setChoosedProduct(e.target.value)}>
        <option disabled hidden value="Produkty" selected>Produkty</option>
        {products.map((product) => (
          <option key={product.id} value={product.name}>{product.name}</option>
        ))}
      </select>
      {choosedProduct && <ProductForm products={products} choosedProduct={choosedProduct} setStatus={setStatus} setChoosedProduct={setChoosedProduct} type="product" />}
      {(status === 200 || status === 204) && <Notification setStatus={setStatus} />}
    </div>
  )
}

export default EditProduct;