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

    const animateFadeOut = (element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0.5,
       
          // Set the transform origin to the center
          ease: "power1.easeOut",
        },
        {
          opacity: 1,
          // Scale the image up to make it dissolve from the center
          duration: 3,
          transformOrigin: "center center",
          ease: "power1.easeOut",
        }
      );
    };
      // Function to animate fading in the next image
    //   const animateFadeIn = (element) => {
    //     gsap.to(element, {
    //       opacity: 1,
    //       duration: 1
    //     });
    //   };
    const intervals = [];

    if (data1 && data1.length > 0) {
      const interval1 = setInterval(() => {
        setCurrentIndex1((prevIndex) => (prevIndex + 1) % data1.length); 
        animateFadeOut(image1Ref.current);
      },3100);
      intervals.push(interval1);
    }

    if (data2 && data2.length > 0) {
      const interval2 = setInterval(() => {
        setCurrentIndex2((prevIndex) => (prevIndex + 1) % data2.length);
          animateFadeOut(image2Ref.current);
      }, 3000);
      intervals.push(interval2);
    }

    if (data3 && data3.length > 0) {
      const interval3 = setInterval(() => {
        setCurrentIndex3((prevIndex) => (prevIndex + 1) % data3.length);
          animateFadeOut(image3Ref.current);
      }, 3100);
      intervals.push(interval3);
    }

    if (data4 && data4.length > 0) {
      const interval4 = setInterval(() => {
          animateFadeOut(image4Ref.current);
        setCurrentIndex4((prevIndex) => (prevIndex + 1) % data4.length);
      }, 3200);
      intervals.push(interval4);
    }

    if (data5 && data5.length > 0) {
      const interval5 = setInterval(() => {
          animateFadeOut(image5Ref.current);
        setCurrentIndex5((prevIndex) => (prevIndex + 1) % data5.length);
      }, 3000);
      intervals.push(interval5);
    }

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [  image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,  data1,
    data2,
    data3,
    data4,
    data5,]);

  return {
    currentIndex1,
    currentIndex2,
    currentIndex3,
    currentIndex4,
    currentIndex5,
  };
};

export default useInterval;
