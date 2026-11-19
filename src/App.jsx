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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPage />} />
          <Route path="equipment" element={<AdminEquipmentPage />} />
          <Route path="categories" element={<AdminCategoriesPage />} />
          <Route path="bookings" element={<AdminBookingsPage />} />
          <Route path="clients" element={<AdminClientsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;