import React, { useContext } from 'react';
import { UserContext } from './UseContextHook';

export const UserSection = () => {
  const username = useContext(UserContext);

  return (
    <>
      <h1>User: {username}</h1>
    </>
  );
};