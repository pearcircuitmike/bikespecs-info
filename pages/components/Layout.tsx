import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
