import React from "react";
import { Switch, Route } from "react-router-dom"
import AddProductCategory from "./AddProductCategory";
import Categories from "./Categories";
import EditCategory from "./EditCategory";
import EditProduct from "./EditProduct";
import Home from "./Home";
import Products from "./Products";
import ErrorPage from "./ErrorPage";


const Content = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/categories" component={Categories} />
        <Route path="/edit-product" component={EditProduct} />
        <Route path="/edit-category" component={EditCategory} />
        <Route path="/add-product-category" component={AddProductCategory} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </section>
  )
}

export default Content;