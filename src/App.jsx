import styles from './style';
import { Navbar, Footer, Testimonials, Hero, Menu, Blog } from './components';


const App = () => (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter} box-shadow`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div> 

      {/* Hero Section */}
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        
        {/* TheRest Section */}
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Menu />
            <Testimonials />
            <Blog />
            <Footer /> 
          </div>
        </div>    
    </div>
);  

export default App
