import { useEffect, useState } from "react";

const useInterval =(data1, data2, data3, data4, data5)=>{
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

    return {currentIndex1, currentIndex2, currentIndex3, currentIndex4, currentIndex5}
}


export default useInterval

