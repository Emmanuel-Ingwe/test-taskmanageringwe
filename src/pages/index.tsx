import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import SnowfallComponent from '../../component/snowflake'


const RedirectPage: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>('');

  const handlePageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPage(event.target.value);
  };

  const redirectToPage = () => {
    if (selectedPage) {
      return (
        <Link href={`/${selectedPage}`}>
          <Link href={selectedPage}>Enter here</Link>
        </Link>
      );
    }
    return null;
  };

  return (
    <div className='flex flex-col items-center justify-center m-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className=" text-3xl font-bold tracking-widest animate-bounce mb-16">Still with the Christmas spirit...</h1>
      </div>
      <div className="flex flex-col m-7">
      </div>
      <label htmlFor="pageSelect">Please select your field</label>
      <select className=' outline-none bg-black' id="pageSelect" onChange={handlePageChange}>
        <option value="" className=''>Select &hearts;</option>
        <option value="page1">Male</option>
        <option value="page2">Female</option>
      </select>
      <h1 className='mt-3 font-semibold hover:text-red-800'>{redirectToPage()}</h1>
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