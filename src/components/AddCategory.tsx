import React, { useState, Dispatch, MouseEvent, ChangeEvent } from "react";
import { Button } from "react-bootstrap";
import { api } from "../api/api";
import { AxiosResponse } from "axios";

interface Props {
  setStatus: Dispatch<number>;
  setActionType: Dispatch<string>;
}

const AddCategory = ({ setStatus, setActionType }: Props) => {
  const [newCategory, setNewCategory] = useState<string>();

  const onClickAddCategory = (e: Event) => {
    e.preventDefault();
    const newEl = {
      name: newCategory,
    };
    api
      .post(`/ajax/219/product_categories`, newEl)
      .then((response: AxiosResponse<any>) => setStatus(response.status));
    setActionType("");
  };

  return (
    <form>
      <p>Wpisz nazwę nowej kategorii</p>
      <input
        type="text"
        value={newCategory}
        onChange={(e: ChangeEvent<any>) => setNewCategory(e.target.value)}
        placeholder="Nowa kategoria"
        className="category-input"
      />
      <Button
        variant="success"
        onClick={(e: MouseEvent<HTMLElement>) => onClickAddCategory(e as any)}
      >
        Dodaj
      </Button>
    </form>
  );
};

export default AddCategory;
