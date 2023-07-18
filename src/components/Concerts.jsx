/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import fire from "../assets/image 1359 (3).png"


const Concerts = () => {

    const data1 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689541913/cartizn/Property_1_Default_1_yxnras.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/c_fill,q_auto:eco,w_322/v1689548765/cartizn/concert/Property_1_Variant5_fil8wh.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689549531/cartizn/concert/Property_1_Variant6_ms0pjh.png"];
    const data2 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689549705/cartizn/concert/Property_1_Default_3_plkxhl.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689549706/cartizn/concert/Property_1_Variant3_1_wv5e7w.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689549708/cartizn/concert/Property_1_Variant4_tdvm6n.png"];
    const data3 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550489/cartizn/concert/Property_1_Default_4_mynfe0.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550490/cartizn/concert/Property_1_Variant3_2_ffwbeq.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550487/cartizn/concert/Property_1_Variant2_1_w7mzzh.png"];
    const data4 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550918/cartizn/concert/Property_1_Variant2_3_qaxeqo.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550878/cartizn/concert/Property_1_Variant3_3_lhw2d2.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550881/cartizn/concert/Property_1_Variant4_1_bl2smq.png"];
    const data5 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550887/cartizn/concert/Property_1_Default_5_qywof8.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550890/cartizn/concert/Property_1_Variant2_4_hjh2gp.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689550883/cartizn/concert/Property_1_Variant4_2_khipd0.png"];
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

    return <div className="flex flex-col h-screen xl:h-fit">
        <div className="lg:flex xl:h-fit  ">
            <div className="hidden xl:flex xl:flex-2 xl:h-full  ">
                <img className="object-contain  border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className="object-contain border-[0.5px] border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>
            <div className=" xl:flex-1 flex flex-col py-10 md:py-20 xl:px-0  px-3 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5] ">
                <div className="items-center justify-center flex  gap-2 xl:gap-2 lg:gap-0">
                    <h1 className="qarkine text-[16px] md:text-2xl lg:text-xl xl:text-[23px]  ">
             CONCERTS <span className="hidden md:inline">&nbsp;</span> & <span className="hidden md:inline">&nbsp;</span>EVENTS
                </h1>
                    <img src={fire} className="h-5 md:h-10 md:pb-2" />
                </div>
                <p className="font-thin text-center  text-sm mt-4 leading-6 px-4 md:px-10 md:text-xl md:mt-8 md:leading-9
                            lg:px-20 lg:text-xl lg:leading-10 xl:text-sm xl:px-32 xl:mt-2 xl:font-thin xl:leading-relaxed">
                    "Through the lens, I capture the rhythm, the energy, and the raw passion of the stage. Each click of the shutter immortalizes the magic of music, preserving the euphoria and the unforgettable moments that ignite the soul."
                </p>
            </div>
        </div>

        <div className="hidden xl:flex h-fit w-screen p-0 m-0 border-[0.5px] border-[#F5F5F5]">
            <div className="flex flex-1 items-center justify-center">
            <img className=" border-[0.5px] border-[#F5F5F5]" src={data3[currentIndex3]} />
            </div>

            <div className="flex flex-2 items-center ">
            <img className=" border-[0.5px] border-[#F5F5F5]" src={data4[currentIndex4]} />
            <img className=" border-[0.5px] border-[#F5F5F5] " src={data5[currentIndex5]} />
            </div>
        </div>
        <div className="m-auto xl:hidden  ">
            <div className="md:grid-cols-2  md:grid">
            <img className="w-screen border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data2[currentIndex2]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data3[currentIndex3]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data4[currentIndex4]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5] lg:mx-[15rem] md:mx-[11rem]" src={data5[currentIndex5]} />
            </div>
        </div>
    </div>;
};

export default Concerts;
