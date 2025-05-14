// src/SchoolCatalog.jsx
import React, { useEffect, useState, useContext } from "react";
import { CourseContext } from "./CourseContext";

export default function SchoolCatalog() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const { enrolledCourses, enrollCourse } = useContext(CourseContext);

  useEffect(() => {
    fetch("/api/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Failed to load courses:", err));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reset to first page when filtering
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredCourses = courses.filter((course) =>
    `${course.courseNumber} ${course.courseName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortConfig.key) {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (typeof aVal === "string") {
        return sortConfig.direction === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      } else {
        return sortConfig.direction === "asc" ? aVal - bVal : bVal - aVal;
      }
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedCourses.length / rowsPerPage);
  const paginatedCourses = sortedCourses.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("trimester")}>Trimester</th>
            <th onClick={() => handleSort("courseNumber")}>Course Number</th>
            <th onClick={() => handleSort("courseName")}>Course Name</th>
            <th onClick={() => handleSort("semesterCredits")}>
              Semester Credits
            </th>
            <th onClick={() => handleSort("totalClockHours")}>
              Total Clock Hours
            </th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCourses.map((course) => (
            <tr key={course.courseNumber}>
              <td>{course.trimester}</td>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.semesterCredits}</td>
              <td>{course.totalClockHours}</td>
              <td>
                <button
                  onClick={() => enrollCourse(course)}
                  disabled={enrolledCourses.some(
                    (c) => c.courseNumber === course.courseNumber
                  )}
                >
                  Enroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
