const EditAllContacts = ({setSingleEditMode}) => {
    return (
      <>
        <div className="border rounded p-3 fs-5 mb-3">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex align-items-baseline">
              <i className="ri-contacts-book-fill text-gray fs-4 me-2"></i>
              <span className="fs-5 fw-bold">Sales Team</span>
            </div>
            <div className="d-flex">
              <i className="ri-delete-bin-line text-red fs-4 me-2 show-cursor-pointer"></i>
              <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer" onClick={setSingleEditMode}></i>
            </div>
          </div>
          <div className="d-flex mb-3">
            <i className="ri-mail-fill text-gray me-2"></i>
            <div>salesteam@br.in / salesteam2@br.in</div>
          </div>
          <div className="d-flex">
            <i className="ri-phone-fill text-gray me-2"></i>
            <div>+91 8511591740 / 8000058214 </div>
          </div>
        </div>
  
        <div className="border rounded p-3 fs-5 mb-3">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex align-items-baseline">
              <i className="ri-contacts-book-fill text-gray fs-4 me-2"></i>
              <span className="fs-5 fw-bold">Marketing Team</span>
            </div>
            <div className="d-flex">
              <i className="ri-delete-bin-line text-red fs-4 me-2"></i>
              <i className="ri-pencil-fill text-red fs-4"></i>
            </div>
          </div>
          <div className="d-flex mb-3">
            <i className="ri-mail-fill text-gray me-2"></i>
            <div>salesteam@br.in / salesteam2@br.in</div>
          </div>
          <div className="d-flex">
            <i className="ri-phone-fill text-gray me-2"></i>
            <div>+91 8511591740 / 8000058214 </div>
          </div>
        </div>
  
        <div className="border rounded p-3 fs-5">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex align-items-baseline">
              <i className="ri-contacts-book-fill text-gray fs-4 me-2"></i>
              <span className="fs-5 fw-bold">Marketing Team</span>
            </div>
            <div className="d-flex">
              <i className="ri-delete-bin-line text-red fs-4 me-2"></i>
              <i className="ri-pencil-fill text-red fs-4"></i>
            </div>
          </div>
          <div className="d-flex mb-3">
            <i className="ri-mail-fill text-gray me-2"></i>
            <div>salesteam@br.in / salesteam2@br.in</div>
          </div>
          <div className="d-flex">
            <i className="ri-phone-fill text-gray me-2"></i>
            <div>+91 8511591740 / 8000058214 </div>
          </div>
        </div>
      </>
    );
  };

export default EditAllContacts;
  