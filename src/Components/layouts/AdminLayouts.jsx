import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader.jsx";
import AdminSidebar from "../AdminSidebar/AdminSidebar.jsx";

function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <AdminHeader />

      <div className="flex flex-1 flex-col lg:flex-row">
        <AdminSidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;