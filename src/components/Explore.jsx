import { useRef } from "react";
import { useMediaQuery } from '@react-hook/media-query';
import gsap from 'gsap';
import { Link } from "react-router-dom";
import useInterval from "../hooks/useInterval";


const Explore = () => {
  let explore = useRef(null)

  // Create refs for the images
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const image5Ref = useRef(null);

  const data1 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1690493903/cartiznHD/explore/Property_1_Default_xvgshy.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690493890/cartiznHD/explore/Property_1_Variant2_bvgual.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690493890/cartiznHD/explore/Property_1_Variant3_gyylcb.png"];
  const data2 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495070/cartiznHD/explore/Property_1_Default_vby3sw.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495073/cartiznHD/explore/Property_1_Variant2_hnqzgj.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495070/cartiznHD/explore/Property_1_Variant3_p0pfgv.png"];
  const data3 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494793/cartiznHD/explore/Property_1_Default_mdlntu.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494794/cartiznHD/explore/Property_1_Variant2_th0tpo.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494794/cartiznHD/explore/Property_1_Variant3_ptzymr.png"];
  const data4 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494391/cartiznHD/explore/Property_1_Default_dr9nix.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494390/cartiznHD/explore/Property_1_Variant2_rpasup.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690494393/cartiznHD/explore/Property_1_Variant3_cj549f.png"];
  const data5 = ["https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495047/cartiznHD/explore/Property_1_Default_teoxbo.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495047/cartiznHD/explore/Property_1_Variant2_cvbuf8.png", "https://res.cloudinary.com/dhvwthnzq/image/upload/v1690495048/cartiznHD/explore/Property_1_Variant3_ajlld7.png"];
  // Use the useMediaQuery hook to get the screen size
  const isXlScreen = useMediaQuery('(min-width: 1280px)');

  const {
    currentIndex1,
    currentIndex2,
    currentIndex3,
    currentIndex4,
    currentIndex5
  } = useInterval(
    data1, 
    data2, 
    data3, 
    data4,
    data5, 
    image1Ref,
    image2Ref,
    image3Ref,
    image4Ref,
    image5Ref,)

  const handleHover = () => {
    gsap.to(explore.current, { width: "100%", duration: 1, ease: 'power2.inOut' });
  };

  const handleHoverOut = () => {
    gsap.to(explore.current, { width: "0%", duration: 1, ease: 'power2.inOut' });
  };

  return <section className="flex  xl:h-[30%]  gap-0 p-0">
    {/* TODO */}
    <div className="flex flex-col lg:flex-row xl:flex-1  w-screen  ease-linear duration-500 xl:overflow-x-clip  ">
      <img ref={image1Ref} className="lg:grow object-cover lg:max-w-[23rem] xl:max-w-[24rem] xl:w-[18rem] flex xl:flex-1" src={data1[currentIndex1]} />
      <div className="flex flex-col lg:flex-row  xl:flex-4 xl:whitespace-nowrap">
        <div className="flex flex-row lg:flex-col  ">
          <img ref={image2Ref}  className="flex-grow flex-1 max-h-[12rem] md:max-h-[25rem] object-cover " src={data2[currentIndex2]} />
          <img ref={image3Ref} className="flex-grow flex-1 max-h-[12rem] md:max-h-[25rem] object-cover " src={data3[currentIndex3]} />
        </div>
        <div className="flex flex-row lg:flex-col ">
          <img ref={image4Ref} className="flex-grow max-h-[12rem] md:max-h-[25rem] flex-1 object-cover " src={data4[currentIndex4]} />
          <img ref={image5Ref} className="flex-grow max-h-[12rem] md:max-h-[25rem] flex-1 object-cover " src={data5[currentIndex5]} />
        </div>
      </div>
    </div>

    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      className="relative hidden lg:flex xl:flex-1  items-center justify-center  my-svg hover:text-black text-white border-[0.5px]
         border-[#F5F5F5] hover:ease-linear duration-500 cursor-pointer"
    >
      <div
        ref={explore} className="bg-white h-full absolute left-0 ">
      </div>
      {isXlScreen ? (
        <Link to={"/catalog"} >
          <h1 className="relative z-20 text-5xl pl-10 mr-20 text-right flex items-center  qarkine leading-[8rem] ">
            Explore My World
          </h1>
        </Link>)
        : (
          <h1 className=" relative text-3xl pl-10 pr-20 text-right flex items-center xl:px-16 xl:pr-20 qarkine leading-[6rem] ">
            Explore My World
          </h1>
        )}
      <div className=" lg:relative flex flex-col gap-5 items-center justify-center pr-10">
        <svg width="24" height="200" viewBox="0 0 24 132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M12 0.833333C10.5272 0.833333 9.33333 2.02724 9.33333 3.5C9.33333 4.97276 10.5272 6.16667 12 6.16667C13.4728 6.16667 14.6667 4.97276 14.6667 3.5C14.6667 2.02724 13.4728 0.833333 12 0.833333ZM11.5 3.5L11.5 97.5L12.5 97.5L12.5 3.5L11.5 3.5Z" fill="#F5F5F5" />
          <path className="specific-path" d="M16.06 120.4L13.44 123.02C12.67 123.79 11.41 123.79 10.64 123.02L4.12996 116.5M19.96 116.5L18.92 117.54" stroke="#DEC649" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  </section>;
};

export default Explore;

