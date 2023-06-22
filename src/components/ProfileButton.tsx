const ProfileButton = () => {
  return (
    <div className='flex items-center rounded-full mr-3' style={{ border: "1px solid #e5e7eb" }}>
      <div className=''>
        <img
          src='/assets/images/ProfilePicture.jpg'
          alt='Profile Picture'
          width={35}
          height={35}
        />
      </div>
    </div>
  );
};

export default ProfileButton;
