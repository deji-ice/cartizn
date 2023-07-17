/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import camera from "../assets/image 1359 (2).png"


const Portraits = () => {

    const data1 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591516/cartizn/portraits/Property_1_Variant4_qei7ag.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591516/cartizn/portraits/Property_1_Variant3_ubu49y.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591516/cartizn/portraits/Property_1_Default_dxmopu.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591516/cartizn/portraits/Property_1_Variant2_xwfkvt.png"];
    const data2 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591653/cartizn/portraits/Property_1_Default_cciayx.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591653/cartizn/portraits/Property_1_Variant3_xhuvwe.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591652/cartizn/portraits/Property_1_Variant4_ec9edv.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591652/cartizn/portraits/rema_7_j0zakc.png",];
    const data3 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591681/cartizn/portraits/Property_1_Variant6_bxwuch.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591682/cartizn/portraits/Property_1_Variant5_ksvq10.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591682/cartizn/portraits/Property_1_Variant4_wtj9mx.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591682/cartizn/portraits/Property_1_Default_qdugqr.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591682/cartizn/portraits/Property_1_Variant2_vkttz4.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591682/cartizn/portraits/Property_1_Variant3_qxp5yr.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591681/cartizn/portraits/Property_1_Variant7_nmwadn.png",];
    const data4 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591557/cartizn/portraits/Property_1_Variant3_jagq1o.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591557/cartizn/portraits/rema_7_zstzun.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591557/cartizn/portraits/Property_1_Default_jlmzle.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591557/cartizn/portraits/Property_1_Variant2_oflsnc.png",];
    const data5 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591851/cartizn/portraits/Property_1_Variant6_yva9hh.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591852/cartizn/portraits/Property_1_Variant5_wspw7m.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591851/cartizn/portraits/Property_1_Variant7_joohmh.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591850/cartizn/portraits/Property_1_Default_lsjguy.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591853/cartizn/portraits/Property_1_Variant3_rcqnw4.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591851/cartizn/portraits/Property_1_Variant4_n6zhrd.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689591853/cartizn/portraits/Property_1_Variant2_fsoixk.png",];
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
        <div className="lg:flex  ">
            <div className="hidden xl:flex xl:flex-2  ">
                <img className="object-contain  w-fit border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className=" border-[0.5px] border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>
            <div className="  flex flex-col py-10 md:py-20 px-3 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5] ">
                <div className="items-center justify-center flex  gap-2 lg:gap-0">
                    <h1 className="qarkine text-[16px] md:text-2xl lg:text-xl ">
                        PORTRAIT &nbsp; SHOOT
                    </h1>
                    <img src={camera} className="h-5 md:h-10" />
                </div>
                <p className="font-thin text-center text-sm mt-4 leading-6 px-4 md:px-10 md:text-xl md:mt-8 md:leading-9
                            lg:px-20 lg:text-xl lg:leading-10">
                    "Every portrait tells a story, revealing the beauty, vulnerability, and strength within each individual."
                </p>
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

export default Portraits;
