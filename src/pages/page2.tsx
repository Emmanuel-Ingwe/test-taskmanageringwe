import React from 'react'
import SnowfallComponent from '../../component/snowflake'
import Linearr from "../../component/linearr"
import Modall from "../../component/modall"


type Props = {}

const page1:React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className="m-10 text-2xl xl:text-3xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Shuga</span></h1>
        <Linearr />
        <div className="mt-11 flex items-center justify-center animate-bounce">
         <Modall />
        </div>
      </div>

      <div className="absolute bottom-0">
        <div
          className='bg-gay-900 text-xs flex flex-col items-center mb-2 justify-center font-semibold text-gray-700'>
          <h4 className="text-gray-700">
            {" "}
            <small className='text-xs'> &copy; </small>2023
          </h4>
          <p>
          Designed & created by E.i
          </p>
        </div>
      </div>
    </div>
  )
}

export default page1