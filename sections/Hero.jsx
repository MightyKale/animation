'use client';
import { motion } from 'framer-motion'
import styles from '../styles'
import { slideIn, staggerContainer, textVariant } from '../utils/motion'
import { TypingText } from '../components';
import { socials } from '../constants';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className='flex justify-between items-top flex-row relative z-10'>
          <motion.div variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{once: false, amount: 0.25}}
              className={`mx-auto flex flex-col flex-1`}>
            <TypingText title="| Home" textStyles="text-left"/>
          </motion.div>
          
          <motion.div className='flex flex-col justify-center items-center flex-1'>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Metaverse
          </motion.h1>
          <motion.div variants={textVariant(1.2)} className='flex flex-row justify-center items-center'>
            <h1 className={`${styles.heroHeading}`}>MA</h1>
            <div className={`${styles.heroDText}`}></div>
            <h1 className={`${styles.heroHeading}`}>NESS</h1>
          </motion.div>
          </motion.div>

          <motion.div 
            variants={slideIn('right', 'tween', 0.5, 1)}
            className='flex gap-4 md:gap-8 flex-col flex-1 justify-start items-center'>
            {socials.map((social)=>(
              <motion.img 
                key={social.name}
                src={social.url}
                alt={social.name}
                className='w-[24px] h-[24px] object-contain cursor-pointer'/>
            ))}

          </motion.div>

          
        </div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='relative w-full md:-mt-[20px] =mt-[12px]'>
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
          <img src='/cover.png' alt='cover' className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'/>
          <a href="#explore">
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                <img src="/stamp.png" alt="stamp" className='sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain'/>
            </div>
          </a>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
