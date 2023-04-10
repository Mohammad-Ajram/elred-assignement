const SocialMediaLinksCard = () => {
    return (
      <div className="border rounded p-4 h-100">
        <div className="d-flex justify-content-between mb-4 fs-5">
          <div className="d-flex align-items-baseline">
            <i className="ri-link text-gray fs-4 me-2"></i>
            <span className="fs-4 fw-bold">Social Media & Links</span>
          </div>
          <i className="ri-pencil-fill text-red fs-4 show-cursor-pointer"></i>
        </div>
        <div className="d-flex align-items-center justify-content-center py-3">
          <div className="d-flex flex-column align-items-center text-gray me-3 show-cursor-pointer">
            <i className="ri-global-fill fs-2"></i>
            <span>Website</span>
          </div>
          <div className="d-flex flex-column align-items-center text-gray me-3 show-cursor-pointer">
            <i className="ri-instagram-fill fs-2"></i>
            <span>Instagram</span>
          </div>
          <div className="d-flex flex-column align-items-center text-gray me-3 show-cursor-pointer">
            <i className="ri-facebook-fill fs-2"></i>
            <span>Facebook</span>
          </div>
          <div className="d-flex flex-column align-items-center text-gray show-cursor-pointer">
            <i className="ri-twitter-fill fs-2"></i>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    );
  };
  export default SocialMediaLinksCard;
  