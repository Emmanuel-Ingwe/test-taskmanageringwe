import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {



  return (
    <>
      <section className='flex items-center justify-center mt-9'>
        <div className="flex flex-col items-center justify-center">
          <div className="uppercase text-green-500 mb-10"><h1 className='text-2xl'>Todo App <span className='text-yellow-500'>2.0</span></h1></div>

          <div className="">
            <input type="text" placeholder='type todo' className='p-3 rounded outline-none text-black' />

            <button
             type="submit"
            className='bg-blue-500 p-3 rounded m-2'
            // onClick={}
            >add todo</button>

            <ul className='m-2 bg-cyan-400 rounded p-3'>
              
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