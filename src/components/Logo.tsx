const Logo = () => {
  return (
    <div className='flex items-center ml-2'>
      <img
        src='/assets/images/SmartCoachLogo.jpg'
        alt='Smart Coach Logo'
        width={28}
        height={28}
      />
      <span className='pl-2 font-semibold text-xl'>Smart Player</span>
    </div>
  );
};

export default Logo;
