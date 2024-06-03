import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyRegister.css';
import FormInput from '../../components/FormInput';





const FacultyRegister = ({ setIsStudent }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/login');
  }
  return (
    <div className="container2">
      <h2>Faculty Registration</h2><br/>
      <form className="faculty-form1">

        <FormInput className="form-group" label="First Name" type="text" placeholder="Enter your first name" />
        <FormInput className="form-group" label="Employee ID" type="text" placeholder="Enter your ID" />
        <FormInput className="form-group" label="Last Name" type="text" placeholder="Enter your last name" />
        <FormInput className="form-group" label="Designation" type="text" placeholder="Enter your designation" />
        <FormInput className="form-group" label="Gender" type="email" placeholder="Enter your gender" />
        <FormInput className="form-group" label="Official Email" type="email" placeholder="Enter your official email" />
        <FormInput className="form-group" label=" DOB [DD-MM_YYYY]" type="text" placeholder="Enter your DOB" />
        <FormInput className="form-group" label="College" type="text" placeholder="Enter College" />
        <FormInput className="form-group" label="Personal Email" type="text" placeholder="Enter your personal email" />
        <FormInput className="form-group" label="Department" type="text" placeholder="Enter Department" />
        <FormInput className="form-group" label="Contact No." type="text" placeholder="Enter your contact" />
        <FormInput className="form-group" label="Date" type="text" placeholder="Enter your Date of Joining[DD-MM_YYYY]" />
        <FormInput className="form-group" label="Alt Contact No." type="text" placeholder="Enter your Alt contact" />
        <FormInput className="form-group" label="Aadhar" type="text" placeholder="Enter your Aadhar No." />
        <FormInput className="form-group" label="Address" type="text" placeholder="Enter your Address" />
        <FormInput className="form-group" label="PAN" type="text" placeholder="Enter your PAN No." />
        <FormInput className="form-group" label="City" type="text" placeholder="Enter City" />&nbsp;
        <FormInput className="form-group" label="State" type="text" placeholder="Enter your State" />
        <button type="submit" className="submit-button" onClick={handleButtonClick} >Create my account</button>
      </form>
    </div>
  );
};

export default FacultyRegister;
