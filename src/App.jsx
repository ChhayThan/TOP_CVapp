import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";

function App() {
  return (
    <>
      <main>
        <section className="info-form">
          <PersonalInfo />
        </section>
        <section className="cv-preview"></section>
      </main>
    </>
  );
}

export default App;
