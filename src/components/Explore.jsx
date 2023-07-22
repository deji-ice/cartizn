import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import gsap from 'gsap';
import { Link } from "react-router-dom";

const Explore = () => {
  const imageRef = useRef(null);

  const data1 = ["https://i.imgur.com/kQEx2GY.png", "https://i.imgur.com/Q5CtCJi.png", "https://i.imgur.com/i7A133P.png"];
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
    const fadeIn = () => {
      gsap.fromTo(imageRef.current, { opacity: 0.3 }, { opacity: 1, duration: 2, ease: "easeInOut" });
    };

    const fadeOut = () => {
      gsap.to(imageRef.current, { opacity: 0.2, duration: 2, ease: "easeInOut", onComplete: changeImage });
    };

    const changeImage = () => {
      fadeIn();
      setNextImage(data1[currentIndex1]);
    };

    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + 1) % data1.length);
      fadeOut();
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

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scaleX: 1,
      ease: 'power2.inOut',
    });
  };

  const handleHoverOut = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scaleX: 0,
      ease: 'power2.inOut',
    });
  };

  return <section className="flex lg:max-h-[20rem] gap-0 p-0">
    {/* TODO */}
    <div className="flex flex-col lg:flex-row xl:flex-1  ease-linear duration-500 xl:overflow-x-clip  ">
      <img ref={imageRef} className="lg:grow  flex xl:flex-1" src={nextImage || data1[currentIndex1]} />
      <div className="flex flex-col lg:flex-row  xl:flex-4 xl:whitespace-nowrap">
        <div className="flex flex-row lg:flex-col  ">
          <img className="flex-grow flex-1 object-cover xl:max-h-40 xl:min-w-[13rem]" src={data2[currentIndex2]} />
          <img className="flex-grow flex-1 object-cover xl:max-h-40 xl:min-w-[13rem]" src={data3[currentIndex3]} />
        </div>
        <div className="flex flex-row lg:flex-col ">
          <img className="flex-grow flex-1 object-cover xl:max-h-40  xl:min-w-[13rem]" src={data4[currentIndex4]} />
          <img className="flex-grow flex-1 object-cover xl:max-h-40  xl:min-w-[13rem]" src={data5[currentIndex5]} />
        </div>
      </div>
    </div>

    <div className="relative hidden lg:flex xl:flex-1  items-center justify-center  hover:text-black my-svg hover:bg-white text-white border-[0.5px]
         border-[#F5F5F5] hover:ease-linear duration-500 cursor-pointer">
      {isXlScreen ? (
        <Link to={"/catalog"} >
          <h1 className="text-4xl pl-10 pr-20 text-right flex items-center xl:px-16 xl:pr-20 qarkine leading-[6rem] ">
            Explore My World
          </h1>
        </Link>)
        : (
          <h1 className="text-4xl pl-10 pr-20 text-right flex items-center xl:px-16 xl:pr-20 qarkine leading-[6rem] ">
            Explore My World
          </h1>
        )}
      <div className=" flex flex-col gap-5 items-center justify-center pr-10">
        <svg width="24" height="100" viewBox="0 0 24 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12 0.833333C10.5272 0.833333 9.33333 2.02724 9.33333 3.5C9.33333 4.97276 10.5272 6.16667 12 6.16667C13.4728 6.16667 14.6667 4.97276 14.6667 3.5C14.6667 2.02724 13.4728 0.833333 12 0.833333ZM11.5 3.5L11.5 97.5L12.5 97.5L12.5 3.5L11.5 3.5Z" fill="#F5F5F5" />
          <path className="specific-path" d="M16.06 120.4L13.44 123.02C12.67 123.79 11.41 123.79 10.64 123.02L4.12996 116.5M19.96 116.5L18.92 117.54" stroke="#DEC649" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  </section>;
};

export default Explore;

