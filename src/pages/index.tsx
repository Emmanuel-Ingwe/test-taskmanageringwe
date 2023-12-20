import { Inter } from 'next/font/google'
import { ReactEventHandler, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [todos, setTodos] = useState<string[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleInputValue = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleAddTodo = () => {
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  const deleteTodo = () => {
    const newTodo = [...todos.slice(0, index)]
    setTodos(newTodo)
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

            <ul className='flex flex-col items-center mt-5 justify-center bg-cyan-400 rounded p-3'>
              {todos.map((todo, index) => (
                <div className="flex w-[50%] items-center justify-between">
                  <li key={index} className='text-2xl text-blue-950 bg-yellow-400 w-full p-2 rounded'>{todo}
                  </li>
                  <button onClick={deleteTodo} className='w-full bg-red-700 rounded p-3 m-2'>X</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}












// first, call out the usestates functions
// then the addTodo function
// the todoInput function
// deleteTodo function