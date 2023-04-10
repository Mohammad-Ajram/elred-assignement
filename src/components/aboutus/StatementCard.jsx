const StatementCard = () => {
  return (
    <div className="border rounded p-4 fs-5 h-100">
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex align-items-baseline">
          <i className="ri-double-quotes-l text-gray fs-4 me-2"></i>
          <span className="fs-4 fw-bold">Statement</span>
        </div>
        <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer"></i>
      </div>
      <div className="d-flex justify-content-between mb-2 py-2">
        <div>You think it we ink it.</div>
        <div className="number-pill">+1</div>
      </div>
    </div>
  );
};
export default StatementCard;
