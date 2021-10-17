import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { api } from "../api/api";
import CategoryForm from './CategoryForm';
import ErrorMessage from './ErrorMessage';
import Notification from "./Notification";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory>{}

const EditCategory = () => {
  const [categories, setCategories] = useState<AllCategories>([])
  const [choosedCategory, setChoosedCategory] = useState<string>()
  const [status, setStatus] = useState<number>(0)

  useEffect(() => {
    api.get(`/ajax/219/product_categories`)
      .then((response:AxiosResponse<any>) => {
        setCategories(response.data.data)
      })
  }, [])

  return (
    <div className="edit-category-wrapper">
      <h1>Edycja kategorii</h1>
      <p>Wybierz kategorię, którą chcesz edytować</p>
      <select placeholder="Wybierz kategorię" value={choosedCategory} onChange={e => setChoosedCategory(e.target.value)}>
        <option disabled hidden selected value="Kategorie">Kategorie</option>
        {categories.map((category: SingleCategory) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>))}
      </select>
      {choosedCategory && (
        <CategoryForm 
          choosedCategory={choosedCategory} 
          categories={categories} 
          setChoosedCategory={setChoosedCategory} 
          setStatus={setStatus} 
        />
      )}
      {status === (200 || 201 || 202 || 203 || 204) ? <Notification setStatus={setStatus} status={status} /> : <ErrorMessage setStatus={setStatus} status={status} />}
    </div>
  )
}

export default EditCategory;