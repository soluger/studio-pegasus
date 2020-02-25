import React from "react";

const Footer = () => {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear()
  return (
      <>
        <p className="footer text-center font-weight-bold">
          {formatted_date} - Studio-Pegasus publicidade
        </p>
      </>
    );
};

export default Footer;