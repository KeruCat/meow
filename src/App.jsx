import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layouts";
import AdminLayout from "./Components/layouts/AdminLayouts";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminPage from "./Pages/AdminPage";
import AdminProductsPage from "./Pages/AdminProductsPage";
import AdminCategoriesPage from "./Pages/AdminCategoriesPage";
import AdminOrdersPage from "./Pages/AdminOrdersPage";
import AdminUsersPage from "./Pages/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage eyebrow="Каталог" title="Товары" />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage eyebrow="Корзина" title="Ваши товары" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;