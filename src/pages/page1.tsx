import React from 'react'
import { useRouter } from 'next/router';
import SnowfallComponent from '../../component/snowflake'
import { useInput } from "@/contexts/inputContext";


type Props = {}

const page1:React.FC = () => {
    const { inputValue } = useInput();
    


  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className="m-10 text-4xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Top G</span></h1>
        {inputValue && <p>Input value submitted: {inputValue}</p>}
      </div>
    </div>
  )
}

export default page1