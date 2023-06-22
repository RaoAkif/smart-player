const Home = () => {
  return (
    <div className="inline-block border border-[#EAECF0] rounded-[8px] p-[24px] mx-[32px] my-[16px]">
      <h2 className="text-[36px] font-semibold">
        Your next event starts in <span className="text-[#6941C6]">3 days</span>
      </h2>
      <p className="text-[#6941C6] font-semibold">See all events</p>
      <div className="mt-[32px] px-[16px] py-[18px] bg-[#F9FAFB] rounded-[8px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex flex-col items-center font-semibold">
              <p>MAY</p>
              <p>29</p>
            </div>
            <div className="flex flex-col ml-[16px]">
              <h3 className="font-semibold text-[20px]">Tactic Practice</h3>
              <p>4.00 PM, Greenhill</p>
            </div>
          </div>
          <div>
            <p className="text-[#475467]">8 players</p>
          </div>
          <div>
            <img
              src="/assets/icons/OptionsIcon.png"
              alt="Options Icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
