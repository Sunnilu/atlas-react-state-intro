// src/CourseContext.jsx
import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    setEnrolledCourses((prevCourses) => {
      // Avoid enrolling the same course multiple times
      if (!prevCourses.some((c) => c.courseNumber === course.courseNumber)) {
        return [...prevCourses, course];
      }
      return prevCourses;
    });
  };

  const dropCourse = (courseNumber) => {
    setEnrolledCourses((prevCourses) =>
      prevCourses.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <CourseContext.Provider
      value={{ enrolledCourses, enrollCourse, dropCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};
