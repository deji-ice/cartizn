/* eslint-disable react/no-unescaped-entities */
import DensityLargeIcon from '@mui/icons-material/DensityLarge';

const Navbar = () => {
  return <div className="flex border-[0.5px] border-[#F5F5F5] text-[#F5F5F5] font-thin text-sm h ">
    <div className="border-[0.5px] flex-8 border-[#F5F5F5] p-6">
        logo
    </div>
    <div className=" border-[0.5px] flex-1 border-[#F5F5F5] p-6 text-center"> 
        "The ways of <span className="text-[#DEC649] font-light">Carti.</span> are not regular"
    </div>
    <div className="border-[0.5px] flex-9 border-[#F5F5F5] p-6">
    <DensityLargeIcon className='text-[#F5F5F5]'/>
    </div>
  </div>;
};

export default Navbar;
