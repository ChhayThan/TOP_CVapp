import "../styles/Qualification.css";

export default function Qualification({
  componentStatus,
  setComponentStatus,
  qualities,
  qualityDeleteOnClick,
  qualityAddOnClick,
  qualityOnChange,
}) {
  const active = componentStatus === "qualification" ? true : false;
  return (
    <div
      className={`qualificationContainer ${active ? "active" : ""}`}
      onClick={() => setComponentStatus("qualification")}
    >
      <div className="title">
        <h1>Summary Of Qualification</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
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
      </form>
    </div>
  );
}
