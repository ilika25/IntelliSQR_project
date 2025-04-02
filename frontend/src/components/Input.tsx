import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div className="input-group">
      <input {...props} className="input-field" />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
