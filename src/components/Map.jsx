import React from "react";
import "@styles/components/Map.scss";
const Map = ({ maps }) => {
  return (
    <div
      className="map"
      dangerouslySetInnerHTML={{
        __html: `<iframe
              src=${maps}
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>`,
      }}
    ></div>
  );
};

export default Map;
