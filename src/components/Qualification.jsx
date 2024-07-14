import "../styles/Qualification.css";
import { useState } from "react";

export default function Qualification({
  qualities,
  qualityDeleteOnClick,
  qualityAddOnClick,
  qualityOnChange,
}) {
  return (
    <div className="qualificationContainer">
      <div className="title">
        <img src="src/assets/qualificationIcon.svg" alt="Star icon" />
        <h1>Summary Of Qualification</h1>
      </div>
      <ul className="qualityItems">
        {qualities.map((quality) => {
          return (
            <li key={quality.id}>
              <span className="dot">&#x2022; </span>
              <textarea
                value={quality.description}
                onChange={(e) => qualityOnChange(quality.id, e.target.value)}
              ></textarea>
              <button
                className="qualityDeleteBtn"
                onClick={() => qualityDeleteOnClick(quality.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>

      <button className="addQualityBtn" onClick={() => qualityAddOnClick()}>
        Add Quality Item
      </button>
    </div>
  );
}
