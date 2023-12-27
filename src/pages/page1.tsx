import React from 'react'
import SnowfallComponent from '../../component/snowflake'
import Linear from "../../component/linear"
import Modal from "../../component/modal"


type Props = {}

const page1:React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className="m-10 mb-8 text-2xl xl:text-3xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Top G</span></h1>
        <Linear />
        <div className="mt-11 flex items-center justify-center animate-bounce">
         <Modal />
        </div>
      </div>
    </div>
  )
}

export default page1