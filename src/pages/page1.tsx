import React from 'react'
import SnowfallComponent from '../../component/snowflake'

type Props = {}

const page1 = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className=" text-5xl tracking-widest animate-bounce">Merry Christmas</h1>
      </div>
      <label htmlFor="pageSelect">choose your Gender</label>
    </div>
  )
}

export default page1