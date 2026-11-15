import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/layouts/Layouts.jsx";
import AdminLayout from "./Components/layouts/AdminLayouts.jsx";
import HomePage from "./Pages/HomePage.jsx";
import EquipmentPage from "./Pages/EquipmentPage.jsx";
import EquipmentItemPage from "./Pages/EquipmentItemPage.jsx";
import BookingPage from "./Pages/BookingPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import RegisterPage from "./Pages/RegisterPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import AdminPage from "./Pages/AdminPage.jsx";
import AdminEquipmentPage from "./Pages/AdminEquipmentPage.jsx";
import AdminCategoriesPage from "./Pages/AdminCategoriesPage.jsx";
import AdminBookingsPage from "./Pages/AdminBookingsPage.jsx";
import AdminClientsPage from "./Pages/AdminClientsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/equipment" element={<EquipmentPage eyebrow="Каталог" title="Оборудование" />} />
          <Route path="/equipment/:id" element={<EquipmentItemPage />} />
          <Route path="/booking" element={<BookingPage eyebrow="Бронирование" title="Заявка на аренду" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/equipment" element={<AdminEquipmentPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />
          <Route path="/admin/bookings" element={<AdminBookingsPage />} />
          <Route path="/admin/clients" element={<AdminClientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;