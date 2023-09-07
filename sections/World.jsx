'use client';
import { motion } from 'framer-motion'
import styles from '../styles'
import { fadeIn, staggerContainer, slideIn } from '../utils/motion'
import { TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title={"| People on the World"} textStyles="text-center"/>
      <TitleText textStyles="text-center" title={<>Track friends around you and invite them to play together in the same world</>}/>
    <motion.div 
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className='relative mt-[68px] flex w-full h-[550px]'>
        <img src='./map.png' alt='map' className='w-full h-full object-cover'/>
        <motion.div variants={slideIn('up', 'tween', 1.5, 1)}
          className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0_60px_-2px_rgba(255,155,80,1)]'>
            <img src="people-01.png" alt="people" className='w-full h-full'/>
        </motion.div>
        <motion.div variants={slideIn('up', 'tween', 1, 1)} className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0_60px_-2px_rgba(227,61,148,1)]'>
            <img src="people-02.png" alt="people" className='w-full h-full'/>
        </motion.div>
        <motion.div variants={slideIn('up', 'tween', 0.5, 1)} className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] shadow-[0_0_60px_-2px_rgba(189,195,199,1)]'>
            <img src="people-03.png" alt="people" className='w-full h-full'/>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className='absolute top-[30%] left-[15%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] shadow-[0_0_60px_-2px_rgba(190,86,131,1)]'>
            <img src="planet-02.png" alt="planet-02" className='w-full h-full object-cover rounded-[24px]'/>
            <div className='flex justify-center flex-col items-start ml-5 mt-[-60px]'>
              <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-row'>
                  <img src="people-01.png" alt="people" className='w-[24px] h-[24px] rounded-full' />
                  <img src="people-02.png" alt="people" className='w-[24px] h-[24px] rounded-full ml-[-10px]'/>
                  <img src="people-03.png" alt="people" className='w-[24px] h-[24px] rounded-full ml-[-10px]'/>
                </div>
                <p className='font-normal text-[12px] text-white ml-5'>+ 264 has joined</p>
              </div>
                <h4 className='text-white text-[18px] font-bold'>The Upside Down</h4>
            </div>
            
        </motion.div>
        <motion.div 
          variants={fadeIn('up', 'tween', 1, 1)}
          className='absolute top-[12%] right-[18%] w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680] shadow-[0_0_60px_-2px_rgba(213,184,255,1)]'>
            <img src="planet-05.png" alt="planet-05" className='w-full h-full object-cover rounded-[24px]'/>
            <div className='flex justify-center flex-col items-start ml-5 mt-[-60px]'>
              <div className='flex flex-row justify-center items-center'>
                <div className='flex flex-row'>
                  <img src="people-01.png" alt="people" className='w-[24px] h-[24px] rounded-full' />
                  <img src="people-02.png" alt="people" className='w-[24px] h-[24px] rounded-full ml-[-10px]'/>
                  <img src="people-03.png" alt="people" className='w-[24px] h-[24px] rounded-full ml-[-10px]'/>
                </div>
                <p className='font-normal text-[12px] text-white ml-5'>+ 178 has joined</p>
              </div>
                <h4 className='text-white text-[18px] font-bold'>Hawkings Labs</h4>
            </div>
            
        </motion.div>

    </motion.div>
    </motion.div>
  </section>
);

export default World;
