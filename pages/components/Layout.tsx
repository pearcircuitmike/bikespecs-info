import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
