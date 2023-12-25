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
          <Link href={selectedPage}>Go to {selectedPage}</Link>
        </Link>
      );
    }
    return null;
  };

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className=" text-5xl tracking-widest animate-bounce">Merry Christmas</h1>
      </div>
      <label htmlFor="pageSelect">choose your Gender</label>
      <select className=' outline-none bg-black' id="pageSelect" onChange={handlePageChange}>
        <option value="">Select &hearts;</option>
        <option value="page1">Male</option>
        <option value="page2">Female</option>
      </select>

      
      <h1>{redirectToPage()}</h1>
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