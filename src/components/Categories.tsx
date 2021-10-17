import React, {useState, useEffect} from 'react';
import {api} from "../api/api";
import { AxiosResponse } from 'axios';
import Category from './Category';
import {ListGroup} from "react-bootstrap";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

const Categories = () => {
  const [categories, setCategories] = useState<AllCategories>([])

  useEffect(() => {
    api.get(`/ajax/219/product_categories`).then((response :AxiosResponse<any>) => {
      setCategories(response.data.data)
    })
  }, [])

  return (
    <div className="categories-wrapper">
      <h1>Kategorie produktów:</h1>
      <ListGroup variant="flush">
        {categories.map((category: SingleCategory) => <Category key={category.id} category={category} />)}
      </ListGroup>
    </div>
  )
}

export default Categories;
