import { Outlet } from 'react-router-dom';
import Logo from '../Logo';
import CreateButton from '../CreateButton';
import ProfileButton from '../ProfileButton';

const DashLayout = () => {
  const accessToken = localStorage.getItem("accessToken");
  
  return (
    <div className="m-auto">
      <div className='flex justify-between items-center mt-5 pb-5' style={{borderBottom: '1px solid #e5e7eb'}}>
        <Logo />
        {accessToken ? <ProfileButton /> : <CreateButton />}
      </div>
      <Outlet />
    </div>
  );
};

export default DashLayout;
