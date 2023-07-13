import About from "../components/About";
import Explore from "../components/Explore";
import Navbar from "../components/Navbar";


const Home = () => {
  return <div className="h-screen overflow-hidden">
    <Navbar/>
    <About/>
    <Explore/>
  </div>;
};

export default Home;
