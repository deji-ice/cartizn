import { gsap } from "gsap";
import Concerts from "../components/Concerts";
import CreativeShoots from "../components/CreativeShoots";
import LetsTalk from "../components/LetsTalk";
import Portraits from "../components/Portraits";
import Tabs from "../components/Tabs";
import { useEffect, useState } from 'react';

const Catalog = () => {
    useEffect(() => {
        // GSAP fade-in transition
        gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1, onComplete: () => gsap.set('body', { clearProps: 'opacity' }) });
      }, []);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderContentComponent = () => {
        switch (activeTab) {
            case 0:
                return <Concerts />;
            case 1:
                return <Portraits />;
            case 2:
                return <CreativeShoots />;
            case 3:
                return <LetsTalk />;
            default:
                return <Concerts/>;
        }
    };
    return <div className="body">
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="content-wrapper">{renderContentComponent()}</div>
    </div>;
};

export default Catalog;
