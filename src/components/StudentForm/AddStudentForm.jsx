import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../StudentContext";
import './AddStudentForm.css';

const AddStudentForm = () => {
  const { addStudent, editStudent, currentStudent, students } = useContext(StudentContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentStudent) {
      setName(currentStudent.name);
      setPhone(currentStudent.phone);
      setAddress(currentStudent.address);
      setIsModalOpen(true);
    } else {
      setName("");
      setPhone("");
      setAddress("");
      setIsModalOpen(false);
    }
  }, [currentStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentStudent) {
     
      editStudent({
        ...currentStudent,
        name,
        phone,
        address,
      });
    } else {
      
      addStudent({ name, phone, address });
    }

    setName("");
    setPhone("");
    setAddress("");
    setIsModalOpen(false); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div>
      <h2>Total Students: {students.length}</h2>

     
      <button onClick={() => setIsModalOpen(true)}>Add Student</button>

      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-modal" onClick={closeModal}>
              X
            </button>
            <h2>{currentStudent ? "Edit Student" : "Add Student"}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <button type="submit">{currentStudent ? "Update" : "Add"}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudentForm;
