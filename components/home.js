import Link from 'next/link'
import { forwardRef } from 'react'

const Banner = forwardRef(({ id }, ref) => {
  return (
    <div
      id={id}
      ref={ref}
      className='w-full flex flex-col items-center relative'
      style={{ height: '75vh' }}
    >
      <div className='bg-s-d-blue w-full text-white flex-1'></div>
      <div className='bg-transparent w-full h-0.5 lg:h-20'></div>
      <div className='absolute top-32 h-5/6 w-5/6 bg-gray-300 text-blue border-t-8 border-s-yellow'>
        <div
          className='absolute inset-0 z-0 w-full'
          style={{
            backgroundColor: '#3c4958',
            backgroundImage:
              'linear-gradient(135deg, #3c4958 0%, #e8e3e8 100%)',
          }}
        ></div>
        <div className='relative h-full z-10 flex flex-col justify-center items-center text-center space-y-8 lg:items-start lg:ml-40'>
          <div>
            <div className='w-32 h-px bg-white mb-6 mx-auto lg:mx-0'></div>
            <h1 className='text-4xl font-light tracking-wider leading-snug uppercase text-white lg:text-5xl'>
              Mica slip plane
            </h1>
          </div>
          <h2 className='text-s-yellow uppercase text-base tracking-widest font-medium lg:text-lg'>
            Your Solution Partner
          </h2>
          <Link href='/#contact'>
            <a className='px-6 py-4 bg-s-blue text-white uppercase font-medium tracking-widest text-base transition-color duration-200 hover:text-s-darkblue hover:bg-s-yellow lg:px-8 lg:py-6'>
              Get in Touch
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
})

export default Banner
