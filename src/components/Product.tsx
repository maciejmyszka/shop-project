import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { AxiosResponse } from "axios";

interface SingleCategory {
  id: number;
  name: string;
}

interface SingleProduct {
  id: number;
  name: string;
  category_id: number;
}

interface Props {
  product: SingleProduct;
  index: number;
}

interface AllCategories extends Array<SingleCategory> {}

const Product = ({ product, index }: Props) => {
  const [categories, setCategories] = useState<AllCategories>([]);

  useEffect(() => {
    api
      .get(`/ajax/219/product_categories`)
      .then((response: AxiosResponse<any>) => {
        setCategories(response.data.data);
      });
  }, []);

  const categoryName = categories.map((category: SingleCategory) =>
    category.id === product.category_id ? (
      <th key={product.id}>{category.name}</th>
    ) : null
  );

  return (
    <tr>
      <th>{index + 1}</th>
      <th>{product.name}</th>
      {categoryName}
    </tr>
  );
};

export default Product;
