import React from 'react'
import { useRouter } from 'next/router';
import SnowfallComponent from '../../component/snowflake'
import { useEffect, useState } from 'react';


type Props = {}

const page1:React.FC = () => {
    const router = useRouter();
    const [submittedValue, setSubmittedValue] = useState<string | null>(null);

    useEffect(() => {
      // Retrieve the input value from the query parameters
      const inputValue = router.query.inputValue;
      if (inputValue && typeof inputValue === 'string') {
        setSubmittedValue(inputValue);
      }
    }, [router.query.inputValue]);


  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <SnowfallComponent />
      <div className="">
        <h1 className="m-10 text-4xl font-bold tracking-wide animate-pulse text-green-600">Merry Christmas <span className='text-red-800'>Top G</span></h1>
        {submittedValue && <p>Input value submitted: {submittedValue}</p>}
      </div>
    </div>
  )
}

export default page1