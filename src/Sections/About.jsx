import React from 'react';
import danish from '../assets/danish.png';
import TW from '../assets/icons/TW.webp';
import AWS from '../assets/icons/AWS.webp';
import html from '../assets/icons/html.png';
import css3 from '../assets/icons/css3.webp';
import react from '../assets/icons/react.webp';
import postman from '../assets/icons/postman.webp';
import js from '../assets/icons/js.webp';
import java from '../assets/icons/java.webp';
import { motion } from "framer-motion";
import '../App.css';
import '../Sections/About.css'
import { div } from 'framer-motion/client';

const About = () => {
  const icons = [
    { src: AWS }, { src: js }, { src: java },
    { src: TW }, { src: html }, { src: css3 },
    { src: react }, { src: postman }
  ];
  const aboutlable=[
    {lable:"Experience", value:"6+ Months"},
    {lable:"Speciality", value:"Full Stack Developer"}

  ]

  return (
    <section id="about" className='w-full min-h-screen flex flex-col  items-start justify-start  relative bg-black text-white overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute inset-0'>
        <div className='absolute  top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b61] via-[#00557acd] to-[#871cd8ab] opacity-20 blur-[120px] animate-pulse'></div>
      </div>

      <div className='relative z-10 max-w-6xl w-full mx-auto px-6 md:px-26 py-20 flex flex-col md:flex-row items-center justify-between gap-35'>
        <motion.div 
          className="relative w-[420px] h-[420px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}>
          {/* Center Profile Image */}
          <div className="w-50 h-50 md:w-56 md:h-56 rounded-full overflow-hidden z-20 border-2 border-white/10 shadow-[0_0_50px_rgba(0,183,255,0.2)]  bg-gradient-to-br from-[#1cd8d2]/60 to-[#302b63]">
            <img src={danish} className="w-full h-full object-cover" alt="profile" />
          </div>

          {/* Static Orbit Path Circle (The ring line) */}
          <div className="absolute w-[270px] h-[270px] md:w-[340px] md:h-[340px] rounded-full border-2 border-cyan-500/30" />

          {/* 1. MAIN ROTATING CONTAINER (Clockwise) */}
          <motion.div 
            className="absolute w-[270px] h-[270px] z-10 md:w-[340px] md:h-[340px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {icons.map((icon, index) => {
              const rotationAngle = (360 / icons.length) * index;
              return (
                <div 
                  key={index} 
                  className="absolute w-full h-full" 
                  style={{ transform: `rotate(${rotationAngle}deg)` }}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   
                    <motion.div 
                      className="w-14 h-14 bg-gray-900/90 backdrop-blur-sm border border-white/15 rounded-xl flex items-center justify-center shadow-2xl"
                      initial={{ rotate: -rotationAngle }}
                      animate={{ rotate: -rotationAngle - 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.2, borderColor: "rgba(0, 255, 255, 0.5)" }}
                    >
                      <img 
                        src={icon.src} 
                        className="w-15 h-15 object-contain" 
                        alt="skill-icon" 
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
        <div className='flex flex-col'>
          <div className='realtive z-10 max-w-6xl  w-full mx-auto flex flex-col px-1'>
            <h1 className='font-extrabold text-3xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]  whitespace-nowrap'>Danish Patwekar</h1>
            <h2 className='text-2xl md:text-3xl m-2 ml-0 font-semibold whitespace-nowrap'>SQL DEVELOPER</h2>
            <span className='text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl'>I design and optimize robust database solutions with a strong focus on performance, data integrity, and scalability. Experienced in writing complex SQL queries, stored procedures, functions, and views, I specialize in translating business requirements into efficient relational data models. I work closely with application teams to ensure reliable data access, optimized queries, and well-structured APIs backed by high-performance databases.</span>
          </div>
          <div>
            <div className='flex gap-10 '>{aboutlable.map((index,i)=>(
              <motion.div key={i} className='border p-4 rounded-xl text-center mt-5' 
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:0.05*i,duration:0.9}}>
                <div className='text-pink-500 text-border-2 text-[24px] font-bold stroke'>{index.lable}</div>
                <div className='text-[18px]'>{index.value}</div>
              </motion.div>
            ))}
            </div>
            <div className='flex gap-10 mt-5'>
              <motion.a   href=""  className="text-xl border py-3 px-5 rounded-[5%] bg-gray-400 text-black hover:bg-white font-semibold"
                   initial={{ x: -100, opacity: 0 }}  whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "anticipate" }} >
               View Projects
              </motion.a>
              <motion.a   href=""  className="text-xl border py-3 px-5 rounded-[5%] bg-white text-black hover:bg-gray-400 text-black font-semibold"
                   initial={{ x: 100, opacity: 0 }}  whileInView={{ x: 0, opacity: 1 }}
                   transition={{ duration: 1.5, ease: "anticipate" }} >
               Get In Touch
              </motion.a>
            </div>
            
          </div>
        </div>
      </div>
      <div className='realtive z-10 max-w-6xl  w-full mx-auto flex flex-col px-1 md:ml-60'>
          <motion.h1 className='font-extrabold text-[25px] pl-3 text-[rgb(130,216,202)]' initial={{opacity: 0, scale: 2.3,skewX: -22 }}  whileInView={{ opacity: 1,scale: 1,skewX: 0}}
          transition={{duration: 1.2,ease: "easeOut"}}>About Me</motion.h1>
          <motion.p className='pl-3 mb-5 leading-relaxed text-base sm:text-lg md:text-xl text-gray-300' initial={{ opacity: 0, y: 20 }}  whileInView={{ opacity: 1, y: 0 }} transition={{ delay:0.4,duration: 2 }}> I am a Junior Oracle Database Engineer and PL/SQL Developer with a strong foundation in Oracle Database, SQL, and PL/SQL, focused on building efficient, secure, and performance-optimized database solutions. I have hands-on experience in database design, query optimization, performance monitoring, and data integrity, along with exposure to Oracle RAC & ASM (Basic), Data Guard, backup & recovery.</motion.p>
      </div>
        
    </section>
  );
};

export default About;

