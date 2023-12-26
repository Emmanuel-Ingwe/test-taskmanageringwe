import React from 'react'
import SnowfallComponent from '../../component/snowflake'

type Props = {}

const page1:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className="m-10 text-4xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Top G</span></h1>
      </div>
    </div>
  )
}

export default page1