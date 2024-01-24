import { useState, ChangeEvent, ReactEventHandler } from 'react';
import Link from 'next/link';
import SnowfallComponent from '../../component/snowflake'
import Form from '../../component/form'


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
          <h1 className="text-2xlll text-2xll xl:text-3xl font-bold tracking-widest animate-bounce mb-14">Still with the Christmas spirit...</h1>
        </div>
        <div className="flex flex-col m-7">
        </div>
        <label htmlFor="pageSelect" className='mb-3 label labell text-cyan-100'>Please select gender</label>
        <select className='text-xll text-xlll text-xl outline-none bg-black' id="pageSelect" onChange={handlePageChange}>
          <option value="" className=''>Select &hearts;</option>
          <option value="page1">Male</option>
          <option value="page2">Female</option>
          <option value="pagee">Not here?</option>
        </select>
        <h1 className='mt-3 text-xl font-bold underline text-red-300 hover:text-red-800'>{redirectToPage()}</h1>
  
        {/* <Form /> */}
      </div>
    );
  };
  
  export default RedirectPage;




//   const [ todos, setTodos ] = useState<string[]>([])
// const [ inputValue, setInputValue ] = useState("")

// const handleAddTodo = () => {
//   setTodos([...todos, inputValue])
//   setInputValue("")
// }

// const handleInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
//   setInputValue(event.target.value)
// }

// const deleteTodo = (index:number) => {
//   const newTodo = [...todos.slice(0, index), ...todos.slice(index +1)]
//   setTodos(newTodo)
// }

// return (
//       <div>
//           <input value={inputValue} onChange={handleInputValue} type="text" className='bg-black' />
  
//           <input type='submit' onClick={handleAddTodo}/>
  
//           <ul>
//           {todos.map((todo, index) => (
//             <li className='flex items-center justify-between w-[100px]' key={index}>{todo}
//             <button onClick={() => (deleteTodo(index))}>del</button>
//             </li>
//             ))} 
//           </ul>
//       </div>
//     )
//   }
  
//   export default RedirectPage


const [ todos, setTodos ] = useState<string[]>([])
const [inputValue, setInputValue] = useState("")

const handleInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value)
}
const handleAddTodo = () => {
  setTodos([...todos, inputValue])
  setInputValue("")
}

const deleteTodo = (index:number) => {
  const newTodo = [...todos.slice(0, index), ...todos.slice(index -1)]
  setTodos(newTodo)
}

{
  // todos.map((todo, index) => (

  // ))
}