import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card, CardBody } from "reactstrap";
const Layout = () => {
  return (
    <Card className="my-2">
      <Navigation />
      <CardBody>
        <Outlet />
      </CardBody>
      <Footer />
    </Card>
  );
};
export default Layout;
