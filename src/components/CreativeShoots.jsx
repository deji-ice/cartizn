/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import sparkles from "../assets/image 1359 (1).png"


const CreativeShoots = () => {

    const data1 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant3_p77jl3.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant4_l3tl5p.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant2_hh4xtb.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Default_eqyspq.png",];
    const data2 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant4_ycmost.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Default_wyivhk.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant3_pdryuk.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant2_oybbzd.png",];
    const data3 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594809/cartizn/creative%20shoots/Property_1_Default_xr17wt.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594808/cartizn/creative%20shoots/Property_1_Variant3_k0ymip.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594808/cartizn/creative%20shoots/Property_1_Variant2_yhhnnl.png",];
    const data4 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594368/cartizn/creative%20shoots/Property_1_Variant4_aazupf.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Variant2_fx8wfc.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Default_qevbzf.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Variant3_nbmulw.png",];
    const data5 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594333/cartizn/creative%20shoots/Property_1_Variant3_xeahzi.png","https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594333/cartizn/creative%20shoots/Property_1_Default_ihxzry.png",];
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

    return <div className="flex flex-col h-screen">
        <div className="flex flex-col py-10 md:py-20 px-3 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5]   ">
            <div className="items-center justify-center flex  gap-2">
                <h1 className="qarkine text-[16px] md:text-2xl ">CREATIVE SHOOT</h1>
                <img src={sparkles} className="h-5 md:h-10" />
            </div>
            <p className="font-thin text-center text-sm mt-4 leading-6 px-4 md:px-10 md:text-xl md:mt-8 md:leading-9">
            "Capture the beauty, ignite the imagination. In the realm of creativity, every frame tells a story waiting to unfold."
            </p>
        </div>
        <div className="m-auto">
            <img className="w-screen border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data2[currentIndex2]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data3[currentIndex3]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data4[currentIndex4]} />
            <img className="w-screen border-[0.5px] border-[#F5F5F5]" src={data5[currentIndex5]} />

        </div>
    </div>;
};

export default CreativeShoots;
