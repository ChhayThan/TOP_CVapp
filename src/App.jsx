import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Qualification from "./components/Qualification";
import Education from "./components/Education";
import Skills from "./components/Skills";
import "./styles/App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [githubURL, setGithubURL] = useState("");

  let qualitiesArray = [
    {
      description: "",
      id: uuidv4(),
    },
  ];

  const [qualities, setQualities] = useState(qualitiesArray);

  function qualityDeleteBtnOnClick(id) {
    for (let i = 0; i < qualities.length; i++) {
      if (qualities[i].id === id) {
        qualities.splice(i, 1);
      }
      let newQualityArray = [...qualities];
      setQualities(newQualityArray);
    }
  }
  function qualityAddOnClick() {
    if (qualities.length <= 0) {
      let newQualityArray = [{ description: "", id: uuidv4() }];
      setQualities(newQualityArray);
      return;
    }
    let newID = uuidv4();
    qualities.push({ description: "", id: newID });
    let newQualityArray = [...qualities];
    setQualities(newQualityArray);
  }

  function qualityOnChange(id, description) {
    for (let i = 0; i < qualities.length; i++) {
      if (qualities[i].id === id) {
        qualities[i].description = description;
      }
      let newQualityArray = [...qualities];
      setQualities(newQualityArray);
    }
  }

  const [institutionValue, setInstitution] = useState("");
  const [gpaValue, setGpa] = useState("");
  const [programValue, setProgram] = useState("");
  const [educationLocationValue, setEducationLocationValue] = useState("");
  const [yearOfStudyValue, setYearOfStudy] = useState("");

  let technicalSkillsArray = [
    {
      title: "",
      description: "",
      id: uuidv4(),
    },
  ];
  let relevantSkillsArray = [
    {
      description: "",
      id: uuidv4(),
    },
  ];

  const [technicalSkills, setTechnicalSkills] = useState(technicalSkillsArray);
  const [relevantSkills, setRelevantSkills] = useState(relevantSkillsArray);

  function technicalSkillDeleteOnClick(id) {
    for (let i = 0; i < technicalSkills.length; i++) {
      if (technicalSkills[i].id === id) {
        technicalSkills.splice(i, 1);
      }
      let newTechnicalSkills = [...technicalSkills];
      setTechnicalSkills(newTechnicalSkills);
    }
  }

  function technicalSkillAddOnClick() {
    let newTechnicalSkills;
    if (technicalSkills.length <= 0) {
      newTechnicalSkills = [{ title: "", description: "", id: uuidv4() }];
    } else {
      newTechnicalSkills = [
        ...technicalSkills,
        { title: "", description: "", id: uuidv4() },
      ];
    }
    setTechnicalSkills(newTechnicalSkills);
  }

  function technicalSkillOnChange(id, value, section) {
    for (let i = 0; i < technicalSkills.length; i++) {
      if (technicalSkills[i].id === id) {
        if (section === "title") {
          technicalSkills[i].title = value;
        } else if (section === "description") {
          technicalSkills[i].description = value;
        }
      }
      let newTechnicalSkills = [...technicalSkills];
      setTechnicalSkills(newTechnicalSkills);
    }
  }

  function relevantSkillDeleteOnClick(id) {
    for (let i = 0; i < relevantSkills.length; i++) {
      if (relevantSkills[i].id === id) {
        relevantSkills.splice(i, 1);
      }
      let newRelevantSkills = [...relevantSkills];
      setRelevantSkills(newRelevantSkills);
    }
  }

  function relevantSkillAddOnClick() {
    let newRelevantSkills;
    if (relevantSkills.length <= 0) {
      newRelevantSkills = [{ description: "", id: uuidv4() }];
    } else {
      newRelevantSkills = [
        ...relevantSkills,
        { description: "", id: uuidv4() },
      ];
    }
    setRelevantSkills(newRelevantSkills);
  }

  function relevantSkillOnChange(id, value) {
    for (let i = 0; i < technicalSkills.length; i++) {
      if (relevantSkills[i].id === id) {
        relevantSkills[i].description = value;
      }
      let newRelevantSkills = [...relevantSkills];
      setRelevantSkills(newRelevantSkills);
    }
  }

  function loadExample() {
    setFirstNameValue("Eric");
    setLastNameValue("C");
    setPhoneNumber("123-456-7890");
    setEmailAddress("eric@company.ca");
    setLinkedinURL("linkedin.com/in/some-address");
    setGithubURL("github.com/user");

    let exampleQualityArray = [
      {
        description:
          "Enthusiastic and highly motivated software engineering student with a passion for learning and a strong desire to contribute to innovative and meaningful projects.",
        id: 0,
      },
      {
        description:
          "Excellent communicator with strong written and verbal communication skills, capable of collaborating in team-based environments shown through past team-focused projects.",
        id: 1,
      },
      {
        description:
          "Strong analytical and problem-solving abilities, shown through successful completion of projects and coursework.",
        id: 2,
      },
    ];

    setQualities(exampleQualityArray);
    setInstitution("Harvard University");
    setGpa("4.0");
    setProgram("Bachelor of Science, Computer Science (Co-Op)");
    setEducationLocationValue("Cambridge, Massachusetts");
    setYearOfStudy("2023-2028");
  }

  function clearForm() {
    setFirstNameValue("");
    setLastNameValue("");
    setPhoneNumber("");
    setEmailAddress("");
    setLinkedinURL("");
    setGithubURL("");

    let exampleQualityArray = [
      {
        description: "",
        id: 0,
      },
    ];

    setQualities(exampleQualityArray);
    setInstitution("");
    setGpa("");
    setProgram("");
    setEducationLocationValue("");
    setYearOfStudy("");
  }

  return (
    <>
      <main>
        <section className="info-form">
          <div className="formBtn">
            <button className="loadExampleBtn" onClick={() => loadExample()}>
              Load Example
            </button>
            <button className="clearFormBtn" onClick={() => clearForm()}>
              Clear Form
            </button>
          </div>

          <PersonalInfo
            setFirstName={(e) => setFirstNameValue(e.target.value)}
            setLastName={(e) => setLastNameValue(e.target.value)}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            phoneNumValue={phoneNumber}
            setPhoneNumber={(e) => {
              const newValue = e.target.value;
              const isValid = /^[0-9-]*$/.test(newValue);
              if (isValid) {
                setPhoneNumber(newValue);
              }
            }}
            emailAddress={emailAddress}
            setEmailAddress={(e) => setEmailAddress(e.target.value)}
            linkedinUrl={linkedinURL}
            setLinkedinURL={(e) => setLinkedinURL(e.target.value)}
            githubURL={githubURL}
            setGithubURL={(e) => setGithubURL(e.target.value)}
          />
          <Qualification
            qualities={qualities}
            qualityDeleteOnClick={qualityDeleteBtnOnClick}
            qualityAddOnClick={qualityAddOnClick}
            qualityOnChange={qualityOnChange}
          />

          <Education
            institutionValue={institutionValue}
            setInstitution={(e) => setInstitution(e.target.value)}
            gpaValue={gpaValue}
            setGpa={(e) => {
              const newValue = e.target.value;
              const isValid = /^[0-9.]*$/.test(newValue);
              if (isValid) {
                setGpa(newValue);
              }
            }}
            programValue={programValue}
            setProgram={(e) => setProgram(e.target.value)}
            educationLocationValue={educationLocationValue}
            setLocation={(e) => setEducationLocationValue(e.target.value)}
            yearOfStudyValue={yearOfStudyValue}
            setYearOfStudy={(e) => {
              const newValue = e.target.value;
              const isValid = /^[0-9-]*$/.test(newValue);
              if (isValid) {
                setYearOfStudy(newValue);
              }
            }}
          />

          <Skills
            technicalSkills={technicalSkills}
            technicalSkillDeleteOnClick={technicalSkillDeleteOnClick}
            technicalSkillAddOnClick={technicalSkillAddOnClick}
            technicalSkillOnChange={technicalSkillOnChange}
            relevantSkills={relevantSkills}
            relevantSkillDeleteOnClick={relevantSkillDeleteOnClick}
            relevantSkillAddOnClick={relevantSkillAddOnClick}
            relevantSkillOnChange={relevantSkillOnChange}
          />
        </section>
        <section className="cv-preview">
          <div className="cv">
            <div className="heading">
              <h1 className="fullName">
                {firstNameValue + " " + lastNameValue}
              </h1>
              <div className="contact">
                <p className="phoneNumber">{phoneNumber}</p>
                <p className="email">{emailAddress}</p>
                <p className="linkedin">
                  <a href={linkedinURL}>{linkedinURL}</a>
                </p>
                <p className="github">
                  <a href={githubURL}>{githubURL}</a>
                </p>
              </div>
            </div>
            <div className="qualification">
              <h2>SUMMARY OF QUALIFICATIONS</h2>
              <ul>
                {qualities.map((quality) => {
                  return (
                    <li key={quality.id}>
                      <span className="dot">&#x2022; </span>
                      {quality.description}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="education">
              <h2>EDUCATION</h2>
              <h3 className="institution">
                {gpaValue
                  ? institutionValue + " GPA: " + gpaValue
                  : institutionValue}
              </h3>
              <p className="educationLocation">{educationLocationValue}</p>
              <p className="program">{programValue}</p>
              <p className="yearOfStudy">{yearOfStudyValue}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
