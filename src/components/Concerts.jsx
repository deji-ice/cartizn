/* eslint-disable react/no-unescaped-entities */
import fire from "../assets/image 1359 (3).png"
import { motion } from "framer-motion";
import useInterval from "../hooks/useInterval";

// eslint-disable-next-line react/prop-types
const Concerts = ({ isFromRight }) => {

    const data1 = [
    "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740988/cartizn/concert/Property_1_Variant4_bu6obs.png",
     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740989/cartizn/concert/Property_1_Default_kmyw1u.png", 
     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740978/cartizn/concert/Property_1_Variant3_w9m4ko.png", 
     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740970/cartizn/concert/Property_1_Variant6_vacaf9.png", 
     "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740973/cartizn/concert/Property_1_Variant5_si8y0s.png", 
    "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690740980/cartizn/concert/Property_1_Variant2_yux8km.png"
    ];

    const data2 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741377/cartizn/concert/Property_1_Variant2_ncp1f2.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741376/cartizn/concert/Property_1_Default_msggew.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741376/cartizn/concert/Property_1_Default_msggew.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741377/cartizn/concert/Property_1_Variant4_wo9ve4.png",
    ];
    const data3 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741417/cartizn/concert/Property_1_Default_lggvvx.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741416/cartizn/concert/Property_1_Variant2_vl3n5x.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741417/cartizn/concert/Property_1_Variant4_wfdlu8.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741432/cartizn/concert/Property_1_Variant4_fy1wxc.png",
    ];
    const data4 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741437/cartizn/concert/Property_1_Variant3_yjrseu.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741435/cartizn/concert/Property_1_Default_pgggwm.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741435/cartizn/concert/Property_1_Default_pgggwm.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741432/cartizn/concert/Property_1_Variant4_fy1wxc.png"
    ];
    const data5 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741799/cartizn/concert/Property_1_Default_hz346x.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741802/cartizn/concert/Property_1_Variant2_cja0nv.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741797/cartizn/concert/Property_1_Variant4_o1neqe.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690741795/cartizn/concert/Property_1_Variant3_wkykdj.png"
    ];

    const {
        currentIndex1,
        currentIndex2,
        currentIndex3,
        currentIndex4,
        currentIndex5
    } = useInterval(data1, data2, data3, data4, data5)

    return <motion.div
        initial={{ x: isFromRight ? "100%" : "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: isFromRight ? "-100%" : "100%", opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col h-fit">
        <div className="lg:flex xl:h-fit  ">
            <div className="hidden xl:flex xl:flex-2 xl:h-full  ">
                <img className="object-contain max-w-[20rem] border-[0.1px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className="object-contain border-[0.1px] max-w-[20rem] border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>
            <div className=" xl:flex-1 flex flex-col py-10 md:py-20 xl:px-0  px-3 items-center justify-center border-[0.1px] border-[#F5F5F5] text-[#F5F5F5] ">
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

        <div className="hidden xl:flex h-fit w-screen p-0 m-0 border-[0.1px] border-[#F5F5F5]">
            <div className="flex flex-1 items-center justify-center">
                <img className=" border-[0.1px] max-w-[20rem] border-[#F5F5F5]" src={data3[currentIndex3]} />
            </div>

            <div className="flex flex-2 items-center ">
                <img className=" border-[0.1px] max-w-[20rem] border-[#F5F5F5]" src={data4[currentIndex4]} />
                <img className=" border-[0.1px] max-w-[20rem] border-[#F5F5F5] " src={data5[currentIndex5]} />
            </div>
        </div>
        <div className="m-auto xl:hidden  ">
            <div className="md:grid-cols-2  md:grid">
                <img className="w-screen border-[0.1px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className="w-screen border-[0.1px] border-[#F5F5F5]" src={data2[currentIndex2]} />
                <img className="w-screen border-[0.1px] border-[#F5F5F5]" src={data3[currentIndex3]} />
                <img className="w-screen border-[0.1px] border-[#F5F5F5]" src={data4[currentIndex4]} />
                <img className="w-screen border-[0.1px] border-[#F5F5F5] lg:mx-[15rem] md:mx-[11rem]" src={data5[currentIndex5]} />
            </div>
        </div>
    </motion.div>;
};

export default Concerts;
