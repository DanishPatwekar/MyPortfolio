import React from 'react';
import danish from '../assets/danish.png';
import TW from '../assets/icons/TW.webp';
import AWS from '../assets/icons/AWS.webp';
import html from '../assets/icons/html.png';
import css3 from '../assets/icons/css3.webp';
import react from '../assets/icons/react.webp';
import postman from '../assets/icons/postman.webp';
import { motion } from "framer-motion";

const About = () => {
  const icons = [
    { src: AWS, angle: 0 },
    { src: TW, angle: 0 }, // Adjusted angles for even distribution
    { src: html, angle: 0 },
    { src: css3, angle: 0 },
    { src: react, angle: 0},
    { src: postman, angle: 0 },
  ];

  return (
    <section id="about" className='w-full min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute inset-0'>
        <div className='absolute top-50 left-1 w-[50vw] h-[70vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b61] via-[#00557acd] to-[#871cd8ab] opacity-20 blur-[120px] animate-pulse'></div>
      </div>

      <div className='relative z-10 max-w-6xl w-full mx-auto px-6 py-20'>
        <motion.div className="flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">
            {/* Center Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden z-10 border-2 border-white/10">
              <img src={danish} className="w-full h-full object-cover" alt="profile" />
            </div>

            {/* outer Orbit Circle */}
            <div className="absolute w-[340px] h-[340px] rounded-full border-4 border-cyan-500/30" />

            {/* Orbiting Icons */}
            {icons.map((icon, index) => (
               <div  key={index} className="absolute w-[340px] h-[340px]" 
                      style={
                              { transform: `rotate(${(360 / icons.length) * index}deg)` }}
  >
    <div className="w-full h-full animate-[spin_20s_linear_infinite]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <div className="w-15 h-15 bg-gray-900 border border-white/20 rounded-xl flex items-center justify-center shadow-2xl ">
          <img src={icon.src} className="w-15 h-15 object-contain style={{
        transform: `rotate(-${icon.angle}deg)` " />
        </div>
      </div>
    </div>
  </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add this CSS in your global CSS file or a <style> tag */}
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default About;