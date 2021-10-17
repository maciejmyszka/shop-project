import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { AxiosResponse } from 'axios';

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

const Product = ({product, index}: any) => {
  const [categories, setCategories] = useState<AllCategories>([])

  useEffect(() => {
    api.get(`/ajax/219/product_categories`).then((response :AxiosResponse<any>) => {
      setCategories(response.data.data)
    })
  }, [])

  const categoryName = categories.map(category => category.id === product.category_id ? <th key={product.id}>{category.name}</th> : null)

  return (
    <tr>
      <th>{index + 1}</th>
      <th>{product.name}</th>
      {categoryName}
    </tr>
  )
}

export default Product;