import sparkles from "../assets/image 1359 (1).png"
import mail from "../assets/image 1359.png"
import camera from "../assets/image 1359 (2).png"
import fire from "../assets/image 1359 (3).png"
import React from "react";
import { gsap } from "gsap";

// Custom Hook to generate an array of refs
const useRefsArray = (length) => {
    return React.useMemo(() => Array.from({ length }, () => React.createRef()), [length]);
};

// eslint-disable-next-line react/prop-types
const Tabs = ({ activeTab, onTabClick }) => {
    const Tab = [
        {
            content: "CONCERTS & EVENTS",
            image: fire,
        },
        {
            content: "PORTRAIT SHOOT",
            image: camera,
        },
        {
            content: "CREATIVE SHOOT",
            image: sparkles,
        },
        {
            content: "LET'S TALK",
            image: mail,
        },
    ];

    const exploreRefs = useRefsArray(Tab.length);




    const handleHover = (index) => {
        gsap.to(exploreRefs[index].current, {
            width: "100%",
            duration: 0.7,
            ease: "power1.inOut",
        });
    };

    const handleHoverOut = (index) => {
        gsap.to(exploreRefs[index].current, {
            width: "0%",
            duration: 1,
            ease: "power4",
        });
    };

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 ">
            {Tab.map((tab, index) => (
                <div
                    key={index}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHoverOut(index)}
                    className="relative"
                >
                    <div ref={exploreRefs[index]} className="bg-white h-full  pink absolute left-0">
                      
                    </div>
                    <div
                        className={`relative p-4 py-5 md:py-8 lg:py-8 lg:p-2 flex items-center justify-center text-xs md:text-xl lg:text-[18px] border-[0.5px] gap-1
              text-center border-[#F5F5F5] hover:cursor-pointer hover:text-black hover:font-semibold ${activeTab === index ? "text-black bg-white font-semibold " : "text-[#F5F5F5]"
                            }`}
                          
                        onClick={() => {
                            onTabClick(index)
                            handleHover(index)
                        }}
                    >
                        {tab.content} <img className="h-3 md:h-5" src={tab.image} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Tabs;
