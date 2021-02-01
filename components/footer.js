import UpButton from './up-button'

const Heading = ({ text }) => (
  <h5 className='uppercase text-lg font-medium tracking-widest flex justify-center items-center mb-6 lg:justify-start'>
    <span className='w-4 h-4 bg-s-yellow mr-4'></span>
    {text}
  </h5>
)

const SubHeading = ({ text }) => (
  <h6 className='text-s-gray uppercase text-xs tracking-extra-wide mb-1'>
    {text}
  </h6>
)

const ContactSection = ({ heading, children }) => (
  <section>
    <SubHeading text={heading} />
    <div className='hover:text-s-yellow transition-colors'>{children}</div>
  </section>
)

export default function Footer({ visibleSection }) {
  return (
    <footer>
      <div className='flex flex-col justify-center items-center text-center py-12 bg-s-darkblue text-white lg:py-24 lg:text-left'>
        <div className='flex flex-col justify-between space-y-12 lg:flex-row lg:space-y-0 lg:space-x-48'>
          <div>
            <Heading text='About Us' />
            <div className='w-64 text-sm tracking-widest'>
              Barnwal Micanite Industries is a world renowned manufacturer of
              mica related products of highest quality. Our product range
              comprises of electrical and high temperature insulation solutions.
            </div>
            <div className='mt-4 text-sm flex flex-col space-y-2 tracking-wide lg:mt-6'>
              <p>
                <span className='text-s-gray'>Export IEC No.:</span> 1234567890
              </p>
              <p>
                <span className='text-s-gray'>GST No.:</span> 1234567890
              </p>
            </div>
          </div>
          <div>
            <Heading text='Contact Us' />
            <div className='flex flex-col space-y-6'>
              <ContactSection heading='Phone No.'>
                <a href={`tel:+919543210162`}>+91 954 321 0162</a>
              </ContactSection>
              <ContactSection heading='Address'>
                <>
                  <p>Buxidih Road, Giridih</p>
                  <p>Jharkhand, India 815301</p>
                </>
              </ContactSection>
              <ContactSection heading='E-mail'>
                <a href='mailto:contact@barnwalmicanite.com'>
                  contact@barnwalmicanite.com
                </a>
              </ContactSection>
            </div>
          </div>
          <div>
            <Heading text='Useful Links' />
            <div className='flex flex-col space-y-6'>
              <a href='/#' className='hover:text-s-yellow transition-colors'>
                Home
              </a>
              <a
                href='/#about'
                className='hover:text-s-yellow transition-colors'
              >
                About Us
              </a>
              <a
                href='/#products'
                className='hover:text-s-yellow transition-colors'
              >
                Products
              </a>
              <a
                href='/#contact'
                className='hover:text-s-yellow transition-colors'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='py-10 text-sm tracking-wider text-s-gray text-center bg-s-darkgray'>
        &copy; 2021 Barnwal Micanite Industries, All Rights Reserved.
      </div>
      <UpButton visibleSection={visibleSection} />
    </footer>
  )
}
