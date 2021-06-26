import React, { useContext, useState } from "react";

import "./Map.scss";

const Map = ({ map }) => {
  return (
    <div className="map">
      <iframe
        src={map}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="eager"
      ></iframe>
    </div>
  );
};

export default Map;
