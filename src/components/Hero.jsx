import styles from "../style"
import {Button, ChatBtn} from "../components"
import {jellofRice, logo} from "../assets"

const SearchBar = () => (
  <div 
    className="flex h-[54px] border border-[E6E6E6] outline-none rounded-md box-shadow-search relative">
      <img 
        src="" 
        alt="ic"
        className="absolute top-3 left-1" />
      <input 
        type="text"
        placeholder="Search for meal"
        className="w-full py-[15px] px-[16px] pl-[34px]" />
  </div>
)

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} md:bg-white bg-secondary relative`}>
      {/* Details */}
      <div 
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-10`}>
          {/* Heading */}
          <h1
            className="flex-1 sm:w-[342px] md:w-fit md:leading-[72px] sm:leading-[36px] md:font-bold sm:font-normal text-[28px] md:text-[64px] md:text-[#1A1A1A] text-white font-poppins md:mb-[0] mb-2">
              Delicious meals at <br className="sm:block hidden"/> your convenience
          </h1>
          <p
            className="md:text-[#13254A] text-white md:leading-[26px] leading-[17px] opacity-70 md:text-lg text-xs mix-blend-normal md:mb-[37px] mb-[11px]">Order your meals from us and we will have it <br className="sm:block hidden"/> delivered at your doorstep.</p>
            <Button 
            styles={`w-[325px] h-[54px] bg-secondary ss:block hidden`}
            text='Get Started'/>
          <div className="w-[342px] h-[81px] flex flex-col gap-[10px] sm:hidden">
            <p
              className="text-[14px] leading-[22.4px] text-white font-medium">
              Instant Order
            </p>
            <SearchBar />
          </div>
      </div>
      {/* Image */}
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className="w-[350px] h-[350px] border-[4px] border-secondary rounded-full ss:flex hidden justify-center items-center relative">
          <img 
            src={jellofRice} 
            alt="HeroImg"
            className="w-[300px] h-[300px] rounded-full box-shadow-hero" />  
        </div>
          <ChatBtn 
            styles='self-end ml-2 mt-[10px] ss:flex hidden'/>
        <img 
            src={jellofRice} 
            alt="HeroImg"
            className="w-[300px] h-[300px] rounded-full ss:hidden flex z-[5]" />
      </div>
      <div className="w-[250px] h-[176px] ss:hidden absolute -top-[60px] -left-[60px] linear-gradient-hero -rotate-45"></div>
      <div className="w-[350px] h-[86px] ss:hidden absolute top-[350px] -right-[80px] linear-gradient-hero -rotate-45"></div>
  </section>
)

export default Hero