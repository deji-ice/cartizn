import About from "../components/About";
import Explore from "../components/Explore";
import Navbar from "../components/Navbar";


const Home = () => {
  return <div className="lg:overflow-y-clip xl:min-h-fit xl:overflow-hidden relative overflow-x-clip">
    <Navbar/>
    <About/>
    <Explore/>
  </div>;
};

export default Home;
