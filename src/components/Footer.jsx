import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      ©️ Copyright {currentYear}.Kiran Mahajan. All Rights Reserved
    </div>
  );
};

export default Footer;
