import { motion } from 'framer-motion';
import { styles } from '../styles';
import { robot } from '../assets';

const Intro = () => {
  return (
    <div>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-col items-center justify-start gap-5`} >
          <div className={`${styles.heroHeadText}  flex flex-col justify-center items-center`}>
            <h1><span className="pink-text-gradient">A-Journey</span></h1>
            <p className={`${styles.heroSubText} mt-2`}>Chào bạn! Tham quan một vòng nhé!</p>
          </div>
          <div className='w-full h-1/2 flex flex-row iems-center justify-center'><img className="object-contain"src={robot} alt="robot" /></div>
      </div>
      <div className='absolute w-full xs:bottom-10 bottom-32 flex flex-row justify-center items-center '>
        <a>
            <motion.div            
              animate={{
                y: [0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}           
              >
                Lướt xuống
                <div className="flex flex-row justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                  </svg>
                </div>
              </motion.div>
        </a>
      </div>
    </div>
  )
}

export default Intro;