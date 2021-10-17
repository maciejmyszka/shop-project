import React, { useState, useEffect } from 'react';
import { api } from "../api/api";
import { AxiosResponse } from "axios"
import ProductForm from './ProductForm';
import Notification from "./Notification";
import ErrorMessage from './ErrorMessage';

interface SingleProduct {
  id: number;
  name: string;
}

interface AllProducts extends Array<SingleProduct>{}

const EditProduct = () => {
  const [products, setProducts] = useState<AllProducts>([])
  const [choosedProduct, setChoosedProduct] = useState<string>()
  const [status, setStatus] = useState<number>(0)

  useEffect(() => {
    api.get(`/ajax/219/products`)
      .then((response: AxiosResponse<any>) => {
        setProducts(response.data.data)
      })
  }, [])

  return (
    <div className="edit-product-wrapper">
      <h1>Edycja produktu</h1>
      <p>Wybierz produkt, który chcesz edytować</p>
      <select 
        placeholder="Wybierz produkt" 
        value={choosedProduct} 
        onChange={e => setChoosedProduct(e.target.value)}
      >
        <option disabled hidden selected value="Produkty">Produkty</option>
        {products.map((product: SingleProduct) => (
          <option key={product.id} value={product.name}>{product.name}</option>
        ))}
      </select>
      {choosedProduct && (
        <ProductForm 
          products={products} 
          choosedProduct={choosedProduct} 
          setStatus={setStatus} 
          setChoosedProduct={setChoosedProduct}
        />
        )}
      {status === (200 || 201 || 202 || 203 || 204) ? <Notification setStatus={setStatus} status={status} /> : <ErrorMessage setStatus={setStatus} status={status} />}
    </div>
  )
}

export default EditProduct;