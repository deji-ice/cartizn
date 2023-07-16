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
      



    return <section className="flex ">
        <div className="flex flex-col lg:flex-row flex-1 gap-0 ease-linear duration-500 ">
            <img className="" src={data1[currentIndex1]} />
            <div className="flex flex-row lg:flex-col  ">
                <img className="flex-grow object-cover" src={data2[currentIndex2]} />
                <img className="flex-grow object-cover" src={data3[currentIndex3]} />
            </div>
            <div className="flex flex-row lg:flex-col ">
                <img className="flex-grow object-cover" src={data4[currentIndex4]} />
                <img className="flex-grow object-cover" src={data5[currentIndex5]} />
            </div>
        </div>
        <div className="relative hidden lg:flex  flex-1  items-center hover:text-black my-svg hover:bg-white text-white border-[0.5px]
         border-[#F5F5F5] hover:ease-linear duration-500 cursor-pointer">
            <h1 className="text-4xl w-[30rem] p-10 text-right qarkine leading-[6rem] ">
                Explore My World
            </h1>
            <div className="absolute right-10 flex flex-col gap-5 items-center ">
                <svg width="18" height="19" viewBox="0 0 18 19" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1425 2H5.8575C3.1275 2 1.5 3.6275 1.5 6.3575V12.635C1.5 15.3725 3.1275 17 5.8575 17H12.135C14.865 17 16.4925 15.3725 16.4925 12.6425V6.3575C16.5 3.6275 14.8725 2 12.1425 2ZM9 12.41C7.395 12.41 6.09 11.105 6.09 9.5C6.09 7.895 7.395 6.59 9 6.59C10.605 6.59 11.91 7.895 11.91 9.5C11.91 11.105 10.605 12.41 9 12.41ZM13.44 5.66C13.4025 5.75 13.35 5.8325 13.2825 5.9075C13.2075 5.975 13.125 6.0275 13.035 6.065C12.8985 6.12294 12.7478 6.1389 12.6022 6.11085C12.4566 6.08279 12.3227 6.012 12.2175 5.9075C12.15 5.8325 12.0975 5.75 12.06 5.66C12.0215 5.56986 12.0011 5.47302 12 5.375C12 5.2775 12.0225 5.18 12.06 5.09C12.0975 4.9925 12.15 4.9175 12.2175 4.8425C12.39 4.67 12.6525 4.5875 12.8925 4.64C12.945 4.6475 12.99 4.6625 13.035 4.685C13.08 4.7 13.125 4.7225 13.17 4.7525C13.2075 4.775 13.245 4.8125 13.2825 4.8425C13.35 4.9175 13.4025 4.9925 13.44 5.09C13.4775 5.18 13.5 5.2775 13.5 5.375C13.5 5.4725 13.4775 5.57 13.44 5.66Z" fill="#F5F5F5" />
                </svg>

                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.75 3.125H5.25C3 3.125 1.5 4.25 1.5 6.875V12.125C1.5 14.75 3 15.875 5.25 15.875H12.75C15 15.875 16.5 14.75 16.5 12.125V6.875C16.5 4.25 15 3.125 12.75 3.125ZM13.1025 7.6925L10.755 9.5675C10.26 9.965 9.63 10.16 9 10.16C8.37 10.16 7.7325 9.965 7.245 9.5675L4.8975 7.6925C4.78275 7.59725 4.7093 7.4613 4.69252 7.31311C4.67575 7.16493 4.71695 7.01599 4.8075 6.8975C5.0025 6.6575 5.355 6.6125 5.595 6.8075L7.9425 8.6825C8.5125 9.14 9.48 9.14 10.05 8.6825L12.3975 6.8075C12.6375 6.6125 12.9975 6.65 13.185 6.8975C13.38 7.1375 13.3425 7.4975 13.1025 7.6925Z" fill="#F5F5F5" />
                </svg>

                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 2C4.86 2 1.5 5.36 1.5 9.5C1.5 13.64 4.86 17 9 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 9 2ZM12.9825 11.9825C12.765 12.1025 12.585 12.155 12.435 12.1925C12.3075 12.2225 12.2025 12.2525 12.1125 12.3125C12.015 12.3725 12.0075 12.47 11.9925 12.56C11.9775 12.6425 11.97 12.71 11.91 12.755C11.8425 12.8 11.715 12.8075 11.5425 12.815C11.3175 12.83 11.0325 12.8375 10.6875 12.9425C10.5225 13.0025 10.3725 13.0925 10.2225 13.1825C9.9225 13.37 9.585 13.5725 8.9925 13.5725C8.4075 13.5725 8.07 13.37 7.77 13.1825C7.62 13.085 7.47 12.995 7.2975 12.935C7.01986 12.8527 6.73206 12.8098 6.4425 12.8075C6.27 12.8 6.15 12.7925 6.075 12.7475C6.015 12.71 6.0075 12.635 5.9925 12.5525C5.9775 12.4625 5.97 12.365 5.8725 12.305C5.7825 12.245 5.67 12.215 5.55 12.1775C5.4 12.14 5.22 12.095 5.0025 11.975C4.7475 11.8325 4.8975 11.75 4.98 11.705C6.4275 11.0075 6.6525 9.9275 6.66 9.845V9.83C6.675 9.74 6.6825 9.665 6.5775 9.5675C6.51 9.5 6.2775 9.35 6.09 9.23C6.0075 9.17 5.9325 9.125 5.8875 9.1025C5.6775 8.9525 5.5875 8.81 5.655 8.6225C5.7 8.495 5.82 8.45 5.94 8.45C5.9775 8.45 6.0225 8.4575 6.0525 8.465C6.1875 8.495 6.3225 8.5475 6.4425 8.5925C6.525 8.63 6.5925 8.6525 6.645 8.6675C6.66 8.675 6.6825 8.675 6.69 8.675C6.765 8.675 6.7875 8.6375 6.78 8.5625C6.78 8.54 6.78 8.5175 6.7725 8.495C6.7575 8.2325 6.735 7.775 6.765 7.355C6.825 6.725 7.0275 6.4025 7.2675 6.1325C7.3875 5.9975 7.935 5.42 8.9775 5.42C10.0275 5.42 10.5675 5.9975 10.6875 6.125C10.9275 6.4025 11.13 6.7175 11.19 7.355C11.2275 7.7975 11.1975 8.27 11.175 8.5325V8.555C11.1675 8.6375 11.19 8.6675 11.265 8.6675C11.28 8.6675 11.295 8.6675 11.31 8.66C11.3625 8.645 11.43 8.6225 11.5125 8.5925C11.625 8.5475 11.76 8.495 11.9025 8.465C11.94 8.45 11.9775 8.45 12.015 8.45C12.1425 8.45 12.255 8.5025 12.3 8.63C12.3675 8.81 12.2775 8.9525 12.0675 9.1025C12.03 9.1325 11.955 9.185 11.865 9.23C11.685 9.35 11.445 9.5 11.3775 9.5675C11.2725 9.665 11.28 9.74 11.295 9.83V9.845C11.31 9.9275 11.535 11.0075 12.975 11.705C13.0875 11.75 13.2375 11.84 12.9825 11.9825Z" fill="#F5F5F5" />
                </svg>

                <svg width="24" height="82" viewBox="0 0 24 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M12 0.833333C10.5272 0.833333 9.33333 2.02724 9.33333 3.5C9.33333 4.97276 10.5272 6.16667 12 6.16667C13.4728 6.16667 14.6667 4.97276 14.6667 3.5C14.6667 2.02724 13.4728 0.833333 12 0.833333ZM11.5 3.5L11.5 97.5L12.5 97.5L12.5 3.5L11.5 3.5Z" fill="#F5F5F5" />
                    <path d="M16.06 120.4L13.44 123.02C12.67 123.79 11.41 123.79 10.64 123.02L4.12996 116.5M19.96 116.5L18.92 117.54" stroke="#DEC649" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                💯
            </div>
        </div>
    </section>;
};

export default Explore;

