import {useState} from 'react'
import {Button} from '../components'
import { navLinks } from '../constants';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <>
        {!toggle ? (
            <button 
            id="menu-btn" 
            className={`hamburger focus:outline-none ${toggle ? 'open' : ''} z-10`}
            onClick={() => setToggle((prev) => !prev)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
          </button>
        ) : (
            <button 
                id="menu-btn" 
                className={`hamburger focus:outline-none fixed ${toggle ? 'open' : ''} z-10`}
                onClick={() => setToggle((prev) => !prev)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
                </button>
        )}
            <div className={`top-0 right-0 fixed w-full h-full bg-white ${toggle ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-500`}>
                <div className="w-[250px] mt-[117px] ml-[32px]">
                    {/* Buttons */}
                    <div className=" flex items-center gap-[10px] mb-[33px]">
                        <Button 
                            styles={`w-[139px] h-[54px] bg-secondary px-[12px]`}
                            text='Create Account'/>
                        <Button 
                            styles={`w-[90px] h-[54px] border-secondary border-[1px] text-black`}
                            text='Sign In'/>        
                    </div>

                    <ul
                        className='list-none flex flex-col justify-center items-start flex-1 '>
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-normal py-4 pl-2 h-12 rounded-xl cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                                    <a 
                                        href={`#${nav.id}`}
                                        className='flex gap-[24px]'>
                                        <img src="" alt="icon" />
                                        {nav.title}
                                        </a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
    </>
  )
}

export default Sidebar