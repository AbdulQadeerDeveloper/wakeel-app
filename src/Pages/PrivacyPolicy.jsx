import React from "react";
import privacylist from "../Data/privacylist";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container global-bg">
      <div className="global-spacer global-bg header-setting">
        <div className="global-spacer blog-post-heading">Privacy Policy</div>
      </div>

      <div className="global-container">
        <h2 className="privacy-policy-title global-heading">Privacy Policy</h2>
        <div className="privacy-policy-content">
          {privacylist.map((item) => (
            <div className="privacy-section" key={item.id}>
              <h3 className="heading">
                {item.title}
              </h3>
              <p className="privacy-paragraph global-paragraph">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
