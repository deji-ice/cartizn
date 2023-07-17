/* eslint-disable react/no-unescaped-entities */
import mail from "../assets/image 1359.png"

const LetsTalk = () => {
  return  <div className="flex flex-col h-screen">
  <div className="flex flex-col py-10 px-3 items-center justify-center border-[0.5px] border-[#F5F5F5] text-[#F5F5F5]   ">
      <div className="items-center justify-center flex  gap-2">
          <h1 className="qarkine text-[16px] ">LET'S TALK</h1>
          <img src={mail} className="h-5" />
      </div>
      <p className="font-thin text-center text-sm mt-4 leading-6 px-4">
      I’m open for bookings and collaboration.
      </p>
  </div>
 
</div>;
};

export default LetsTalk;
