import React from 'react';
import {styles} from '../styles';
import {motion} from 'framer-motion';


const SectionWrapper = (Component) => 
  function HOC() {
    return (
        <motion.section
            // variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.1}}
            className={`${styles.padding} 
                max-w-10xl mx-auto h-full`}
        >
            {/* <span className='hash-span' id={idName}>
                &nbsp;
            </span> */}
            <Component />
        </motion.section>
    )
}
export default SectionWrapper