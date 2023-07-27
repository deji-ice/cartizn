import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import gsap from 'gsap';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import odu from "../assets/Property 1=Default (3).png"


const Explore = () => {
  let imageRef = useRef(null);
  let explore = useRef(null)

  const data1 = [odu, "https://i.imgur.com/Q5CtCJi.png", "https://i.imgur.com/i7A133P.png"];
  const data2 = ["https://i.imgur.com/a4Abq7x.png", "https://i.imgur.com/fyfzvnX.png", "https://i.imgur.com/rcWZdSy.png"];
  const data3 = ["https://i.imgur.com/JcbsGag.png", "https://i.imgur.com/KMLqgha.png", "https://i.imgur.com/3hRiyi3.png"];
  const data4 = ["https://i.imgur.com/Kc5WiJG.png", "https://i.imgur.com/H0pKlzd.png", "https://i.imgur.com/8nEu8Zu.png"];
  const data5 = ["https://i.imgur.com/wuB6tt1.png", "https://i.imgur.com/NtZ6Hb4.png", "https://i.imgur.com/Qc3QLGk.png"];
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [nextImage, setNextImage] = useState(null);
  // Use the useMediaQuery hook to get the screen size
  const isXlScreen = useMediaQuery('(min-width: 1280px)');


  useEffect(() => {
    // const fadeIn = () => {
    //   gsap.from(imageRef.current, {duration:1 ,opacity: 0 ,ease:"easeInOut"})
    // };

    // const fadeOut = () => {
    //   gsap.to(imageRef.current, {duration:1 ,opacity: 1 ,ease:"easeInOut", onComplete:changeImage})
    // };

    // const changeImage = () => {
    //   fadeIn();
    //   setNextImage(data1[currentIndex1]);
    // };

    const interval1 = setInterval(() => {
      // fadeOut()
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % data1.length);

    }, 4000); // Adjust the interval for smoother transition

    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + 1) % data2.length);
    }, 2500);

    const interval3 = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + 1) % data3.length);
    }, 3000);

    const interval4 = setInterval(() => {
      setCurrentIndex4((prevIndex) => (prevIndex + 1) % data4.length);
    }, 3200);

    const interval5 = setInterval(() => {
      setCurrentIndex5((prevIndex) => (prevIndex + 1) % data5.length);
    }, 3500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
    };
  }, [currentIndex1]);





  const handleHover = () => {
    gsap.to(explore.current, { width: "100%", duration: 1, ease: 'power2.inOut' });
  };

  const handleHoverOut = () => {
    gsap.to(explore.current, { width: "0%", duration: 1, ease: 'power2.inOut' });
  };
  return <section className="flex  xl:h-[30%]  gap-0 p-0">
    {/* TODO */}
    <div className="flex flex-col lg:flex-row xl:flex-1  w-screen  ease-linear duration-500 xl:overflow-x-clip  ">
      <img ref={imageRef} className="lg:grow  flex xl:flex-1" src={data1[currentIndex1]} />
      <div className="flex flex-col lg:flex-row  xl:flex-4 xl:whitespace-nowrap">
        <div className="flex flex-row lg:flex-col  ">
          <img className="flex-grow flex-1 object-cover " src={data2[currentIndex2]} />
          <img className="flex-grow flex-1 object-cover " src={data3[currentIndex3]} />
        </div>
        <div className="flex flex-row lg:flex-col ">
          <img className="flex-grow flex-1 object-cover " src={data4[currentIndex4]} />
          <img className="flex-grow flex-1 object-cover " src={data5[currentIndex5]} />
        </div>
      </div>
    </div>

    <motion.div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="relative hidden lg:flex xl:flex-1  items-center justify-center  my-svg hover:text-black text-white border-[0.5px]
         border-[#F5F5F5] hover:ease-linear duration-500 cursor-pointer"
    >
      <div
        ref={explore} className="bg-white  pink h-full absolute left-0 ">
      </div>
      {isXlScreen ? (
        <Link to={"/catalog"} >
          <h1 className="relative z-20 text-5xl pl-10 mr-20 text-right flex items-center  qarkine leading-[8rem] ">
            Explore My World
          </h1>
        </Link>)
        : (
          <h1 className=" relative text-3xl pl-10 pr-20 text-right flex items-center xl:px-16 xl:pr-20 qarkine leading-[6rem] ">
            Explore My World
          </h1>
        )}
      <div className=" lg:relative flex flex-col gap-5 items-center justify-center pr-10">
        <svg width="24" height="200" viewBox="0 0 24 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12 0.833333C10.5272 0.833333 9.33333 2.02724 9.33333 3.5C9.33333 4.97276 10.5272 6.16667 12 6.16667C13.4728 6.16667 14.6667 4.97276 14.6667 3.5C14.6667 2.02724 13.4728 0.833333 12 0.833333ZM11.5 3.5L11.5 97.5L12.5 97.5L12.5 3.5L11.5 3.5Z" fill="#F5F5F5" />
          <path className="specific-path" d="M16.06 120.4L13.44 123.02C12.67 123.79 11.41 123.79 10.64 123.02L4.12996 116.5M19.96 116.5L18.92 117.54" stroke="#DEC649" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </motion.div>
  </section>;
};

export default Explore;

