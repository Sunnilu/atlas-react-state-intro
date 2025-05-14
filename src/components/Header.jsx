// src/components/Header.jsx
import React, { useContext } from "react";
import logo from "../assets/logo.png"; // Adjust the path if needed
import { CourseContext } from "../CourseContext"; // Import the context

export default function Header() {
  const { enrolledCourses } = useContext(CourseContext); // Access enrolledCourses

  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">
        Classes Enrolled: {enrolledCourses.length}
      </div>
    </div>
  );
}
