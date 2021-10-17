import React from "react";
import {Switch, Route} from "react-router-dom"
import AddProductCategory from "./AddProductCategory";
import Categories from "./Categories";
import EditCategory from "./EditCategory";
import EditProduct from "./EditProduct";
import Products from "./Products";


const Content = () => {
  return (
    <section>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/edit-category" component={EditCategory} />
        <Route path="/add-product-category" component={AddProductCategory} />
      </Switch>
    </section>
  )
}

export default Content;