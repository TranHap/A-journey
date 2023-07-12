import React from 'react'
import { motion } from 'framer-motion';
import {fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles'
import {SectionWrapper} from "../hoc";
const Process = () => {
  return (
    <div className="flex flex-col">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tìm hiểu thêm</p>
        <h2 className={styles.sectionHeadText}>Details</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-3-xl leading-[30px] mb-4"
      >
        Trang web của được chia ra làm hai phần chính: 
        Dashboard, Ob Detect và Chat Bot. A-journey sử dụng mô hình thị giác
        máy tính YoLo để nhận dạng vật dựa trên hình ảnh người dùng
        tải lên. Bên cạnh đó, A-journey còn tích hợp Chat Bot, dựa
        trên chatbot mở blenderbot-400M-distill, có thể trò 
        chuyện với người dùng như một người bạn.
        Về mặt thiết kế và giao diện, A-journey sử dụng  
        CSS framework Tailwind cùng với thư viện animation Framer-Motion. 
      
      </motion.p>

    

      <motion.div 
        variants={fadeIn("","", 0.1, 1)}
        className="p-9 hidden sm:flex flex-col "
      >
        <h2 className="text-white text-[45px] mb-3">Nếu chúng ta biết chúng ta đang làm điều thì 
          sẽ chẳng còn khái niệm "nghiên cứu" nữa 
        </h2>
        <p className='flex flex-row-reverse'>- Albert Einstein -</p>
      </motion.div>

  </div>
  )
}

export default SectionWrapper(Process);
