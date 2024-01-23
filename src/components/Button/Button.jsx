import { useState } from 'react';

export const Button = () => {
  //   let clicks = 0;
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
    console.log(clicks);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  //   const handleEnter = evt => {
  //     console.log(evt);
  //   };

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      {isOpen && <p>Now you can see me!</p>}
    </>
  );
};
