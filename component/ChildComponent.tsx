import React from 'react'

interface ChildComponentProps {
    inputValue: string;
  }

  const ChildComponent: React.FC<ChildComponentProps> = ({ inputValue }) => {
  return (
    <p>{inputValue}</p>
  )
}

export default ChildComponent