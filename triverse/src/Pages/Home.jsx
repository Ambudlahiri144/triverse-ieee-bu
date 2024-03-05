import React from 'react';
import CountDown from '../Components/CountDown';
import { motion } from "framer-motion"

// import Bottom from '../Components/Bottom';
const Home = () => {
  return (
    <motion.div 
    className=' w-screen h-screen text-yellow-300 text-center pt-8 pb-24 font-extrabold flex flex-col justify-center items-center '>
      <h1 
     
      // animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
        // transition={{
        //   duration: 3,
        //   delay: 0.3,
        //   ease: [0.5, 0.6, 1, 1.5],
        // }}
        // initial={{ opacity: 0, scale: 0.8 }}
        // whileHover={{ scale: 1.2 }}

      className='text-6xl size-big drop-shadow-xl tracking-wide mb-6 mt-3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500'>

        <motion.p
        animate={{scale:[2,1],opacity:[0.3,1]}}
        transition={{duration:0.4}}
        >
          IEEE
        </motion.p>


        <motion.p
        animate={{scale:[2,1],opacity:[0.3,1]}}
        transition={{duration:0.5}}
        >
        Triverse
        </motion.p>
      
       
       
       </h1>
      <motion.h3 
      animate={{x:[-300,0],scale:[2,1],opacity:[0.3,1]}}
      transition={{duration:0.6}}
      className='mb-2 text-xl bg-slate-950 text-purple-500'>Universe of Tech</motion.h3>


      <motion.h6 animate={{x:[300,0],scale:[2,1],opacity:[0.3,1]}} 
      transition={{duration:0.7}}
      className='mb-2 font-medium bg-slate-950 text-blue-200' >Join us for an amazing 3 day event at Bennett University ,Greater Noida</motion.h6>


      <motion.div animate={{x:[-300,0],scale:[2,1],opacity:[0.3,1]}}
        transition={{duration:0.8}}
      className='mt-10 mb-8'>
        <CountDown />
      </motion.div>


      <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.93 }}
      animate={{x:[300,0],scale:[1.4,1],opacity:[0.3,1]}}
      transition={{duration:0.9}}
      className=' border-black py-2 px-4 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 rounded-xl text-black '>Register Now</motion.button>

      
    {/* <Bottom/> */}


    </motion.div>
  );
};

export default Home;

