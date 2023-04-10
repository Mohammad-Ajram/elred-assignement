import { useState } from "react";
import {Button} from "reactstrap"
import Logo from "/logo-sm.png";
import { menuItems } from "./helper";
const Sidebar = () => {
    const [activeId, setActiveId] = useState(7);
  return (
    <div className="sidebar w-100 bg-white px-4 pt-4 pb-3 rounded">
      <div className="d-flex align-items-center mb-4">
        <img src={Logo} height={40} width={40} />
        <span className="fw-bold ms-3">A.T. Inks</span>
      </div>
      <div className="d-flex flex-column">
        {menuItems.map((item) => (
          <div key={item.id} className={`d-flex align-items-center mb-1 ${item.id === activeId ? "active-item" : "text-gray"} rounded p-2 show-cursor-pointer`}>
            {item.icon}
            <span className="ms-4">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="d-flex flex-column align-items-center border rounded p-2 pb-3 mt-2">
        <i className="ri-questionnaire-fill fs-2 text-gray mb-1"></i>
        <div className="fw-bold mb-3">Need Help?</div>
        <div className="text-center mb-3">Our support team is at your disposal.</div>
        <Button className="text-white bg-dark px-4">Get Help</Button>
      </div>
    </div>
  );
};
export default Sidebar;
