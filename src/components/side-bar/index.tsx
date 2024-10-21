import {
  DoubleLeft,
  Help,
  Home,
  ImagesIcon,
  Monitor2,
  Plus,
  Settings,
  StorageBox,
  UpDown,
  User,
} from '@/icons';

const Sidebar = () => {
  const ImgWrapper = ({ path }: any) => {
    return (
      <div className="h-10 w-10">
        <img src={path} alt="" />
      </div>
    );
  };

  const OptionsWrapper = ({ className, icon }: any) => {
    return <div className={`px-3 py-2 rounded-lg ${className}`}>{icon}</div>;
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center gap-2 py-5 px-2">
        <p className="w-7 p-1 rounded-lg bg-custom-100 text-center">
          <img className="w-[18px]" src="images/DcluttrLogo.png" alt="" />
        </p>
        <div className="flex items-center gap-2 border rounded-lg p-1">
          <span className="bg-custom-100 h-5 w-5 flex items-center justify-center text-white p-1 text-[10px] rounded-md">
            SS
          </span>
          <UpDown width={13} />
        </div>
        <DoubleLeft width={16} />
      </div>
      <div className="flex h-full">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col py-6 gap-4 mx-[5px]">
            <ImgWrapper path="images/Brand1.png" />
            <ImgWrapper path="images/Brand2.png" />
            <ImgWrapper path="images/Brand3.png" />
            <div className="flex items-center justify-center h-10 w-10 border rounded-xl text-primary">
              <Plus width={20} />
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-center mb-10">
            <User width={20} />
            <p className="h-7 w-7 bg-custom-200 text-white rounded-full text-center text-xs font-semibold pt-[6px]">
              SS
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center bg-gray-100 py-9 px-4">
          <div className="flex flex-col gap-2 ">
            <OptionsWrapper
              className="bg-primary text-primary bg-opacity-10"
              icon={<Home width={20} />}
            />
            <OptionsWrapper icon={<Monitor2 width={20} />} />
            <OptionsWrapper icon={<StorageBox width={20} />} />
            <OptionsWrapper icon={<ImagesIcon width={20} />} />
          </div>

          <div className="text-grey-700">
            <p className='p-2 mb-[10px]'>
              <Help width={20} />
            </p>
            <p className='p-2'>
              <Settings width={20} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
