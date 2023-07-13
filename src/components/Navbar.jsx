/* eslint-disable react/no-unescaped-entities */
import DensityLargeIcon from '@mui/icons-material/DensityLarge';

const Navbar = () => {
  return <div className="flex border border-y-zinc-300 text-white ">
    <div className="border flex-8 border-y-zinc-300 p-10">
        logo
    </div>
    <div className="border flex-1 border-y-zinc-300 p-10 text-center"> 
        "The ways of <span className="text-yellow-500">Carti.</span> are not regular"
    </div>
    <div className="border flex-9 border-y-zinc-300 p-10">
    <DensityLargeIcon />
    </div>
  </div>;
};

export default Navbar;
