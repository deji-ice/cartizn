import Concerts from "../components/Concerts";
import Tabs from "../components/Tabs";
import { useState } from 'react';

const Catalog = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderContentComponent = () => {
        switch (activeTab) {
            case 0:
                return <ConcertsEventsComponent />;
            case 1:
                return <PortraitShootComponent />;
            case 2:
                return <CreativeShootComponent />;
            case 3:
                return <LetsTalkComponent />;
            default:
                return null;
        }
    };
    return <div>
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        {/* <div className="content-wrapper">{renderContentComponent()}</div> */}
        <Concerts/>
    </div>;
};

export default Catalog;
