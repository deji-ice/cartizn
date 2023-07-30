/* eslint-disable react/no-unescaped-entities */
import sparkles from "../assets/image 1359 (1).png"
import { motion } from "framer-motion";
import useInterval from "../hooks/useInterval";


// eslint-disable-next-line react/prop-types
const CreativeShoots = ({ isFromRight }) => {

    const data1 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744715/cartiznHD/creative/Property_1_Variant4_ilz6im.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744706/cartiznHD/creative/Property_1_Variant3_r1vzuu.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744696/cartiznHD/creative/Property_1_Variant2_rs0rh4.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744683/cartiznHD/creative/Property_1_Default_eimhxo.png"
    ];
    const data2 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744728/cartiznHD/creative/Property_1_Variant3-3_cxp1wh.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744691/cartiznHD/creative/Property_1_Default-3_uhdwkv.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744698/cartiznHD/creative/Property_1_Variant4-3_y4a8bj.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744696/cartiznHD/creative/Property_1_Variant2-3_x45vfi.png"
    ];
    const data3 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744690/cartiznHD/creative/Property_1_Default-4_icqzbv.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744735/cartiznHD/creative/Property_1_Variant3-4_y5pje8.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744709/cartiznHD/creative/Property_1_Variant2-4_m1hpun.png"
    ];
    const data4 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744695/cartiznHD/creative/Property_1_Variant4-1_yv3gqz.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744735/cartiznHD/creative/Property_1_Default-1_lc6lrq.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744734/cartiznHD/creative/Property_1_Variant3-1_guatyz.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744679/cartiznHD/creative/Property_1_Variant2-1_zl3iww.png",
    ];
    const data5 = [
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744676/cartiznHD/creative/Property_1_Variant2-2_zf61lo.png",
        "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690744675/cartiznHD/creative/Property_1_Variant3-2_lbalxc.png"
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
        <div className="lg:flex xl:fit  ">
            <div className="xl:flex-1 xl:px-0 flex flex-col py-10 md:py-20 px-3 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5] ">
                <div className="items-center justify-center flex xl:gap-2 gap-2 lg:gap-0">
                    <h1 className="qarkine text-[16px] md:text-2xl lg:text-xl  xl:text-[23px] ">
                        CREATIVE&nbsp;SHOOT
                    </h1>
                    <img src={sparkles} className="h-5 md:h-10 md:pb-2" />
                </div>
                <p className="font-thin text-center text-sm mt-4 leading-6 px-4 md:px-10 md:text-xl md:mt-8 md:leading-9
                            lg:px-20 lg:text-xl lg:leading-10 xl:text-sm xl:px-32 xl:mt-2 xl:font-thin xl:leading-relaxed">
                    "Capture the beauty, ignite the imagination. In the realm of creativity, every frame tells a story waiting to unfold."
                </p>
            </div>
            <div className="hidden xl:flex xl:flex-2 xl:h-full  ">
                <img className="object-contain  w-fit border-[0.5px] max-w-[20rem]  border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>

        </div>

        <div className="hidden xl:flex h-fit w-screen p-0 m-0 border-[0.5px] border-[#F5F5F5]">
            <div className="flex flex-1 items-center ">
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5]" src={data3[currentIndex3]} />
                <img className=" border-[0.5px] max-w-[20rem]  border-[#F5F5F5]" src={data4[currentIndex4]} />

            </div>
            <div className="flex flex-1 items-center justify-center">
                <img className=" border-[0.5px]  max-h-[22.531rem] object-contain border-[#F5F5F5] " src={data5[currentIndex5]} />

            </div>


        </div>

        <div className="m-auto xl:hidden ">
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

export default CreativeShoots;
