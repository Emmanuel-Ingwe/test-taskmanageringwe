import React from 'react'
import SnowfallComponent from '../../component/snowflake'


type Props = {}

const page2 = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
    <SnowfallComponent />
    <div className="m-10">
      <h1 className="text-4xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Shuga</span></h1>
      <p className="mt-7 text-center">Reveal Your 2024 Horizons</p>
    </div>
  </div>
  )
}

export default page2