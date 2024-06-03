import React, { useState } from 'react';
import './StudentRegister.css';
import FacultyRegister from '../FacultyRegister/FacultyRegister';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';

const StudentRegister = () => {
  const [isStudent, setIsStudent] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div className="container1">
      <div className="toggle-buttons">
        <button onClick={() => setIsStudent(true)} className={isStudent ? 'active' : ''}>Student</button>
        <button onClick={() => setIsStudent(false)} className={!isStudent ? 'active' : ''}>Faculty</button>
      </div>
      {isStudent ? (
        <div>
          <h2>Student Registration</h2>
          <form className="student-form">
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="First Name" type="text" placeholder="Enter your first name" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="SR. No" type="text" placeholder="Enter your SR. No" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Last Name" type="text" placeholder="Enter your last name" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Department" type="text" placeholder="Enter your Department" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Contact" type="email" placeholder="Enter your Contact" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Section" type="text" placeholder="Enter your section" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Email" type="text" placeholder="Enter your Email" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Admission Date" type="text" placeholder="Admission Date" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="DOB [DD-MM-YYYY]" type="text" placeholder="Date of Birth" />&nbsp;
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Aadhar No." type="text" placeholder="Enter your Aadhar" />&nbsp;
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Gender" type="text" placeholder="Enter Gender" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Parent/Guardian Name" type="text" placeholder="Parent/Guardian Name" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Address" type="text" placeholder="Enter your Address" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Contact No." type="text" placeholder="Parent/Guardian Contact No." />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="City" type="text" placeholder="Enter your City" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Alt Contact No." type="text" placeholder="Alt Contact No." />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="State" type="text" placeholder="Enter your State" />
            <FormInput className="form-group" labelClass="form-group__label" inputClass="form-group__input" label="Parent/Guardian Email" type="text" placeholder="Parent/Guardian Email" />
            <button type="submit" className="submit-button" onClick={handleButtonClick}>Create my account</button>
          </form>
        </div>
      ) : (
        <FacultyRegister setIsStudent={setIsStudent} />
      )}
    </div>
  );
};

export default StudentRegister;
