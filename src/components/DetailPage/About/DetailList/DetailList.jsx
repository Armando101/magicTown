import React from "react";
import "./DetailList.scss";

function DetailList({ title, data }) {
  return (
    <div className="detaillist-wrapper">
      <h2 className="detaillist__title">{title}:</h2>
      <ul className="detaillist">
        {Object.values(data).map((item, index) => (
          <li key={index} className="datalist__item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailList;
