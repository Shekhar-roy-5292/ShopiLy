import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import CategoryPage from "../pages/category/CategoryPage";
import SearchPage from "../pages/search/SearchPage";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      { path: "/categories/:categoryName", element: <CategoryPage />},
      { path: "/search", element: <SearchPage />},
      { path: "/shop", element: <ShopPage />},
      { path: "/shop/:id", element: <SingleProduct />},

    ],
  },
]);

export default router;
