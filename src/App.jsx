// src/App.jsx
import React from "react";
import { CourseProvider } from "./CourseContext";
import Header from "./components/Header";
import SchoolCatalog from "./SchoolCatalog";
import ClassSchedule from "./ClassSchedule";
import Footer from "./components/Footer";

function App() {
  return (
    <CourseProvider>
      <div className="App">
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
        <Footer />
      </div>
    </CourseProvider>
  );
}

export default App;
