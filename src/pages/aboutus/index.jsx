import { useState } from "react";
import { Row, Col } from "reactstrap";
import Tabs from "../../components/tabs";
import Logo from "/logo-sm.png";
import ContactsCard from "../../components/aboutus/ContactsCard";
import AddressCard from "../../components/aboutus/AddressCard";
import HoursOfOperationCard from "../../components/aboutus/HoursOfOperationCard";
import SocialMediaLinksCard from "../../components/aboutus/SocialMediaLinksCard";
import StatementCard from "../../components/aboutus/StatementCard";
import SidePopup from '../../components/aboutus/SidePopup';
import { tabOptions } from "./helper";
const AboutUs = () => {
  const [isSidePopupOpen, setIsSidePopupOpen] = useState(false);
  const [activeTabId, setActiveTabId] = useState("info");

  const toggleSidePopup = () => setIsSidePopupOpen(prev => !prev);
  return (
    <div className="p-4 bg-white rounded">
      <h2 className="mb-4">About Us</h2>
      <div className="d-flex align-items-start mb-3">
        <img src={Logo} width={80} height={80} />
        <div className="d-flex flex-column justify-content-between ms-2 me-3">
          <span className="fs-4 fw-bold">A.T. Inks</span>
          <span className="fs-4 fw-medium text-gray">Digital Inks</span>
        </div>
        <div className="h-100 start d-flex align-items-center pt-2">
          <i className="ri-checkbox-circle-fill text-gray fs-5 me-2"></i>
          <a className="text-primary" href="#">
            Verify Company
          </a>
        </div>
      </div>
      <div className="d-flex align-items-start w-60">
        <p className="me-4 fs-5 about-us-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus
        </p>
        <i className="ri-pencil-fill text-red fs-4"></i>
      </div>
      <Tabs tabOptions={tabOptions} activeTabId={activeTabId} />
      <Row className="mt-4">
        <Col xs="4" className="mb-3">
          <ContactsCard toggleSidePopup={toggleSidePopup}/>
        </Col>
        <Col xs="4" className="mb-3">
          <AddressCard />
        </Col>
        <Col xs="4" className="mb-3">
          <HoursOfOperationCard />
        </Col>
        <Col xs="4">
          <SocialMediaLinksCard />
        </Col>
        <Col xs="4">
          <StatementCard />
        </Col>
      </Row>
      <SidePopup isOpen={isSidePopupOpen} toggle={toggleSidePopup}/>
    </div>
  );
};
export default AboutUs;
