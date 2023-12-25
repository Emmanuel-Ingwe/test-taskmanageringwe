import { Inter } from 'next/font/google'
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import SnowfallComponent from '../../component/snowflake'

const inter = Inter({ subsets: ['latin'] })

const RedirectPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('');

  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(event.target.value);
  };

  const redirectToPage = () => {
    if (selectedPage) {
      // Use the Link component to navigate to the selected page
      return (
        <Link href={`/${selectedPage}`}>
          <a>Go to {selectedPage}</a>
        </Link>
      );
    }
    return null;
  };

  return (
    <div>
      <SnowfallComponent />
      <label htmlFor="pageSelect">Select Page:</label>
      <select id="pageSelect" onChange={handlePageChange}>
        <option value="">Select</option>
        <option value="page1">Page 1</option>
        <option value="page2">Page 2</option>
      </select>

      {redirectToPage()}
    </div>
  );
};

export default RedirectPage;


// const [todos, setTodos] = useState<string[]>([""])
// const [inputValue, setInputValue] = useState("")

// const handleInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
//   setInputValue(event.target.value)
// }

// const handleAddTodo = () => {
//   setTodos([...todos, inputValue])
//   setInputValue("")
// }

// const deleteTodo = (index:number) => {
//   const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]
//   setTodos(newTodos)
// }

// {todos.map((todo, index) => (
//   <li></li>
// ))}