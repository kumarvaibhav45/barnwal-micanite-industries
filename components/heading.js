const SectionHeading = ({ text, color = 'black' }) => (
  <h1
    className={`flex justify-center w-full items-center uppercase text-2xl font-medium tracking-extra-wide text-${color} mb-8 mx-0 lg:mb-16 lg:justify-start`}
  >
    <span className='w-0 h-px bg-gray-400 lg:mr-10 lg:w-80'></span>
    {text}
  </h1>
)

export default SectionHeading
