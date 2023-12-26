// contexts/InputContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InputContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<InputContextProps | undefined>(undefined);

interface InputProviderProps {
  children: ReactNode;
}

export const InputProvider: React.FC<InputProviderProps> = ({ children }) => {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};
