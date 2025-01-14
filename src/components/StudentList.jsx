import React, { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentList = () => {
  const { students, startEditing, deleteStudent } = useContext(StudentContext);

  const handleEdit = (student) => {
    startEditing(student); 
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.phone} - {student.address}
            <button className="delete-btn" onClick={() => handleEdit(student)}>Edit</button>
            <button className="edit-btn" onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
