import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader/AdminHeader";
import AdminFooter from "../AdminFooter/AdminFooter";
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
