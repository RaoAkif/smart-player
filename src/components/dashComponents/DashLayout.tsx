import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import CreateButton from '../CreateButton';

const DashLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <div className="m-auto">
      <div className='flex justify-between items-center mt-5 pb-5' style={{borderBottom: '1px solid #e5e7eb'}}>
        <Logo />
        <CreateButton />
      </div>
      <Outlet />
    </div>
  );
};

export default DashLayout;
