import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { CourseContext } from "../CourseContext";

export default function Header() {
  const { enrolledCourses } = useContext(CourseContext);

  return (
    <div className="header">
      <img src={logo} alt="Atlas Logo" className="logo" />
      <div className="enrollment">
        Classes Enrolled: {enrolledCourses.length}
      </div>
    </div>
  );
}
