import { useEffect, useState } from "react";
import gsap from "gsap";

const useInterval = (
  data1,
  data2,
  data3,
  data4,
  data5,
  image1Ref,
  image2Ref,
  image3Ref,
  image4Ref,
  image5Ref
) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);

  useEffect(() => {
    // Function to animate dissolving effect using GSAP
    const animateDissolve = (element) => {
      gsap.to(element, {
        opacity: 0,

        onComplete: () => {
          gsap.to(element, {
            opacity: 0.5,
    
          });
        },
      });
    };

    const intervals = [];

    if (data1 && data1.length > 0) {
      const interval1 = setInterval(() => {

            animateDissolve(image1Ref.current);
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % data1.length);
      }, 2000);
      intervals.push(interval1);
    }

    if (data2 && data2.length > 0) {
      const interval2 = setInterval(() => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % data2.length);
        animateDissolve(image2Ref.current);
      }, 2000);
      intervals.push(interval2);
    }

    if (data3 && data3.length > 0) {
      const interval3 = setInterval(() => {
        setCurrentIndex3((prevIndex) => (prevIndex + 1) % data3.length);
        animateDissolve(image3Ref.current);
      }, 3000);
      intervals.push(interval3);
    }

    if (data4 && data4.length > 0) {
      const interval4 = setInterval(() => {
        animateDissolve(image4Ref.current);
        setCurrentIndex4((prevIndex) => (prevIndex + 1) % data4.length);
      }, 3200);
      intervals.push(interval4);
    }

    if (data5 && data5.length > 0) {
      const interval5 = setInterval(() => {
        animateDissolve(image5Ref.current);
        setCurrentIndex5((prevIndex) => (prevIndex + 1) % data5.length);
      }, 3500);
      intervals.push(interval5);
    }

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return {
    currentIndex1,
    currentIndex2,
    currentIndex3,
    currentIndex4,
    currentIndex5,
  };
};

export default useInterval;
