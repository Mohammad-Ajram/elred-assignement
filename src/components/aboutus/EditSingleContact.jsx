import { Button } from "reactstrap";
import {Label, Input} from "reactstrap";

const EditSingleContact = () => {
    return (
      <>
        <Label className="fw-bold mt-3">Email ID</Label>
        <Input type="text" className="border-0 bg-light py-2 mb-2" placeholder="eg. salesteam@br.in" />
        <Button className="d-flex align-items-center justify-content-center add-more-btn w-100 border-0 fw-bold py-2">
            <i className="ri-add-circle-line me-2"></i>
            <span>Add More</span>
        </Button>

        <Label className="fw-bold mt-4">Contact Number</Label>
        <Input type="text" className="border-0 bg-light py-2 mb-2" placeholder="eg. 8511591740" />
        <Button className="d-flex align-items-center justify-content-center add-more-btn w-100 border-0 fw-bold py-2">
            <i className="ri-add-circle-line me-2"></i>
            <span>Add More</span>
        </Button>
      </>
    );
};

export default EditSingleContact;
  