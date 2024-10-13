// Button.js
import React from 'react';
import './Button.css';  // 按钮样式文件

function Button({ label, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
