import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Qualification from "./components/Qualification";
import Education from "./components/Education";
import "./styles/App.css";

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
      id: 0,
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
      let newQualityArray = [{ description: "", id: 0 }];
      setQualities(newQualityArray);
      return;
    }
    let newID = qualities[qualities.length - 1].id + 1;
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
