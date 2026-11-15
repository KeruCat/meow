import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader.jsx";
import AdminFooter from "../AdminFooter/AdminFooter.jsx";
function AdminLayout() {
  return (
    <div >
        <AdminHeader />
      <main>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
}

export default AdminLayout;
