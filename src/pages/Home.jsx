import About from "../components/About";
import Explore from "../components/Explore";
import Navbar from "../components/Navbar";


const Home = () => {
  return <div className="lg:overflow-y-clip hide-scrollbar' xl:h-[100%] xl:overflow-hidden relative overflow-x-clip">
    <Navbar/>
    <About/>
    <Explore/>
  </div>;
};

export default Home;
