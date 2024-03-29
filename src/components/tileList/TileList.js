import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ contacts, appointments }) => {
  return (
    <div>
      {contacts && contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          {contacts.map(({ name, ...rest }, index) => (
            <Tile key={index} name={name} description={{ ...rest }} />
          ))}
        </>
      )}
      {appointments && appointments.length > 0 && (
        <>
          <h2>Appointments</h2>
          {appointments.map(({ name, ...rest }, index) => (
            <Tile key={index} name={name} description={{ ...rest }} />
          ))}
        </>
      )}
    </div>
  );
};
