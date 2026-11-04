import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
