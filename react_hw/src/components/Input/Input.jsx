import styles from './input.module.css'
import React from 'react';
import { useState } from 'react';

const Input = ({ label, id, onChange, value }) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          placeholder={label}
          name={id}
          onChange={(e) => onChange(e)}
          value={value}
        />
      </p>
    );
  };

  export default Input