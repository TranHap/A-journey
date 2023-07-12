import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from "../hoc";
const About = () => {
return (
  <div className="h-full mx-auto w-full flex flex-col gap-3">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giới thiệu</p>
        <h2 className={styles.sectionHeadText}>About us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-3-xl leading-[30px]"
      >
         A-journey được tạo ra với mục đích cho người dùng trải nghiệm một số ứng dụng từ trí tuệ nhân tạo, 
         từ đó giúp mọi người hiểu rõ thêm về lĩnh vực này. Khi nói về trí tuệ nhân tạo, thứ mọi người 
         thường tưởngg tượng đến là những cổ máy dạng người biết đi. Thế nhưng AI vẫn luônn hiện hữu
         trong cuộc sống thường ngày của chúng ta.

      </motion.p>
      
        <motion.div  className="flex flex-row flex-grow bg-tertiary  mt-10" variants={fadeIn("","", 0.5, 0.7)}>
          <iframe className="w-full h-full"
            src="https://www.youtube.com/embed/C_78DM8fG6E">
          </iframe>
        </motion.div>
        
    </div>
  
  )
}

export default SectionWrapper(About);
