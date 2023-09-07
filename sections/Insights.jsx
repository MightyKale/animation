'use client';
import { motion } from 'framer-motion'
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'
import { TitleText, InsightCard, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
<section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title={"| Insight"} textStyles="text-center"/>
      <TitleText textStyles="text-center" title={<>Insight about metaverse</>}/>

      <div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className='mt-5'>
      {insights.map((insight, index)=>(
        <InsightCard 
          key={insight.title}
          index={index+1}
          {...insight}/>
      ))}
      </div>

   </motion.div>
   


  </section>
);

export default Insights;
