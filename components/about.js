import { useState, forwardRef } from 'react'
import Link from 'next/link'
import SectionHeading from './heading'
import AboutButton from './about-button'

const aboutData = [
  {
    id: '1',
    title: 'We have 20 plus years experience in the insulation industry',
    desc:
      'Since 1994, we have been supplying the world with high-quality Mica products and insulation solutions designed to last for years.',
  },
  {
    id: '2',
    title: 'Quality from start to finish',
    desc:
      'We are dedicated to providing absolute best quality to all our customers. No matter what you use our insulation products for, you won’t regret.',
  },
  {
    id: '3',
    title: 'Employees are continually trained on safety',
    desc:
      'Our huge, experienced, and friendly team is constantly trained to match the industry safety standards. Every one of us makes sure to strictly follow the safety measures.',
  },
  {
    id: '4',
    title: 'Support for our customers',
    desc:
      'We strive to provide our customers with cost effective solutions that enhances their projects and are right fit for their businesses.',
  },
]

const About = forwardRef(({ id }, ref) => {
  const [openButton, setOpenButton] = useState(false)
  const setOpen = (id) => {
    if (openButton === id) {
      setOpenButton(false)
    } else {
      setOpenButton(id)
    }
  }

  return (
    <div id={id} ref={ref} className='py-16 text-center lg:text-left lg:pt-24'>
      <SectionHeading text='About Our Company' />
      <div className='flex flex-col w-3/5 mx-auto my-10 divide-y-2 space-y-8 divide-s-darkgray text-s-darkblue lg:flex-row lg:divide-y-0 lg:divide-x-2 lg:space-y-0 lg:space-x-20 lg:mb-20'>
        <div className='tracking-wider flex flex-col space-y-8 items-center text-left lg:flex-1 lg:items-start'>
          <p>
            Since our inception in 1994, Barnwal Micanite Industries is
            determined to provide the best products to their customers. Our
            skilled and dedicated workforce makes us outstanding as a
            manufaturing unit. With the help of some unique electrical and
            thermal properties of natural mica, our company develops specific
            electrical and thermal solutions catering to your needs.
          </p>
          <Link href='/#contact'>
            <a className='uppercase border-2 tracking-widest font-medium border-s-darkblue px-5 py-3 hover:bg-s-yellow hover:border-s-yellow'>
              Get In Touch
            </a>
          </Link>
        </div>
        <div className='pt-8 lg:flex-1 lg:pt-0 lg:pl-20'>
          <h3 className='text-3xl font-bold tracking-wider uppercase mb-6'>
            Our product range:
          </h3>
          <ol className='list-disc flex flex-col space-y-4 text-lg list-inside text-left'>
            <li>
              <Link href='/#mica-slip-plane'>
                <a>Mica Slip Plane</a>
              </Link>
            </li>
            <li>
              <Link href='/#flexible-mica-sheet'>
                <a>Flexible Mica Sheet</a>
              </Link>
            </li>
            <li>
              <Link href='/#mica-tape'>
                <a>Mica Tape</a>
              </Link>
            </li>
          </ol>
          <div className='mt-6'>
            <Link href='/#products'>
              <a className='text-xl hover:underline transition duration-200'>
                See more in our products section &rarr;
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col w-full bg-s-darkblue text-white lg:flex-row'>
          <div
            className='w-full bg-gray-600 p-4 lg:flex justify-center items-center lg:w-1/2'
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/about.jpg)',
              backgroundPosition: 'center center',
            }}
          >
            <div
              className='mx-auto text-s-darkblue w-full border border-white z-30 flex justify-center items-center p-2 md:w-4/6 lg:h-5/6'
              style={{ maxWidth: '540px' }}
            >
              <div className='px-4 bg-white w-max h-full flex flex-col justify-center items-center text-center'>
                <div className='w-full h-32'></div>
                <p className='m-4 text-lg capitalize cursive'>
                  Proprietor's message...
                </p>
                <p className='tracking-wider text-sm'>
                  Each of us at Barnwal Micanite Industries is completely
                  dedicated to providing the absolute best quality to all our
                  customers. We thrive to become a world renowned corporation in
                  the field of mica insulation solutions.
                </p>
                <p className='ml-auto tracking-wider text-sm font-medium mt-2 mb-4'>
                  -- M P Barnwal
                </p>
              </div>
            </div>
          </div>
          <div className='w-full pl-2 py-12 lg:w-1/2 lg:pl-24'>
            <h3 className='text-gray-500 uppercase text-xl tracking-widest flex items-center'>
              Why choose us
              <span className='ml-6 h-px flex-1 bg-gray-500'></span>
            </h3>
            <h2 className='uppercase text-3xl font-light tracking-wide mt-6 lg:text-5xl'>
              Our Advantages
            </h2>
            <div className='mt-6 flex flex-col space-y-4'>
              {aboutData.map(({ id, title = '', desc = '' }) => (
                <AboutButton
                  key={id}
                  id={id}
                  title={title}
                  desc={desc}
                  setOpen={setOpen}
                  open={openButton === id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
