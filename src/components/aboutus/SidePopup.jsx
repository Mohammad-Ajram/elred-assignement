import { useState, useEffect } from "react";
import { Offcanvas, OffcanvasBody, Button } from "reactstrap";
import EditAllContacts from "./EditAllContacts";
import EditSingleContact from "./EditSingleContact"

const SidePopup = ({ isOpen, toggle }) => {
  const [editMode, setEditMode] = useState("multiple");

  const setMultipleEditMode = () => setEditMode("multiple");
  const setSingleEditMode = () => setEditMode("single");

  useEffect(() => {
    if(!isOpen) setMultipleEditMode();
  }, [isOpen])

  return (
    <Offcanvas isOpen={isOpen} direction="end" toggle={toggle} className="popup-cont">
      <OffcanvasBody>
        <div className="d-flex align-items-center">
          <i className="ri-arrow-left-line fs-4 me-2 show-cursor-pointer" onClick={editMode === "multiple" ? toggle : setMultipleEditMode}></i>
          <h3>Contacts</h3>
        </div>
        <div className="text-gray text-sm mb-3">Please provide the company's email & contacts</div>
       
       {editMode === "single" && <EditSingleContact />}
       {editMode === "multiple" &&  <EditAllContacts setSingleEditMode={setSingleEditMode}/>}
       
        <Button className="cta-btn fs-5" onClick={toggle}>
            Save
        </Button>
      </OffcanvasBody>
    </Offcanvas>
  );
};
export default SidePopup;
