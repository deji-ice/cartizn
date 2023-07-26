import { gsap } from "gsap";
import { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import Concerts from "../components/Concerts";
import CreativeShoots from "../components/CreativeShoots";
import LetsTalk from "../components/LetsTalk";
import Portraits from "../components/Portraits";
import Tabs from "../components/Tabs";

const Catalog = () => {
    useEffect(() => {
        // GSAP fade-in transition
        gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1, onComplete: () => gsap.set('body', { clearProps: 'opacity' }) });
    }, []);

    const [activeTab, setActiveTab] = useState(0);
    const [prevActiveTab, setPrevActiveTab] = useState(null);

    const handleTabClick = (index) => {
        setPrevActiveTab(activeTab);
        setActiveTab(index);
    };

    const renderContentComponent = () => {
        let isFromRight;
        
        switch (activeTab) {
          case 0:
            // isFromRight = prevActiveTab === 1 || prevActiveTab === 2 || prevActiveTab === 3;
            return <Concerts isFromRight={false} />;
          case 1:
            isFromRight = prevActiveTab === 0;
            return <Portraits isFromRight={isFromRight} />;
          case 2:
            isFromRight = prevActiveTab === 0 || prevActiveTab === 1;
            return <CreativeShoots isFromRight={isFromRight} />;
          case 3:
            isFromRight = prevActiveTab === 2;
            return <LetsTalk isFromRight={isFromRight} />;
          default:
            return <Concerts isFromRight={false} />;
        }
      };
      
      

    return (
        <div className="body">
            <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
            <div className="content-wrapper">
                {renderContentComponent()}
            </div>
            <Footer />
        </div>
    );
};

export default Catalog;
