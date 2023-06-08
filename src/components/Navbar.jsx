import {logo} from '../assets'
import {navLinks} from '../constants'
import {Button, Sidebar} from '../components'

const Navbar = () => {
  return (
    <nav
      className='w-full flex py-6 justify-between items-center'>
        <img 
          src={logo} 
          alt="Meals"
          className='w-[166px] h-[37px]' />
        
        <ul 
        className="list-none sm:flex hidden items-center">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-[color:var(--wineRed)] hover:transition hover:duration-500  group ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
              <a href={`#${nav.id}`}>
                {nav.title}
                <div className="absolute w-[40px] h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
              </a>
            </li>
          ))}
      </ul>

      <ul
        className="list-none sm:flex hidden items-center gap-[20px]">
          <div className="flex gap-[24px]">
            <img src="" alt="Search bar" />
            <img src="" alt="Search bar" />
          </div>
          <a href="#">Sign In</a>
          <Button 
            styles={`w-[157px] h-[54px] bg-secondary`}
            text='Create Account'/>
      </ul>

      <div 
        className={`sm:hidden flex flex-1 justify-end items-center`}>
          <img src="" alt="Cart" />
          <Sidebar />         
      </div>
      </nav>
  )
}

export default Navbar