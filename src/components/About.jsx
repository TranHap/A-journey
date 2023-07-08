import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant } from '../utils/motion';
import {SectionWrapper} from "../hoc";
const About = () => {
return (
  <div className="h-full mx-auto w-full flex flex-col gap-3">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mở đầu</p>
        <h2 className={styles.sectionHeadText}>About us</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-3-xl leading-[30px]"
      >
         Trang web là một dự án cho SteamHacks 2023. Mục đích của A-Journey là tổng hợp
         một số ứng dụng trí tuệ nhân tạo nhằm giúp người dùng có thể tìm hiểu thêm về AI. 
         Đặc biệt là ở Việt Nam khi trí tuệ nhân tạo thường được liên tưởng đến như những cỗ máy
         trong các bộ phim viễn tưởng (như The Matrix). 
         Thế nhưng trí tuệ nhân tạo vẫn luôn hiện hữu xung
         quanh cuộc sống hằng ngày của chúng ta. 
         {/* Mặc dù là một sản phẩm dự thi, thế nhưng trong 
         quá trình xây dựng và nghiên cứu, A-Journey là đã trở thành một dự án được cần rất nhiều 
         nỗ lực và sự cống hiến. */}
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