// src/App.jsx
import React from "react";
import { CourseProvider } from "./CourseContext";
import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import SchoolCatalog from "./SchoolCatalog"; // Ensure this import is correct
import ClassSchedule from "./ClassSchedule"; // Ensure this import is correct
import Footer from "./components/Footer"; // Ensure this import is correct

function App() {
  return (
    <CourseProvider>
      <div className="App">
        <Header />
        <Section title="Helpful resources">
          <HelpfulResource
            label="React Official Docs"
            link="https://reactjs.org/docs/getting-started.html"
          />
          <HelpfulResource
            label="ReactJS Tutorial - freeCodeCamp"
            link="https://www.youtube.com/watch?v=bMknfKXIFA8"
          />
          <HelpfulResource
            label="React Docs Beta (New)"
            link="https://beta.reactjs.org/"
          />
        </Section>
        <SchoolCatalog />
        <ClassSchedule />
        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
