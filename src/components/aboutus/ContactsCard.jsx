const ContactsCard = ({toggleSidePopup}) => {
  return (
    <div className="border rounded p-4 fs-5">
      <div className="d-flex justify-content-between mb-4">
        <div className="d-flex align-items-baseline">
          <i className="ri-contacts-book-fill text-gray fs-4 me-2"></i>
          <span className="fs-4 fw-bold">Contacts</span>
        </div>
        <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer" onClick={toggleSidePopup}></i>
      </div>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <div className="d-flex">
            <div className="w-25px">
              <i className="ri-mail-fill text-gray"></i>
            </div>
            <div>salesteam@br.in /</div>
          </div>
          <div className="d-flex">
            <div className="w-25px"></div>
            <div>salesteam2@br.in</div>
          </div>
        </div>
        <div className="number-pill">+5</div>
      </div>
      <div className="d-flex">
        <div className="w-25px">
          <i className="ri-phone-fill text-gray"></i>
        </div>
        <div>+91 8511591740 / 8000058214</div>
      </div>
    </div>
  );
};
export default ContactsCard;
