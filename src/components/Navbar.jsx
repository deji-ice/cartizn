/* eslint-disable react/no-unescaped-entities */
import DensityLargeIcon from '@mui/icons-material/DensityLarge';

const Navbar = () => {
  return <div className="flex border-[0.5px] border-y-zinc-300 text-white font-thin text-sm h ">
    <div className="border-[0.5px] flex-8 border-y-zinc-300 p-6">
        logo
    </div>
    <div className=" border-[0.5px] flex-1 border-y-zinc-300 p-6 text-center"> 
        "The ways of <span className="text-[#DEC649] font-light">Carti.</span> are not regular"
    </div>
    <div className="border-[0.5px] flex-9 border-y-zinc-300 p-6">
    <DensityLargeIcon />
    </div>
  </div>;
};

export default Navbar;
