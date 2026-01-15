import React, { useEffect, useMemo, useState } from 'react'
import {motion} from "framer-motion";
import Particals from '../Components/Particals'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import top from '../assets/top.mp4';


const Home = () => {
  const roles=useMemo(()=>["PL/SQL Developer","SQL Developer"]);
  const [index,setIndex]=useState(0);
  const [subindex,setSubindex]=useState(0);
  const [deleting,setDeleting]=useState(false);
  const subject = "Hello";
  const message = "Hello, I visited your portfolio and would like to connect with you.";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=danishpatwekar24@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const mediaIcons=
  [
    {Icon:FaLinkedin, href:"https://www.linkedin.com/in/danish-patwekar",lable:"Linkedin"},
    {Icon:FaGithub, href:"https://www.github.com/DanishPatwekar",lable:"github"},{Icon:FaEnvelope, href:gmailUrl,lable:"gmail"}

  ]

  useEffect(()=>{
    const current=roles[index];
    const timeout=setTimeout(()=>{
      if(!deleting &&subindex<current.length) setSubindex(v=>v+1);
      else if(!deleting && subindex === current.length) setTimeout(()=>setDeleting(true),1500)
        else if(deleting && subindex >0) setSubindex(v=>v-1);
      else if(deleting && subindex===0){setDeleting(false); setIndex(p=>(p+1)%roles.length)}
    },deleting?40:60)
    return ()=>clearTimeout(timeout);
  },[subindex,index,deleting,roles])
  return (
    <section id='home' className='w-full h-screen relative bg-black overflow-hidden'>
      <Particals/>
      <div className='absolute inset-0'>
        <div className='absolute -top-20 left-3 w-[70vw] sm:w-[z-500vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse'></div>
        <div className='absolute top-60 right-30 w-[70vw] sm:w-[z-500vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b61] via-[#007a5ccd] to-[#1cd8d2ab]
        opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px]
        animate-pulse'></div>
      </div>
        <div className='relative z-10 w-full h-full max-w-7xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col justify-center h-full text-center lg:text-left relative'>
            <div className='w-full lg:pr-24 mx-auto max-w-[48rem]'>
              <motion.div className="mb-3 text-xl sm:text-4xl md:text-4xl font-semibold lg:text-5xl text-white tracking-wide min-height-[1.6em]"initial={{opacity:0 , y:12}} animate={{opacity:1,y:0}}transition={{duration:0.6}}>
                <span>
                  {roles[index].substring(0,subindex)}
                </span>
                <span className="inline-block w-[2px] ml-1 bg-white animation-pulse align-middle md:w-[3px]" style={{height:"1em"}}></span>
              </motion.div>
              <motion.h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg'initial={{opacity:0 , y:40}} animate={{opacity:1,y:0}}transition={{duration:2}}>
                Hello {"I'm "}
                <br />
                <span className='text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-7xl lg:whitespace-nowrap'>Er.Danish Patwekar</span>
              </motion.h1>
              <motion.p className=" mt-6 text-base sm:text-lg md:text-xl text-gray-300 mx-w-2xl mx-auto lg:mx-0" initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay:0.4,duration: 2 }}>
                  PL/SQL Developer with hands-on experience in designing, developing, and optimizing Oracle database solutions. Skilled in writing efficient PL/SQL code, performance tuning, and ensuring data integrity. Passionate about building reliable, scalable database systems that align with business goals.
              </motion.p>
              <motion.div className='mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6' initial={{opacity:0 }} animate={{opacity:1}}transition={{delay:0.8,duration:0.8}}>
                <a href="#project" className='px-6 py-3 rounded-full font-medium text-lg text-white bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all'>View My Work</a>
                <a href="/Resume_Danish_Patwekar.pdf" download className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-20 shadow-lg hover:scale-105 transition-all">My Resume</a>
              </motion.div>
              <div className='mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start'>
                {mediaIcons.map(({Icon,href,lable})=>(
                  <motion.a href={href} key={lable} target="_blank" rel="noopener noreferrer" whileHover={{y: [0, -10, 0, -10, 0],scale: 1.2,  }}      transition={{duration: 0.6, ease: "easeInOut"}}>
                    <Icon className="text-4xl cursor-pointer"/>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className='relative rounded-md overflow-hidden w-[900px] h-full'>
             <video src={top}controls  autoPlay  loop  muted  className='absolute top-1/2 left-50 md:left-120 lg:left-120 -translate-1/2 object-contain select-none pointer-events-none w-[800px]  h-full'/>
          </div>
        </div>
      
    </section>
  )
}

export default Home