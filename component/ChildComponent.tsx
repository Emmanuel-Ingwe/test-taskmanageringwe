import React from 'react'
import { useState } from 'react';

// interface inputComponentProps {
//     inputValue: string;
//   }

  const inputComponent: React.FC = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
      // Call the onSubmit function with the input value
      onSubmit(inputValue);
    };


  return (
    <div>
        <label htmlFor="">enter</label>
      <input type="text"  value={inputValue}
        onChange={handleInputChange} className='outline-none bg-gray-600 p-3 rounded-xl' placeholder='firstname or nickname' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default inputComponent