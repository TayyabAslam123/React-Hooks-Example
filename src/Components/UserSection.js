// UserSection.js
import React, { useContext } from 'react';
import { UserContext } from './UseContextHook';

export const UserSection = () => {
  const { username, age } = useContext(UserContext);
  console.log(username);
  return (
    <>
      <h1>User: {username}</h1>
    </>
  );
};