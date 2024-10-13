// Home.js
import React from 'react';
import Button from '../components/Button';  // 导入按钮组件

function Home() {
  const handleClick = () => {
    alert('Welcome to the Home Page!');
  };

  return (
    <div>
      <h1>Welcome to My Web Application</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default Home;
