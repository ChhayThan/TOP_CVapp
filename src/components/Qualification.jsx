import "../styles/Qualification.css";
import CustomInput from "../util/CustomInput.jsx";

export default function Qualification() {
  return (
    <div className="qualificationContainer">
      <div className="title">
        <img src="src/assets/qualificationIcon.svg" alt="Star icon" />
        <h1>Summary Of Qualification</h1>
      </div>
      <ul className="qualityItems">
        <li>
          <textarea name="" id=""></textarea>
        </li>
      </ul>

      <button className="addQualityBtn">Add Quality Item</button>
    </div>
  );
}
