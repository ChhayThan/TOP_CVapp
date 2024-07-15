import "../styles/Education.css";
import CustomInput from "../util/CustomInput.jsx";

export default function Education({
  institutionValue,
  setInstitution,
  gpaValue,
  setGpa,
  programValue,
  setProgram,
  educationLocationValue,
  setEducationLocationValue,
  yearOfStudyValue,
  setYearOfStudy,
}) {
  return (
    <div className="educationContainer">
      <div className="title">
        <img src="src/assets/educationIcon.svg" alt="Academic Cap" />
        <h1>Education</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="institution">Institution Name:</label>
        <CustomInput
          type="text"
          inputId="institution"
          value={institutionValue}
          onChange={setInstitution}
          placeholder="University of City"
        />
        <label htmlFor="gpa">GPA:</label>
        <CustomInput
          type="text"
          inputId="gpa"
          value={gpaValue}
          onChange={setGpa}
          placeholder="Optional"
        />
        <label htmlFor="program">Program:</label>
        <CustomInput
          type="text"
          inputId="program"
          value={programValue}
          onChange={setProgram}
          placeholder="Bachelor of Science in Computer Science"
        />
        <label htmlFor="location">Location:</label>
        <CustomInput
          type="text"
          inputId="location"
          value={educationLocationValue}
          onChange={setEducationLocationValue}
          placeholder="City, Province/State"
        />
        <label htmlFor="yearOfStudy">Year of Study:</label>
        <CustomInput
          type="text"
          inputId="yearOfStudy"
          value={yearOfStudyValue}
          onChange={setYearOfStudy}
          placeholder="2023-2028"
        />
      </form>
    </div>
  );
}
