import Link from 'next/link'
import { forwardRef } from 'react'
import Slider from 'react-slick'

const slidesData = [
	// {
	// 	id: '1',
	// 	productName: 'Mica slip plane',
	// 	img: '/slip-plane.jpeg',
	// 	productText: 'Essential for induction furnaces'
	// },
	// {
	// 	id: '2',
	// 	productName: 'Flexible mica sheet',
	// 	img: '/mica-sheet.jpg',
	// 	productText: 'Used for shunt insulation'
	// },
	{
		id: '3',
		productName: 'Mica tape',
		img: 'mica-tape.jpeg',
		productText: 'Ideal for high voltage insulation'
	}
]

const Slide = ({ img, productName, productText }) => (
  <div className='relative w-full h-full z-10 flex flex-col-reverse justify-center items-center text-center lg:items-start lg:text-left overflow-hidden lg:flex-row' style={{height: '61.6vh'}}>
    <div className='flex-1 w-full py-2 flex flex-col justify-center items-center space-y-2 md:space-y-4 px-2 lg:px-0 lg:pl-40 bg-gray-400 lg:items-start lg:space-y-8 lg:w-auto lg:h-full lg:py-0'>
    	<div>
	      <div className='w-32 h-px bg-white mb-2 mx-auto md:mb-4 lg:mx-0 lg:mb-6'></div>
	      <h1 className='text-3xl font-light tracking-wider leading-snug uppercase text-white lg:text-5xl'>
	        {productName}
	      </h1>
	    </div>
	    <h2 className='text-s-yellow uppercase text-base tracking-widest font-medium lg:text-lg'>
	      {productText}
	    </h2>
	    <Link href='/#contact'>
	      <a className='px-6 py-4 bg-s-blue text-white uppercase font-medium tracking-widest text-base transition-color duration-200 hover:text-s-darkblue hover:bg-s-yellow lg:px-8 lg:py-6'>
	        Get in Touch
	      </a>
	    </Link>
    </div>
    <div className='flex-1 w-full overflow-hidden bg-white bg-contain bg-center bg-no-repeat lg:w-auto lg:h-full' style={{ backgroundImage: `url(${img})`}}></div>
  </div>
)

const Carousel = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 6000,
    cssEase: 'linear',
    pauseOnHover: false,
    appendDots: (dots) => (
      <div style={{position: 'absolute', bottom: '-30px'}}>
        <ul className='m-0'>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-4 h-1 border border-s-blue hover:bg-s-blue mr-1 focus:outline-none lg:w-6 lg:h-1.5 lg:mr-1.5'></div>
    ),
  }
  return (
    <div className='h-full'>
      <Slider {...settings}>
        {
        	slidesData.map(({id, productName, img, productText}) => <Slide key={id} img={img} productName={productName} productText={productText} />)
        }
      </Slider>
    </div>
  )
}

const Banner = forwardRef(({ id }, ref) => {
  return (
    <div
      id={id}
      ref={ref}
      className='w-full flex flex-col items-center relative'
      style={{ height: '75vh' }}
    >
      <div className='bg-s-d-blue w-full text-white flex-1'></div>
      <div className='bg-transparent w-full h-8 lg:h-20'></div>
      <div className='absolute top-24 h-5/6 w-5/6 bg-gray-300 text-blue border-t-8 border-s-yellow shadow-lg lg:top-32 lg:mt-1'>
       <Carousel />
       </div>
    </div>
  )
})

export default Banner
