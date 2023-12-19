import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo, setTodo] = useState();

  return (
    <>
      <section className='flex items-center justify-center'>
        <div className="uppercase"><h1>hello world</h1></div>

        <div className="">
          <input type="text" />
          <button type="submit">add todo</button>
        </div>
      </section>
    </>
  )
}












// first, call out the usestates functions
// then the addTodo function
// the todoInput function
// deleteTodo function