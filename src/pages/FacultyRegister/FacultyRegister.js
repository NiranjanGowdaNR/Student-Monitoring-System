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
      <h2>Faculty Registration</h2>
      <form className="faculty-form1">

        <FormInput className="form-group" label="First Name" type="text" placeholder="Enter your first name" />
        <FormInput className="form-group" label="Middle Name" type="text" placeholder="Enter your middle name" />
        <FormInput className="form-group" label="Last Name" type="text" placeholder="Enter your last name" />
        <FormInput className="form-group" label="Gender" type="text" placeholder="Enter your gender" />
        <FormInput className="form-group" label="Personal Email" type="email" placeholder="Enter your personal email" />
        <FormInput className="form-group" label="Official Email" type="email" placeholder="Enter your official email" />
        <FormInput className="form-group" label=" Contact No." type="text" placeholder="Enter your contact number" />
        <FormInput className="form-group" label="Alt Contact No." type="text" placeholder="Enter your alternate contact number" />
        <FormInput className="form-group" label="Adress 1" type="text" placeholder="Enter your address 1" />
        <FormInput className="form-group" label="Address 2" type="text" placeholder="Enter your address 2" />
        <FormInput className="form-group" label="City" type="text" placeholder="Enter your city" />
        <FormInput className="form-group" label="State" type="text" placeholder="Enter your state" />
        <FormInput className="form-group" label="Pincode" type="text" placeholder="Enter your pincode" />
        <FormInput className="form-group" label="Designation" type="text" placeholder="Enter your designation" />
        <FormInput className="form-group" label="Employee ID" type="text" placeholder="Enter your Employee ID" />
        <FormInput className="form-group" label="College" type="text" placeholder="Enter your College" />
        <FormInput className="form-group" label="Department" type="text" placeholder="Enter your Department" />
        <FormInput className="form-group" label="DOB [DD-MM_YYYY]" type="text" placeholder="Enter your DOB" />
        <FormInput className="form-group" label="Date of Joining [DD-MM-YYYY]" type="text" placeholder="Enter your Date of Joining" />
        <FormInput className="form-group" label="Aadhar No." type="text" placeholder="Enter your Aadhar No." />
        <FormInput className="form-group" label="PAN" type="text" placeholder="Enter your PAN" />
        <button type="submit" className="submit-button" onClick={handleButtonClick} >Create my account</button>
      </form>
    </div>
  );
};

export default FacultyRegister;
