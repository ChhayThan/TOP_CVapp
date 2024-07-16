import "../styles/PersonalInfo.css";
import CustomInput from "../util/CustomInput.jsx";

export default function PersonalInfo({
  componentStatus,
  setComponentStatus,
  setFirstName,
  setLastName,
  firstNameValue,
  lastNameValue,
  phoneNumValue,
  setPhoneNumber,
  emailAddress,
  setEmailAddress,
  linkedinUrl,
  setLinkedinURL,
  githubURL,
  setGithubURL,
}) {
  const active = componentStatus === "personal" ? true : false;
  return (
    <div
      className={`personalContainer ${active ? "active" : ""}`}
      onClick={() => setComponentStatus("personal")}
    >
      <div className="title">
        <img src="src/assets/personalIcon.svg" alt="Person Icon" />
        <h1>Personal Information</h1>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="firstName">First Name:</label>
        <CustomInput
          type="text"
          inputId="firstName"
          value={firstNameValue}
          onChange={setFirstName}
          placeholder="John"
        />
        <label htmlFor="lastName">Last Name:</label>
        <CustomInput
          type="text"
          inputId="lastName"
          value={lastNameValue}
          onChange={setLastName}
          placeholder="Doe"
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <CustomInput
          type="tel"
          inputId="phoneNumber"
          value={phoneNumValue}
          onChange={setPhoneNumber}
          placeholder="123-456-7890"
        />
        <label htmlFor="email">Email Address:</label>
        <CustomInput
          type="email"
          inputId="email"
          value={emailAddress}
          onChange={setEmailAddress}
          placeholder="johndoe@mail.com"
        />
        <label htmlFor="linkedin">Linkedin:</label>
        <CustomInput
          type="url"
          inputId="linkedin"
          value={linkedinUrl}
          onChange={setLinkedinURL}
        />
        <label htmlFor="github">GitHub :</label>
        <CustomInput
          type="url"
          inputId="github"
          value={githubURL}
          onChange={setGithubURL}
        />
      </form>
    </div>
  );
}
