import React, { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  
  const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

  const [students, setStudents] = useState(storedStudents);
  const [currentStudent, setCurrentStudent] = useState(null);

  
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const editStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
    setCurrentStudent(null); 
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const startEditing = (student) => {
    setCurrentStudent(student);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        editStudent,
        deleteStudent,
        currentStudent,
        startEditing,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
