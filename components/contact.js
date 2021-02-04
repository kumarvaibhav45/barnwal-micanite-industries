import { useState, useRef, forwardRef } from 'react'
import SectionHeading from './heading'

const Contact = forwardRef(({ id }, ref) => {
  const [formMessage, setformMessage] = useState('')
  const formRef = useRef(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setformMessage('Sending...')
    const url = 'api/form'
    const { name, email, phone, message } = e.target
    const user = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
            setformMessage('')
          }, 4000)
        if (res.message !== 'Success') {
          setformMessage("Sorry! Your message couldn't be sent.")
        } else {
          setformMessage('Thank you for contacting us.')
          Array.from(formRef.current.querySelectorAll('input')).forEach(
            (input) => (input.value = '')
          )
          formRef.current.querySelector('textarea').value = ''
        }
      })
  }


  return (
    <div
      id={id}
      ref={ref}
      className='py-16 relative text-center lg:text-left lg:pt-24'
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/contact.jpg)',
        backgroundPosition: 'center center',
      }}
    >
      <div className='relative z-10'>
        <SectionHeading text='Request a Quote' color='white' />
        <div className='text-center text-s-darkblue lg:text-left lg:ml-80 lg:pl-8'>
          <form method='POST'
                  name='contact'
                  title='contact' ref={formRef} onSubmit={onSubmitHandler} className='flex flex-col justify-between items-center space-y-8 lg:items-start'>
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
              name='phone'
              placeholder='Your Contact Number...'
            />
            <textarea
              className='px-2 py-4 w-80 h-60 resize-none shadow-lg lg:w-96 lg:px-4'
              name='message'
              placeholder='Your Message...'
            ></textarea>
            <button
              type='submit'
              disabled={formMessage === 'Sending...'}
              className='uppercase font-medium text-xl tracking-widest text-white px-12 py-5 bg-s-blue hover:bg-s-yellow transition-colors duration-300 hover:text-s-darkblue hover:shadow-md'
            >
              Send
            </button>
          </form>
          <div className='flex justify-center mt-10 h-8 lg:justify-start'>
            <p className={`bg-s-yellow text-s-darkblue p-1 transition-all duration-200 ${formMessage ? 'visible opacity-1' : 'invisible opacity-0'}`}>
              {formMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Contact
