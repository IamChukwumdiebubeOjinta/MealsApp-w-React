import {useState} from 'react'
import { jellofRice } from '../assets'
import { menuContent, menuPage } from '../constants'
import styles from '../style'


const Page = () => {
  const [btnState, setBtnState] = useState({
    activeBtn: null,
    objects: []
  })
  const toggleBtn = (index) => {
    setBtnState({...btnState, activeBtn: btnState.objects[index]})
  }
  return (
    <ul className="flex h-[40px] items-center sm:justify-center justify-start p-1 sm:gap-2 gap-[6px] cursor-pointer rounded-lg border border-[#EBEBEB]">
    {menuPage.map((page, index) => (
      <li
        key={index}
        onClick={() => (toggleBtn())}
        className={`h-8 px-2 py-1 transition-[500ms]  active:bg-secondary font-poppins active:text-white rounded-lg`}>
        {page.title}
      </li>
    ))}
  </ul>
  )
}

const Menu = () => {
  return (
    <section className={`${styles.paddingY} sm:mb-20 mb-6`}>
      <p
        className='sm:mb-[16px] mb-2 text-[14px] tracking-[0.0125em] text-secondary sm:leading-[22px] sm:font-bold font-poppins cursor-default'>MENU</p>
      <div className="sm:mb-[40px] mb-2 flex sm:flex-row flex-col justify-between">
      <h2
        className='sm:text-[48px] text-[24px] tracking-[0.0125em] text-[#041210] sm:leading-[22px] sm:font-bold font-poppins'>Current menu</h2>

        <Page />
      </div>
      <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 gap-[19px]`}>
        {/* Card */}
        <div className="w-[360px] h-[458px] box-shadow-sm rounded-xl flex flex-col">
          <div className="w-full h-[280px]">
            <img 
              src={jellofRice} 
              alt="item" />
          </div>
          <div className="flex flex-grow flex-col gap-2 px-[31px] pt-[19px] pb-[13px]">
            <h2
              className='text-[20px] leading-8 text-[#4D4D4D] font-poppins font-bold'>Chicken</h2>
            <p
              className='text-sm leading-[22px] text-[#999999] font-normal font-poppins mb-[19px]'>Something said</p>
            <p
              className='text-[24px] leading-8 font-medium font-poppins text-[#666666]'>Price</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu