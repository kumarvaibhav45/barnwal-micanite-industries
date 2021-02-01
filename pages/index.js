import { useState, useEffect, useRef } from 'react'
import About from '../components/about'
import Banner from '../components/home'
import Layout from '../components/layout'
import Products from '../components/products'
import Contact from '../components/contact'

export default function Home() {
  const [visibleSection, setVisibleSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = [
    { section: 'home', ref: homeRef },
    { section: 'about', ref: aboutRef },
    { section: 'products', ref: productsRef },
    { section: 'contact', ref: contactRef },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    let options = {
      root: null,
      threshold: 0.9,
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    sectionRefs.forEach(
      ({ ref }) => ref.current && observer.observe(ref.current)
    )

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sectionRefs.forEach(
        ({ ref }) => ref.current && observer.unobserve(ref.current)
      )
    }
  }, [homeRef, aboutRef, productsRef, contactRef])
  
  return (
    <Layout visibleSection={visibleSection} scrolled={scrolled}>
      <Banner ref={homeRef} id={sectionRefs[0].section} />
      <About ref={aboutRef} id={sectionRefs[1].section} />
      <Products ref={productsRef} id={sectionRefs[2].section} />
      <Contact ref={contactRef} id={sectionRefs[3].section} />
    </Layout>
  )
}
