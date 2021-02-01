import Image from 'next/image'

export default function Product({ id, name, img, children }) {
  return (
    <div
      id={id}
      className='flex flex-col items-center w-full shadow-xl border-2 border-s-darkblue lg:flex-row'
    >
      <div className='w-full h-full flex justify-center items-center lg:w-2/5'>
        <Image src={img} width='600' height='400' />
      </div>
      <div className='w-full flex flex-col space-y-8 bg-s-darkblue text-white px-4 py-8 lg:py-20 lg:px-20 lg:w-3/5'>
        <h2 className='uppercase text-2xl font-medium tracking-wider text-center lg:text-left'>
          {name}
        </h2>
        {children}
      </div>
    </div>
  )
}
