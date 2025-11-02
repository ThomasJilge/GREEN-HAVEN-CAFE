import { useState, useEffect } from 'react';
import ValidationIcon from './validationIcons';
import './validateInput.css';

export default function ValidatedInput({ name, value, onChange, placeholder, type = 'text' }) {
  const [isValid, setIsValid] = useState(null);

  const validate = (val) => {
    if (name === 'name') return val.trim().length >= 4;
    if (name === 'email' || name === 'mail') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    return true;
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e); 
    setIsValid(validate(val));
  };

    useEffect(() => {
    if (value === '') {
      setIsValid(null);
    }
  }, [value]);

  return (
    <div className="inputWrapper">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`inputField ${isValid === null ? '' : isValid ? 'valid' : 'invalid'}`}
      />
      {isValid !== null && <ValidationIcon isValid={isValid} />}
    </div>
  );
}
