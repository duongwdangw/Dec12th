import React from "react";

const Advertisement = ({ advertisements, currentAdIndex }) => {
  return (
    <div>
      <h3>Quảng cáo</h3>
      <p>{advertisements[currentAdIndex]}</p>
    </div>
  );
};

export default Advertisement;