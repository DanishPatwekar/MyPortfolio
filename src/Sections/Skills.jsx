import React from 'react'
import { motion } from "framer-motion";
import { FaCss3, FaDocker, FaHtml5, FaJava, FaReact,FaAws, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiSpringboot, SiSpringsecurity, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skill=[
    {icons:<FaJava/>, name:"java"},    {icons:<SiSpringboot/>, name:"springboot"},
    {icons:<FaHtml5/>, name:"html"},    {icons:<FaCss3/>, name:"css"},
    {icons:<FaReact/>, name:"react"},    {icons:<FaDocker/>, name:"css"},
    {icons:<SiTailwindcss/>, name:"tailwindcss"},    {icons:<SiMysql/>, name:"sql"},
    {icons:<SiJavascript/>, name:"js"},    {icons:<FaAws/>,name:"aws"},
    {icons:<FaGithub/>,name:"git"}, {icons:<SiSpringsecurity/>, name:"js"}
  ]
  return (
    <section className='w-full h-1/2 flex flex-col relative items-center justify-center pb-8 bg-black
  border border-white/20 shadow-lg overflow-hidden'>
  <motion.h2 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2]  to-[#302b63]"
  initial={{opacity:0,y:-30}} whileInView={{opacity:1,y:0}} transition={{duration:1}}
  >
    My Skills
  </motion.h2>
  </section>
  )
}

export default Skills