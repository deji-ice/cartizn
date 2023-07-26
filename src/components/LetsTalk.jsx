/* eslint-disable react/no-unescaped-entities */
import mail from "../assets/image 1359.png"
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";

const LetsTalk = (isFromRight) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Your EmailJS configuration - replace with your actual values
    const emailJsConfig = {
      serviceID: "service_g66m58z",
      templateID: "template_2g1kjhk",
      userID: "w2NRGKSFwV4GT8-3z",
    };

    emailjs
      .send(emailJsConfig.serviceID, emailJsConfig.templateID, {
        from_name: name,
        from_email: email,
        message: message,
      }, emailJsConfig.userID)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          // Reset the form after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  
    

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };
  return     <motion.div
  initial={{ x: isFromRight ? "100%" : "-100%", opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: isFromRight ? "-100%" : "100%", opacity: 0 }}
  transition={{ duration: 1.5 }}
className="flex flex-col text-[#F5F5F5] h-screen xl:h-fit xl:mb-10 ">
    <div className="flex flex-col xl:gap-2 lg:gap-0 py-10 md:py-20 xl:py-10 xl:px-0 px-3 items-center justify-center   ">
      <div className="items-center justify-center flex  gap-2">
        <h1 className="qarkine text-[16px] md:text-2xl lg:text-xl xl:text-[23px]  xl:mt-5">LET'S TALK</h1>
        <img src={mail} className="h-5 md:h-10 md:pb-2" />
      </div>
      <p className="font-thin text-center text-sm mt-6 xl:mt-2 leading-6 px-4 md:text-xl xl:text-sm  ">
        I’m open for bookings and collaboration.
      </p>
    </div>
    <form onSubmit={handleSubmit} className=" flex flex-col mx-10 md:mx-32 xl:mx-auto space-y-5 justify-center md:space-y-10 lg:space-y-20 xl:space-y-10 xl:mt-5 mt-10 md:mt-1  p-4 font-thin">
      <div className="xl:w-[30rem]">
        <label htmlFor="name" className=" text-sm  md:text-xl lg:text-2xl xl:text-base ">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full  px-3 py-1 xl:py-0 border-b-[0.5px] bg-transparent  border-gray-300  "
          required
        />
      </div>
      <div className="">
        <label htmlFor="email" className="text-sm md:text-xl lg:text-2xl xl:text-base ">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" w-full px-3 py-1 xl:py-0 border-b-[0.5px] bg-transparent border-gray-300"
          required
        />
      </div>
      <div className="">
        <label htmlFor="message" className="text-sm md:text-xl lg:text-2xl xl:text-base ">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className=" w-full px-3 py-1 xl:py-0 border-b-[0.5px] bg-transparent border-gray-300 sm:rows-4 md:rows-5 lg:rows-10 xl:rows-7"
          required
        />
      </div>
      <button
        type="submit"
        className="w-fit mt-10 place-self-end px-5 md:px-8  lg:px-10 lg:py-3 xl:py-2 xl:px-6 py-2 border-[0.5px] text-sm md:text-base xl:text-xs lg:text-lg border-[#F5F5F5] text-white  hover:bg-white hover:text-black hover:font-medium"
      >
        Send
      </button>
    </form>

  </motion.div>;
};

export default LetsTalk;
