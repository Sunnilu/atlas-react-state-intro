// src/ClassSchedule.jsx
import React, { useContext } from "react";
import { CourseContext } from "./CourseContext";

export default function ClassSchedule() {
  const { enrolledCourses, dropCourse } = useContext(CourseContext);

  return (
    <div className="class-schedule">
      <h1>Class Schedule</h1>
      {enrolledCourses.length === 0 ? (
        <p>No courses enrolled.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Course Number</th>
              <th>Course Name</th>
              <th>Drop</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course) => (
              <tr key={course.courseNumber}>
                <td>{course.courseNumber}</td>
                <td>{course.courseName}</td>
                <td>
                  <button onClick={() => dropCourse(course.courseNumber)}>
                    Drop
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
