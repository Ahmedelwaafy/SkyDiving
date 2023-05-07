import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div id="top"></div>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
