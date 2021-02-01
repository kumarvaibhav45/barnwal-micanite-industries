import { forwardRef } from 'react'
import SectionHeading from './heading'

const About = forwardRef(({ id }, ref) => {
  return (
    <div
      id={id}
      ref={ref}
      className='py-16 relative text-center lg:text-left'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/contact.jpg)',
        backgroundPosition: 'center center',
      }}
    >
      <div className='relative z-10'>
        <SectionHeading text='Request a Quote' color='white' />
        <div className='text-center text-s-darkblue lg:text-left lg:ml-80 lg:pl-8'>
          <form className='flex flex-col justify-between items-center space-y-8 lg:items-start'>
            <input
              className='px-2 py-4 w-80 shadow-lg lg:w-96 lg:px-4'
              type='text'
              name='name'
              required
              placeholder='Your Name... *'
            />
            <input
              className='px-2 py-4 w-80 shadow-lg lg:w-96 lg:px-4'
              type='email'
              name='email'
              required
              placeholder='Your Email... *'
            />
            <input
              className='px-2 py-4 w-80 shadow-lg lg:w-96 lg:px-4'
              type='text'
              name='Phone'
              placeholder='Your Contact Number...'
            />
            <textarea
              className='px-2 py-4 w-80 h-60 resize-none shadow-lg lg:w-96 lg:px-4'
              placeholder='Your Message...'
            ></textarea>
            <button
              type='submit'
              className='uppercase font-medium text-xl tracking-widest text-white px-12 py-5 bg-s-blue hover:bg-s-yellow transition-colors duration-300 hover:text-s-darkblue hover:shadow-md'
            >
              Send
            </button>
          </form>
          <div className='flex justify-center lg:justify-start'>
            <p className='bg-s-yellow text-s-darkblue p-1 mt-10 transition-all duration-300'>
              Thank You for contacting us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
