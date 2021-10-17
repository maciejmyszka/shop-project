import { AxiosResponse } from 'axios';
import React, {useEffect, useState} from 'react';
import {api} from "../api/api";
import CategoryForm from './CategoryForm';
import Notification from "./Notification";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

const EditCategory = () => {
  const [categories, setCategories] = useState<AllCategories>([])
  const [choosedCategory, setChoosedCategory] = useState<any>()
  const [status, setStatus] = useState<number>(0)

  useEffect(() => {
    api.get(`/ajax/219/product_categories`).then((response:AxiosResponse<any>) => {
      setCategories(response.data.data)
    })
  }, [])

  console.log(status);

  return (
    <div className="edit-category-wrapper">
      <h1>Edycja kategorii</h1>
      <p>Wybierz kategorię, którą chcesz edytować</p>
      <select placeholder="Wybierz kategorię" value={choosedCategory} onChange={(e) => setChoosedCategory(e.target.value)}>
        <option disabled hidden selected value="Kategorie">Kategorie</option>
        {categories.map((category: SingleCategory) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>))}
      </select>
      {choosedCategory && <CategoryForm choosedCategory={choosedCategory} categories={categories} setChoosedCategory={setChoosedCategory} setStatus={setStatus} />}
      {(status === 200 || status === 204) && <Notification setStatus={setStatus} />}
    </div>
  )
}

export default EditCategory;