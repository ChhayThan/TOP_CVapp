import "../styles/Experience.css";

export default function Experience({
  componentStatus,
  setComponentStatus,
  experiences,
  experienceDeleteOnClick,
  experienceAddOnClick,
  experienceOnChange,
  responsibilityOnChange,
  responsibilityDeleteOnClick,
  responsibilityAddOnClick,
}) {
  const active = componentStatus === "experience" ? true : false;
  return (
    <div
      className={`experienceContainer ${active ? "active" : ""}`}
      onClick={() => setComponentStatus("experience")}
    >
      <div className="title">
        <h1>Experience</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="experienceItem">
              <button
                className="experienceDeleteBtn deleteBtn"
                onClick={() => experienceDeleteOnClick(experience.id)}
              >
                Delete Experience
              </button>
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                id="company"
                value={experience.company}
                onChange={(e) =>
                  experienceOnChange("company", experience.id, e.target.value)
                }
              />
              <label htmlFor="position">Position: </label>
              <input
                type="text"
                id="position"
                value={experience.position}
                onChange={(e) =>
                  experienceOnChange("position", experience.id, e.target.value)
                }
              />
              <label htmlFor="responsibilities">Responsibilities: </label>
              <ul className="responsibilityItems">
                {experience.responsibilities.map((responsibility) => {
                  return (
                    <li key={responsibility.id}>
                      <span className="dot">&#x2022; </span>
                      <textarea
                        value={responsibility.description}
                        onChange={(e) =>
                          responsibilityOnChange(
                            experience.id,
                            responsibility.id,
                            e.target.value
                          )
                        }
                      ></textarea>
                      <button
                        className="responsibilityDeleteBtn deleteBtn"
                        onClick={() =>
                          responsibilityDeleteOnClick(
                            experience.id,
                            responsibility.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button
                className="addResponsibilityBtn addBtn"
                onClick={() => responsibilityAddOnClick(experience.id)}
              >
                Add Responsibility Item
              </button>
              <label htmlFor="currentJob">Currently Working here: </label>
              <input
                type="checkbox"
                id="currentJob"
                onClick={(e) =>
                  experienceOnChange(
                    "currentJob",
                    experience.id,
                    e.target.checked
                  )
                }
              />
              <label htmlFor="startDate">Start Date: </label>
              <input
                type="date"
                id="startDate"
                onChange={(e) =>
                  experienceOnChange("startDate", experience.id, e.target.value)
                }
              />
              <label htmlFor="endDate">End Date: </label>
              <input
                type="date"
                id="endDate"
                onChange={(e) =>
                  experienceOnChange("endDate", experience.id, e.target.value)
                }
                disabled={experience.currentJob}
              />
              <div className="dottedLine"></div>
            </div>
          );
        })}

        <button
          className="experienceAddBtn addBtn"
          onClick={() => experienceAddOnClick()}
        >
          Add Experience
        </button>
      </form>
    </div>
  );
}
