import React from "react";

export const ContactPicker = ({ contacts, value, onChange, name }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
