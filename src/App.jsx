import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import "./App.css";

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
        </section>
        <section className="cv-preview">
          <div className="cv">
            <div className="heading">
              <h1 className="fullName">{fullName}</h1>
              <div className="contact">
                <h2 className="phoneNumber">{phoneNumber}</h2>
                <h2 className="email">{emailAddress}</h2>
                <h2 className="linkedin">
                  <a href={linkedinURL}>{linkedinURL}</a>
                </h2>
                <h2 className="github">
                  <a href={githubURL}>{githubURL}</a>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
