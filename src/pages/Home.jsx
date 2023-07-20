import About from "../components/About";
import Explore from "../components/Explore";
import Navbar from "../components/Navbar";


const Home = () => {
  return <div className="lg:h-100% lg:overflow-y-clip xl:h-screen relative overflow-x-clip">
    <Navbar/>
    <About/>
    <Explore/>
  </div>;
};

export default Home;
