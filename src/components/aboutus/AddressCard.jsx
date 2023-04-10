const AddressCard = () => {
    return (
      <div className="border rounded p-4 fs-5 h-100">
        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex align-items-baseline">
            <i className="ri-map-pin-2-fill text-gray fs-4 me-2"></i>
            <span className="fs-4 fw-bold">Address</span>
          </div>
          <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer"></i>
        </div>
        <div>C-1 / 351 / 4, GIDC Makarpura,</div>
        <div>Vadodra - 390010, Gujarat, India.</div>
      </div>
    );
  };
  export default AddressCard;
  