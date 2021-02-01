import Styles from '../styles/about-button.module.css'

export default function AboutButton({ id, title, desc, open, setOpen }){
	return (
		<div className={`flex flex-col w-5/6 lg:w-4/6 mx-auto lg:mx-0`}>
      <button
        className={`p-4 bg-s-semitrans font-medium flex items-center tracking-wider focus:outline-none relative ${
          Styles.button
        } ${open ? Styles.buttonClose : ''}`}
        onClick={() => setOpen(id)}
      >
        <span
          className={`mr-5 relative ${Styles.icon} ${
            open ? Styles.iconClose : ''
          }`}
        ></span>
        {title}
      </button>
      <p
        className={`mt-4 mx-2 text-sm text-gray-500 tracking-wider text-left ${
          Styles.animate
        } ${open ? Styles.open : ''}`}
      >
        {desc}
      </p>
    </div>
		)
}