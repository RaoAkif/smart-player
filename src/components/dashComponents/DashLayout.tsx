import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const DashLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <div className="m-auto mr-14 -ml-5">
      <div className='flex justify-center items-right mt-5 ml-10'>
        <Logo />
      </div>
      <Outlet />
    </div>
  );
};

export default DashLayout;
