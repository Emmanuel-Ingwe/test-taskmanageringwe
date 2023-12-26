import React from 'react'
import { useInput } from "@/contexts/inputContext"

interface InputComponentProps {
    onSubmit: (inputValue: string) => void;
  }

  const inputComponent:React.FC<InputComponentProps> = ({ onSubmit }) => {
    const { inputValue, setInputValue } = useInput();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
        onSubmit(inputValue);
        setInputValue('')
      };


  return (
    <div className='flex flex-col'>
      <input type="text"  value={inputValue}
        onChange={handleInputChange} className='outline-none bg-gray-600 p-3 rounded-xl' placeholder='firstname or nickname' />
        <button onClick={handleSubmit}>enter</button>
    </div>
  )
}

export default inputComponent