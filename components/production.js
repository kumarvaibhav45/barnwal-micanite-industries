import Slider from 'react-slick'
import SectionHeading from './heading'

const Slide = ({ img }) => (
  <div
    className='h-full w-full flex justify-center items-center production'
    style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}
  ></div>
)

export default function Production({}) {
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
      <div style={{ position: 'absolute', bottom: '-40px' }}>
        <ul className='m-0'>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className='w-4 h-1 border border-s-blue hover:bg-s-blue mr-1 focus:outline-none lg:w-8 lg:h-2 lg:ml-4'></div>
    ),
  }
  return (
    <div className='py-16 w-full h-full'>
      <SectionHeading text='Our production' />
      <div className='mx-10 w-auto lg:w-4/6 lg:mx-auto h-full text-s-blue text-5xl shadow-2xl'>
        <style>{cssStyle}</style>
        <Slider {...settings}>
          <Slide text='1' img='/1.JPG' />
          <Slide text='2' img='/2.JPG' />
          <Slide text='3' img='/3.JPG' />
        </Slider>
      </div>
    </div>
  )
}

const cssStyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`
