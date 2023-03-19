import React, { useState } from "react";
import axios from "axios";

const AddUserForm = ({ updateTableData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/add_user/", {
        firstName: formData.firstName,
        lastName: formData.lastName,
      });
      updateTableData(response.data);
      setFormData({
        firstName: "",
        lastName: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserForm;
