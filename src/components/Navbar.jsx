import Logo from "/logo-lg.png";
import Avatar from "/avatar.jpg"
import { Nav, NavItem, NavLink, Input, Button } from "reactstrap";
const Navbar = () => {
  return (
    <Nav className="d-flex align-items-center justify-content-between px-5 bg-white custom-navbar">
      <div className="d-flex align-items-center">
        <NavItem className="me-5">
          <NavLink href="#">
            <img src={Logo} height={60} width={120} />
          </NavLink>
        </NavItem>
        <NavItem>
          <div className="form-icon">
            <i className="ri-search-line"></i>
            <Input type="text" className="form-control form-control-icon border-0 py-2" placeholder="Search..." />
          </div>
        </NavItem>
      </div>
      <div className="d-flex align-items-center">
        <NavItem className="me-5">
          <Button className="text-white bg-dark d-flex align-items-cnter px-4">
            <i className="ri-shopping-cart-2-line me-2"></i>
            Checkout (200)
          </Button>
        </NavItem>
        <NavItem>
         <div className="d-flex align-items-center">
            <img src={Avatar} height={40} width={40} className="rounded-circle me-2"/>
            <div className="d-flex align-items-center">
                <span className="fw-600 me-2">User Admin</span>
                <i className="ri-arrow-down-s-line"></i>
            </div>
         </div>
        </NavItem>
      </div>
    </Nav>
  );
};
export default Navbar;
