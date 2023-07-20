import React, { useContext } from 'react';
import { UserContext } from './UseContextHook';

export const UserSection = () => {
  const {username, age, ph} = useContext(UserContext);

  return (
    <>
      <h1>User: {username}</h1>
      <h1>Age: {age}</h1>
      <h1>Phone: {ph}</h1>
    </>
  );
};