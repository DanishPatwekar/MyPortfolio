import '../index.css'
import React, { useEffect, useState, useRef } from 'react'
import { FiMenu,FiX, } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";


function Nav() {
    const [visible,setvisible]=useState(true);
    const [forcvisible,setForcevisible]=useState(false);

    const[isactive,SetActive]=useState("");
    const[menuopen,Setmenuopen]=useState(false);
    const message ="Hello, I visited your portfolio and would like to connect with you.";
    const whatsappurl= `https://wa.me/8862032096?text=${encodeURIComponent(message)}`;
    const menuitem=[
        {id:'home', lable:'Home'},
        {id:'about', lable:'About'},
        {id:'projects', lable:'Projects'},
        {id:'contact', lable:'Contact'}
    ];
    const handlmenulist=(sectionId)=>{
        SetActive(sectionId);
        Setmenuopen(false);

    };

    const lastScrolly=useRef(0);
    const timerID=useRef(null);
    useEffect(()=>{
    const homeSection=document.querySelector("#home");
    const observer=new IntersectionObserver(
    ([entry])=>{
    if(entry.isIntersecting){
    setForcevisible(true);
    setvisible(true)}
    else{
        setForcevisible(false);
    }
    },{threshold : 0.1}
    )
    if(homeSection) observer.observe(homeSection);
    return()=>{
        if(homeSection) observer.unobserve(homeSection);
    }
    },[])

    useEffect(()=>{
        const handleScroll=()=>{
            if(forcvisible){
                setvisible(true);
                return
            }
            const currentScrollY=window.scrollY;
            if(currentScrollY>lastScrolly.current){
                setvisible(false)
            }else{
                setvisible(true)
                if(timerID.current)clearTimeout(timerID.current);
                timerID.current=setTimeout(() => {
                    setvisible(false);
                }, 3000);
            }
            lastScrolly.current=currentScrollY;
        }
        window.addEventListener("scroll",handleScroll,{passive:true})
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
            if(timerID.current) clearTimeout(timerID.current)
        }
    },[forcvisible])
  return (
    <>
        <nav className='bg-gray-800 flex justify-between px-2 pt-2 md:py-0.5'>
             <div className='md:hidden lg:hidden'>
                    {
                        menuopen?
                        (
                            <div className='flex  md:hidden lg:hidden'> 
                               <FiX className='text-4xl text-yellow-500  border-1 ' onClick={()=>Setmenuopen(false)}/>
                            </div>)
                            :(
                            <div className='flex  md:hidden lg:hidden'> 
                                 <FiMenu className='text-4xl text-yellow-500  border-1 ' onClick={()=>Setmenuopen(true)}/>
                            </div>)
                       

                    }


                </div>
             <div>
                  <span className='text-5xl font-black font-Tangerine bg-gradient-to-r from-yellow-500 to-green-300 bg-clip-text text-transparent'>Danish Patwekar</span>
             </div>
                <div>
                    <ul className='hidden md:flex space-x-12 '>
                    {menuitem.map((item)=>(
                        <li key={item.id} ><button className="md:cursor-pointer hover:bg-gray-500 text-amber-100 text-xl rounded-lg font-semibold md:px-4 py-1.5 lg:text-2xl" onClick={()=>handlmenulist(item.id)}>{item.lable}</button></li>
                    ))}
                    </ul>
                    
                </div>
                <div>
                    <a  href={whatsappurl}
                        target="_blank"   rel="noopener noreferrer"
                        style={{ color: "#25D366" }}>
                     <FaWhatsapp size={40} color="#25D366" className='rounded-2xl w-11  h-10' />
                    </a>
                    
                </div>

                {/* mobile navbar close open code  */}
                {
                    menuopen &&(
                        <div className='md:hidden absolute top-14 left-1/2 transform -translate-x-1/2 w-full bg-gray-500 bg-opacity-60 backdrop-filter backdrop-blur-6xl z-50 rounded-md shadow-2xl'>
                            <ul className='flex flex-col items-center space-y-6 py-4 text-amber-50 '>
                                {
                                    menuitem.map((item)=>(
                                        <li key={item.id} className='border-b-blue-300 border-b-2 p-0.5 rounded-2xl'><button className='text-2xl font-semibold' onClick={handlmenulist}>{item.lable}</button></li>
                                    ))
                                }
                            </ul>
                        </div>

                    )
                }

               
          
        </nav>

    </>
  )
}

export default Nav