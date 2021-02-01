const UpButton = ({ visibleSection }) => (
  <button
    className='fixed text-3xl font-medium w-10 h-10 z-40 flex justify-center items-center bg-white text-s-blue hover:text-s-d-blue shadow hover:shadow-xl'
    style={
      visibleSection === 'home'
        ? { right: '3vw', bottom: '5vh', visibility: 'hidden' }
        : { right: '3vw', bottom: '5vh', visibility: 'visible' }
    }
    onClick={() => {
      window.scrollTo(0, 0)
    }}
    aria-label='Go to Top'
  >
    &uarr;
  </button>
)

export default UpButton
