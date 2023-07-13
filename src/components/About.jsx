/* eslint-disable react/no-unescaped-entities */
import carti from "../assets/Property 1=Variant2carti.png"

const About = () => {
    return <section className="text-white flex font-thin h-[18rem]">
        <div className="flex flex-4 p-10">
            socials
        </div>
        <div className="text-sm flex flex-1 flex-col pr-[10.9rem] justify-start pt-5 leading-7">
            <p className="mb-3">
                Hello, i'm <br />
                <span className="text-2xl font-semibold">Fadejimi Ogunleye.</span> <br />
                a Creative Photographer  📸 <br />
                founder of <span className="text-[#DEC649] font-light">CartiZn .</span>
            </p>
            <p className="">With a passion for capturing the beauty of the world through my lens. Photography is more than just a hobby for
                me—it's a way of life. My photography style is a blend of artistry and storytelling. I love experimenting with
                different techniques and perspectives to create unique and visually striking images. From vivid colors and dramatic
                lighting to minimalist compositions, I believe in pushing the boundaries of creativity to make each photograph a work of art.
            </p>
        </div>
        <div className="flex-4 flex grayscale hover:filter-none  hover:ease-linear duration-500">
            <img src={carti} alt="Fadejimi Ogunleye" className="h-[18rem]" />
        </div>
    </section>;
};

export default About;
