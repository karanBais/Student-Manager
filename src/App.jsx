import React from "react";
import { StudentProvider } from "./components/StudentContext";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/StudentForm/AddStudentForm";
import './App.css';

const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1 className="student-list-head">Student Manager</h1>
        <AddStudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;
