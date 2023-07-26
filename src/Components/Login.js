// Login.js
import React, { useContext, useState } from 'react';
import { UserSection } from './UserSection';
import { UserContext } from './UseContextHook';
export const Login = () => {
  const { updateUsername } = useContext(UserContext);
  const [formValue, setFormValue] = useState('');

  // Function to handle form value change
  const handleFormChange = (event) => {
    setFormValue(event.target.value);
    updateUsername(event.target.value);
  };

  return (
    <>
      <hr />
      <p>Login Form</p>
      {/* Use handleFormChange to update formValue and username */}
      <input type='text' value={formValue} onChange={handleFormChange} />
      <hr />
      <UserSection />
    </>
  );
};