import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <article className = "flex flex-col items-center justify-center">
        <Navbar />
        <Outlet />
        <Footer />
      </article>
    </>
  );
}

export default Layout;
