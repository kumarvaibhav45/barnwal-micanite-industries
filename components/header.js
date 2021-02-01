import Image from 'next/image'
import { useState } from 'react'
import NavItem from './nav-item'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const menuItem = [
  { id: '1', name: 'home', ref_id: 'home' },
  { id: '2', name: 'about', ref_id: 'about' },
  { id: '3', name: 'products', ref_id: 'products' },
  { id: '4', name: 'contact', ref_id: 'contact' },
]

const MenuIcon = ({ menuOpen, setMenuOpen }) => (
  <button
    className={`flex flex-col space-y-2 mx-3 group relative w-12 h-10 focus-within:outline-none lg:hidden`}
    aria-label='menu icon'
    onClick={() => {
      setMenuOpen(!menuOpen)
    }}
  >
    <span
      className='mt-2 block absolute h-px w-1/2 bg-white opacity-100 transition-all duration-300 ease-in-out left-0 top-0 group-hover:bg-s-blue'
      style={
        menuOpen ? { left: '5px', top: '4px', transform: 'rotate(45deg)' } : {}
      }
    ></span>
    <span
      className='mt-2 block absolute h-px w-1/2 bg-white opacity-100 transition-all duration-300 ease-in-out left-1/2 top-0 group-hover:bg-s-blue'
      style={
        menuOpen
          ? { left: 'calc(50% - 5px)', top: '4px', transform: 'rotate(-45deg)' }
          : {}
      }
    ></span>
    <span
      className={`block absolute h-px w-1/2 bg-white transition-all duration-300 ease-in-out top-3 group-hover:bg-s-blue ${
        menuOpen ? '-left-1/2 opacity-0' : 'left-0 opacity-100'
      }`}
    ></span>
    <span
      className={`block absolute h-px w-1/2 bg-white transition-all duration-300 ease-in-out top-3 group-hover:bg-s-blue ${
        menuOpen ? 'left-full opacity-0' : 'left-1/2 opacity-100'
      }`}
    ></span>
    <span
      className='block absolute h-px w-1/2 bg-white opacity-100 transition-all duration-300 ease-in-out left-0 top-6 group-hover:bg-s-blue'
      style={
        menuOpen
          ? { left: '5px', top: '18px', transform: 'rotate(-45deg)' }
          : {}
      }
    ></span>
    <span
      className='block absolute h-px w-1/2 bg-white opacity-100 transition-all duration-300 ease-in-out left-1/2 top-6 group-hover:bg-s-blue'
      style={
        menuOpen
          ? { left: 'calc(50% - 5px)', top: '18px', transform: 'rotate(45deg)' }
          : {}
      }
    ></span>
  </button>
)

export default function Header({ scrolled, visibleSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`bg-s-d-blue text-white shadow-xl justify-center transition-all duration-500 fixed w-full top-0 left-0 py-4 z-50 ${
        scrolled ? '' : 'lg:py-10 lg:shadow-none'
      }`}
    >
      <div className='flex justify-between items-center relative lg:justify-center lg:space-x-72'>
        <div className='flex items-center'>
          <MenuIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div
            title='logo'
            className='uppercase font-extrabold text-base tracking-wider hidden md:block lg:text-2xl'
          >
            <Link href='/#'>
              <a className='flex items-center'>
                <span className='w-10 h-10 m-0 p-0 mr-2'>
                  <Image src='/logo.svg' width='400' height='400' />
                </span>
                Barnwal Micanite Industries
              </a>
            </Link>
          </div>
          <div
            title='logo'
            className='uppercase font-extrabold text-base tracking-wider md:hidden'
          >
            <Link href='/#'>
              <a className='flex items-center'>
                <span className='w-10 h-10 m-0 p-0 mr-2'>
                  <Image src='/logo.svg' width='400' height='400' />
                </span>
                Barnwal Micanite Ind.
              </a>
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-between absolute top-14 z-40 text-s-darkblue left-0 bg-white shadow-2xl w-64 transition-all duration-300 lg:flex lg:visible lg:static lg:w-auto lg:t-0 lg:bg-transparent lg:text-white lg:shadow-none lg:flex-row lg:space-x-10 ${
            menuOpen ? 'visible' : '-left-full invisible'
          } ${styles.menuList}`}
        >
          <nav className='flex items-center flex-col justify-evenly space-y-10 mt-8 uppercase text-sm tracking-widest font-medium lg:flex-row lg:space-y-0 lg:space-x-10 lg:mt-0'>
            {menuItem.map(({ id, name, ref_id }) => (
              <NavItem
                key={id}
                name={name}
                ref_id={ref_id}
                visibleSection={visibleSection}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
            ))}
          </nav>
          <div className='flex flex-col items-center justify-center space-y-8 mb-16 lg:flex-row lg:space-y-0 lg:space-x-8 lg:mb-0'>
            <div className='flex flex-col justify-center items-center space-y-2 lg:items-start'>
              <p className='text-s-darkblue hover:text-s-blue transition-colors duration-200 lg:text-white'>
                <a href={`tel:+919543210162`}>+91 954 321 0162</a>
              </p>
              <p className='text-gray-400 text-sm hover:text-s-blue transition-colors duration-200'>
                <a href='mailto:contact@barnwalmicanite.com'>
                  contact@barnwalmicanite.com
                </a>
              </p>
            </div>
            <div onClick={() => {setMenuOpen(!menuOpen)}}>
              <Link href='/#contact'>
                <a className='uppercase font-medium tracking-widest border-2 border-s-darkblue px-6 py-3 hover:bg-s-blue hover:border-s-blue hover:text-white transition-colors duration-200 lg:border-white'>
                  Get a quote
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
