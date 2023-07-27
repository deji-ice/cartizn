/* eslint-disable react/no-unescaped-entities */
import sparkles from "../assets/image 1359 (1).png"
import { motion } from "framer-motion";
import useInterval from "../hooks/useInterval";


// eslint-disable-next-line react/prop-types
const CreativeShoots = ({ isFromRight }) => {

    const data1 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant3_p77jl3.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant4_l3tl5p.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Variant2_hh4xtb.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594306/cartizn/creative%20shoots/Property_1_Default_eqyspq.png",];
    const data2 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant4_ycmost.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Default_wyivhk.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant3_pdryuk.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594271/cartizn/creative%20shoots/Property_1_Variant2_oybbzd.png",];
    const data3 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594809/cartizn/creative%20shoots/Property_1_Default_xr17wt.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594808/cartizn/creative%20shoots/Property_1_Variant3_k0ymip.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594808/cartizn/creative%20shoots/Property_1_Variant2_yhhnnl.png",];
    const data4 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594368/cartizn/creative%20shoots/Property_1_Variant4_aazupf.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Variant2_fx8wfc.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Default_qevbzf.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594369/cartizn/creative%20shoots/Property_1_Variant3_nbmulw.png",];
    const data5 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594333/cartizn/creative%20shoots/Property_1_Variant3_xeahzi.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1689594333/cartizn/creative%20shoots/Property_1_Variant4_qv36oy.png",];
   
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
                <img className="object-contain  w-fit border-[0.5px] border-[#F5F5F5] " src={data1[currentIndex1]} />
                <img className=" border-[0.5px] border-[#F5F5F5]" src={data2[currentIndex2]} />
            </div>

        </div>

        <div className="hidden xl:flex h-fit w-screen p-0 m-0 border-[0.5px] border-[#F5F5F5]">
            <div className="flex flex-1 items-center ">
                <img className=" border-[0.5px] border-[#F5F5F5]" src={data3[currentIndex3]} />
                <img className=" border-[0.5px] border-[#F5F5F5]" src={data4[currentIndex4]} />

            </div>
            <div className="flex flex-1 items-center justify-center">
                <img className=" border-[0.5px] border-[#F5F5F5] " src={data5[currentIndex5]} />

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
