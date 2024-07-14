import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Qualification from "./components/Qualification";
import "./styles/App.css";

function App() {
  const [firstNameValue, setFirstNameValue] = useState("Eric");
  const [lastNameValue, setLastNameValue] = useState("Chhour");

  const [phoneNumber, setPhoneNumber] = useState("613-890-1066");
  const [emailAddress, setEmailAddress] = useState("cchho053@uottawa.ca");
  const [linkedinURL, setLinkedinURL] = useState(
    "linkedin.com/in/chhay-than-chhour"
  );
  const [githubURL, setGithubURL] = useState("github.com/ChhayThan");

  let qualitiesArray = [
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
    {
      description:
        "Proficient in using HTML, CSS, JavaScript with experience building interactive and responsive webpages.",
      id: 4,
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

  let fullName = firstNameValue + " " + lastNameValue;
  return (
    <>
      <main>
        <section className="info-form">
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
        </section>
        <section className="cv-preview">
          <div className="cv">
            <div className="heading">
              <h1 className="fullName">{fullName}</h1>
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
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
