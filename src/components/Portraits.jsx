/* eslint-disable react/no-unescaped-entities */

import camera from "../assets/image 1359 (2).png"
import { motion } from "framer-motion";
import useInterval from "../hooks/useInterval";


// eslint-disable-next-line react/prop-types
const Portraits = ({ isFromRight }) => {

    const data1 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743289/cartiznHD/portraits/Property_1_Default_uy9jx3.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743283/cartiznHD/portraits/Property_1_Variant2_keqkvx.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743301/cartiznHD/portraits/Property_1_Variant3_qfip1p.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743277/cartiznHD/portraits/Property_1_Variant4_k6r3su.png",
    ];
    const data2 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743311/cartiznHD/portraits/Property_1_Variant3-1_qrspfl.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743303/cartiznHD/portraits/Property_1_Variant2-1_lgi4yb.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743308/cartiznHD/portraits/Property_1_Default-1_hjh8hb.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743281/cartiznHD/portraits/Property_1_Variant4-1_c3lai9.png"                       
    ];
    const data3 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743279/cartiznHD/portraits/Property_1_Variant3-2_ncedfe.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743306/cartiznHD/portraits/Property_1_Default-2_tzvcfc.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743271/cartiznHD/portraits/Property_1_Variant4-2_dzda9r.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743304/cartiznHD/portraits/Property_1_Variant2-2_csygiv.png"
    ];
    const data4 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743843/cartiznHD/portraits/Property_1_Default_hquti0.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743836/cartiznHD/portraits/Property_1_Variant3_rtiptc.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743819/cartiznHD/portraits/Property_1_Variant2_mswha7.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743831/cartiznHD/portraits/Property_1_Variant4_ixen3j.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743824/cartiznHD/portraits/Property_1_Variant5_dprhfe.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743824/cartiznHD/portraits/Property_1_Variant6_tndmzb.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743819/cartiznHD/portraits/Property_1_Variant7_sz5119.png" 
    ];
    const data5 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743802/cartiznHD/portraits/Property_1_Variant3-1_wftcz2.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743823/cartiznHD/portraits/Property_1_Variant6-1_aw3prx.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743810/cartiznHD/portraits/Property_1_Variant5-1_nglibr.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743809/cartiznHD/portraits/Property_1_Variant4-1_yck7nh.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743842/cartiznHD/portraits/Property_1_Variant2-1_nshghi.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743826/cartiznHD/portraits/Property_1_Default-1_kn3dsc.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690743810/cartiznHD/portraits/Property_1_Variant7-1_g0ctfm.png"
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

        className="flex flex-col xl:h-fit">
        <div className="lg:flex xl:h-fit ">
            <div className=" xl:flex xl:flex-2  ">
                <img className="object-contain hidden xl:flex max-w-[20rem]   w-fit border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <div className="  flex flex-col py-10 md:py-20 px-3 xl:px-0 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5] ">
                    <div className="items-center  justify-center flex xl:gap-2 gap-2 lg:gap-0">
                        <h1 className="qarkine  text-[16px] md:text-2xl lg:text-xl xl:text-[23px]  ">
                            PORTRAIT&nbsp;SHOOT
                        </h1>
                        <img src={camera} className="h-5 md:h-10 md:pb-2" />
                    </div>
                    <p className="font-thin text-center text-sm mt-4 leading-6 px-4 md:px-10 md:text-xl md:mt-8 md:leading-9
                            lg:px-20 lg:text-xl lg:leading-10 xl:text-sm xl:px-32 xl:mt-2 xl:font-thin xl:leading-relaxed">
                        "Every portrait tells a story, revealing the beauty, vulnerability, and strength within each individual."
                    </p>
                </div>
                <img className=" border-[0.5px] max-w-[20rem]  hidden xl:flex  border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>
        </div>
        <div className="hidden xl:flex h-fit w-screen p-0 m-0 border-[0.5px] border-[#F5F5F5]">
            <div className="flex flex-1 items-center justify-center">
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5]" src={data3[currentIndex3]} />
            </div>

            <div className="flex flex-2 items-center ">
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5]" src={data4[currentIndex4]} />
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5] " src={data5[currentIndex5]} />
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
    </motion.div>;
};

export default Portraits;
