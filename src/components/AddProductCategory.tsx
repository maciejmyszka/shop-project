import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { Button } from "react-bootstrap";
import { AxiosResponse } from "axios";
import AddProduct from "./AddProduct";
import AddCategory from "./AddCategory";
import Notification from "./Notification";
import ErrorMessage from "./ErrorMessage";

interface SingleCategory {
  id: number;
  name: string;
}

interface AllCategories extends Array<SingleCategory> {}

const AddProductCategory = () => {
  const [actionType, setActionType] = useState<string>("");
  const [categories, setCategories] = useState<AllCategories>([]);
  const [status, setStatus] = useState<number>(0);

  useEffect(() => {
    api
      .get(`/ajax/219/product_categories`)
      .then((response: AxiosResponse<any>) => {
        setCategories(response.data.data);
      });
  }, []);

  return (
    <div className="adding-wrapper">
      <h1>Co chcesz zrobić?</h1>
      <div className="buttons-wrapper">
        <Button variant="primary" onClick={() => setActionType("product")}>
          Dodać nowy produkt
        </Button>
        <Button variant="success" onClick={() => setActionType("category")}>
          Dodać nową kategorię
        </Button>
      </div>
      {actionType === "product" && (
        <AddProduct
          categories={categories}
          setStatus={setStatus}
          setActionType={setActionType}
        />
      )}
      {actionType === "category" && (
        <AddCategory setStatus={setStatus} setActionType={setActionType} />
      )}
      {status === (200 || 201 || 202 || 203 || 204) ? (
        <Notification setStatus={setStatus} status={status} />
      ) : (
        <ErrorMessage setStatus={setStatus} status={status} />
      )}
    </div>
  );
};

export default AddProductCategory;
