import sparkles from "../assets/image 1359 (1).png"
import mail from "../assets/image 1359.png"
import camera from "../assets/image 1359 (2).png"
import fire from "../assets/image 1359 (3).png"

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


// eslint-disable-next-line react/prop-types
const Tabs = ({ activeTab, onTabClick }) => {
    return <div className="grid grid-cols-2">
        {
            Tab.map((tab, index) => (
                <div
                    key={index}
                    className={`p-4 flex items-center justify-center text-xs border-[0.5px] gap-1
                text-center border-[#F5F5F5] ${activeTab === index ? 'text-black bg-white font-semibold' : 'text-[#F5F5F5]'
                        }`}
                    onClick={() => onTabClick(index)}
                >
                    {tab.content} <img className="h-3" src={tab.image} />
                </div>
            ))
        }

    </div>;
};

export default Tabs;
