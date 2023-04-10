const HoursOfOperationCard = () => {
    return (
      <div className="border rounded p-4 fs-5 h-100">
        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex align-items-baseline">
            <i className="ri-time-fill text-gray fs-4 me-2"></i>
            <span className="fs-4 fw-bold">Hours of Operation</span>
          </div>
          <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer"></i>
        </div>
        <div>Monday To Friday - 09:00 Am To 06:00 Pm</div>
      </div>
    );
  };
  export default HoursOfOperationCard;
  