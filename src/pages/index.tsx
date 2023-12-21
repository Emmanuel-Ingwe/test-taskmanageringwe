import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  
  const handleInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const deleteTodo = (index: number) => {
      const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
      setTodos(updatedTodos);
  }


  return (
    <>
      <section className='flex items-center justify-center mt-9'>
        <div className="flex flex-col items-center justify-center">
          <div className="uppercase text-green-500 mb-10"><h1 className='text-2xl'>Todo App <span className='text-yellow-500'>2.0</span></h1></div>

          <div className="">
            <input type="text" placeholder='type todo' value={inputValue} onChange={handleInputValue} className='p-3 rounded outline-none text-black' />

            <button
             type="submit"
            className='bg-blue-500 p-3 rounded m-2'
            onClick={handleAddTodo}
            >add todo</button>

            <ul className='m-2 bg-cyan-400 rounded p-3'>
              {todos.map((todo, index) => (
                <li className='flex items-center justify-between'>{todo}
                  <button
                  type="submit"
                  className='bg-red-700 p-3 rounded m-1'
                  onClick={() => deleteTodo(index)}
                  >delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}


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