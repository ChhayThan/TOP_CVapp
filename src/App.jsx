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
          <Qualification />
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
