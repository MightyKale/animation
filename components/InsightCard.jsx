'use client';
import styles from "../styles";
import { motion } from 'framer-motion'
import { fadeIn } from "../utils/motion";


const InsightCard = ( {imgUrl, title, subtitle, index} ) => (
  <motion.div className={`${styles.flexStart} flex-row max-md:flex-col flex mt-8 gap-12 items-center`}
  variants={fadeIn('up', 'tween', index*0.5, 1)}>
    <div className="md:w-[270px] w-full h-[250px] shrink-0">
      <img src={imgUrl} alt={title} className="rounded-3xl w-[100%] h-[100%] object-cover"/>
    </div>
    <div>
      <h4 className="text-white text-[28px] xl:text-[38px]">{title}</h4>
      <p className="text-[#B0B0B0] leading-[32px] text-[20px] xl:text-[24px] mt-3">{subtitle}</p>
    </div>
    <div className="w-[100px] h-[100px] border-white border-2 flex items-center justify-center shrink-0 rounded-full">
        <img src="/arrow.svg" alt="arrow" />
    </div>
  </motion.div>
);

export default InsightCard;
