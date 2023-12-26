// contexts/InputContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

interface InputContextProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const InputProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInput must be used within an InputProvider');
  }
  return context;
};
