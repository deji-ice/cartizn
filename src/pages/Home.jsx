import About from "../components/About";
import Explore from "../components/Explore";
import Navbar from "../components/Navbar";


const Home = () => {
  return <div className="lg:h-screen lg:overflow-hidden relative overflow-x-clip border-[0.5px] border-[#F5F5F5]">
    <Navbar/>
    <About/>
    <Explore/>
  </div>;
};

export default Home;
