import React from 'react'
import { motion } from 'framer-motion';
import {fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles'
import {SectionWrapper} from "../hoc";

const Process = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Chi tiết</p>
        <h2 className={styles.sectionHeadText}>Quá trình làm</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-3-xl leading-[30px]"
      >
        Trang web của được chia ra làm hai phần chính: 
        Dashboard và App. A-journey sử dụng mô hình thị giác
        máy tính YoLo để nhận dạng vật dựa trên hình ảnh người dùng
        tải lên. Bên cạnh đó, A-journey còn tích hợp Chat Bot, dựa
        trên chatbot mở blenderbot-400M-distill, có thể trò 
        chuyện với người dùng như một người bạn.
        Về mặt thiết kế và giao diện, A-journey sử dụng  
        CSS framework Tailwind cùng với thư viện animation Framer-Motion. 
      
      </motion.p>

      
  </div>
  )
}

export default SectionWrapper(Process);
