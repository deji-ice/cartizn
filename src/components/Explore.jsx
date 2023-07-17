import { useEffect, useState } from "react";


const Explore = () => {
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


    useEffect(() => {
        const intervals = [];
      
        if (data1 && data1.length > 0) {
          const interval1 = setInterval(() => {
            setCurrentIndex1((prevIndex) => (prevIndex + 1) % data1.length);
          }, 2000);
          intervals.push(interval1);
        }
      
        if (data2 && data2.length > 0) {
          const interval2 = setInterval(() => {
            setCurrentIndex2((prevIndex) => (prevIndex + 1) % data2.length);
          }, 2500);
          intervals.push(interval2);
        }
      
        if (data3 && data3.length > 0) {
          const interval3 = setInterval(() => {
            setCurrentIndex3((prevIndex) => (prevIndex + 1) % data3.length);
          }, 3000);
          intervals.push(interval3);
        }
      
        if (data4 && data4.length > 0) {
          const interval4 = setInterval(() => {
            setCurrentIndex4((prevIndex) => (prevIndex + 1) % data4.length);
          }, 3200);
          intervals.push(interval4);
        }
      
        if (data5 && data5.length > 0) {
          const interval5 = setInterval(() => {
            setCurrentIndex5((prevIndex) => (prevIndex + 1) % data5.length);
          }, 3500);
          intervals.push(interval5);
        }
      
        return () => {
          intervals.forEach((interval) => clearInterval(interval));
        };
      }, []);
      



    return <section className="flex lg:max-h-[20rem] ">
        <div className="flex flex-col lg:flex-row flex-1 gap-0 ease-linear duration-500 ">
            <img className="lg:shrink flex" src={data1[currentIndex1]} />
            <div className="flex flex-row lg:flex-col  ">
                <img className="flex-grow object-cover" src={data2[currentIndex2]} />
                <img className="flex-grow object-cover" src={data3[currentIndex3]} />
            </div>
            <div className="flex flex-row lg:flex-col ">
                <img className="flex-grow object-cover" src={data4[currentIndex4]} />
                <img className="flex-grow object-cover" src={data5[currentIndex5]} />
            </div>
        </div>
        <div className="relative hidden lg:flex  flex-1  items-center justify-center  hover:text-black my-svg hover:bg-white text-white border-[0.5px]
         border-[#F5F5F5] hover:ease-linear duration-500 cursor-pointer">
            <h1 className="text-4xl pl-10 pr-20 text-right flex items-center qarkine leading-[6rem] ">
                Explore My World
            </h1>
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

