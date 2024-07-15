import "../styles/Experience.css";
import CustomInput from "../util/CustomInput.jsx";

export default function Experience({
  experiences,
  experienceDeleteOnClick,
  experienceAddOnClick,
  experienceOnChange,
}) {
  return (
    <div className="experienceContainer">
      <div className="title">
        <img src="src/assets/experienceIcon.svg" alt="Work bag icon" />
        <h1>Experience</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="experienceItem">
              <label htmlFor="company">Company: </label>
              <CustomInput
                type="text"
                inputId="company"
                value={experience.company}
                onChange={(e) =>
                  experienceOnChange("company", experience.id, e.target.value)
                }
              />

              <label htmlFor="position">Position: </label>
              <CustomInput
                type="text"
                inputId="company"
                value={experience.position}
                onChange={(e) =>
                  experienceOnChange("position", experience.id, e.target.value)
                }
              />
              <label htmlFor="responsibilities">Responsibilities: </label>
              <CustomInput
                type="text"
                inputId="responsibilities"
                value={experience.responsibilities}
                onChange={(e) =>
                  experienceOnChange(
                    "responsibilities",
                    experience.id,
                    e.target.value
                  )
                }
              />

              <label htmlFor="currentJob">Currently Working here: </label>
              <input
                type="checkbox"
                id="currentJob"
                onClick={(e) =>
                  experienceOnChange("currenJob", experience.id, e.target.value)
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
            </div>
          );
        })}
      </form>
    </div>
  );
}
