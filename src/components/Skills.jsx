import "../styles/Skills.css";
import CustomInput from "../util/CustomInput.jsx";

export default function Skills({
  componentStatus,
  setComponentStatus,
  technicalSkills,
  technicalSkillDeleteOnClick,
  technicalSkillAddOnClick,
  technicalSkillOnChange,
  relevantSkills,
  relevantSkillDeleteOnClick,
  relevantSkillAddOnClick,
  relevantSkillOnChange,
}) {
  const handleTechnicalSkillAdd = (event) => {
    event.preventDefault();
    technicalSkillAddOnClick();
  };

  const handleRelevantSkillAdd = (event) => {
    event.preventDefault();
    relevantSkillAddOnClick();
  };

  const active = componentStatus === "skills" ? true : false;

  return (
    <div
      className={`skillsContainer ${active ? "active" : ""}`}
      onClick={() => setComponentStatus("skills")}
    >
      <div className="title">
        <img src="src/assets/skillIcon.svg" alt="Star Icon" />
        <h1>Skills</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2>Technical Skills</h2>
        <ul>
          {technicalSkills.map((technicalSkill) => {
            return (
              <li key={technicalSkill.id}>
                <span className="dot">&#x2022; </span>
                <label htmlFor={technicalSkill.id}>
                  <input
                    type="text"
                    id="skillTitle"
                    value={technicalSkill.title}
                    onChange={(e) =>
                      technicalSkillOnChange(
                        technicalSkill.id,
                        e.target.value,
                        "title"
                      )
                    }
                    placeholder="title"
                  />
                </label>
                <textarea
                  id={technicalSkill.id}
                  value={technicalSkill.description}
                  onChange={(e) =>
                    technicalSkillOnChange(
                      technicalSkill.id,
                      e.target.value,
                      "description"
                    )
                  }
                ></textarea>

                <button
                  className="deleteBtn"
                  onClick={() => technicalSkillDeleteOnClick(technicalSkill.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="technicalSkillAddBtn addBtn"
          onClick={handleTechnicalSkillAdd}
        >
          Add Technical Skill
        </button>

        <h2>Relevant Skills</h2>
        {relevantSkills.map((relevantSkill) => {
          return (
            <li key={relevantSkill.id}>
              <span className="dot">&#x2022; </span>
              <textarea
                id={relevantSkill.id}
                value={relevantSkill.description}
                onChange={(e) =>
                  relevantSkillOnChange(relevantSkill.id, e.target.value)
                }
              ></textarea>

              <button
                className="deleteBtn"
                onClick={() => relevantSkillDeleteOnClick(relevantSkill.id)}
              >
                Delete
              </button>
            </li>
          );
        })}

        <button
          className="relevantSkillAddBtn addBtn"
          onClick={handleRelevantSkillAdd}
        >
          Add Relevant Skill
        </button>
      </form>
    </div>
  );
}
