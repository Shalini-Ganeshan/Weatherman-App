import React from 'react'
import Image from 'next/image';
import Loading from '../Loading.gif'
const Spinner = () => {
  return (
    <div>
        <Image src={Loading} className='w-[200px] m-auto block' alt="Loading..." />
      
    </div>
  )
}

export default Spinner
