import Link from 'next/link'

const NavItem = ({ name, ref_id, visibleSection, setMenuOpen, menuOpen }) => (
  <div
    onClick={() => {
      setMenuOpen(!menuOpen)
    }}
  >
    <Link href={name === 'home' ? '/#' : `/#${ref_id}`}>
      <a
        className='hover:text-s-blue transition-colors duration-200'
        style={visibleSection === ref_id ? { color: '#54c1e5' } : {}}
      >
        {name}
      </a>
    </Link>
  </div>
)

export default NavItem
