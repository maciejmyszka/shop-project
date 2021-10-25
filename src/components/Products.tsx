import React, { useEffect, useState } from "react";
import Product from "./Product";
import { api } from "../api/api";
import { AxiosResponse } from "axios";
import { Table } from "react-bootstrap";

interface SingleProduct {
  id: number;
  name: string;
  category_id: number;
}

interface ProductsList extends Array<SingleProduct> {}

const Products = () => {
  const [products, setProducts] = useState<ProductsList>([]);

  useEffect(() => {
    api.get(`/ajax/219/products`).then((response: AxiosResponse<any>) => {
      setProducts(response.data.data);
    });
  }, []);

  return (
    <div className="products-wrapper">
      <h1>Lista dostępnych produktów:</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th className="param">Nazwa</th>
            <th className="param">Kategoria</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: SingleProduct, index: number) => (
            <Product key={product.id} product={product} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
