import woman from './../../../assets/young-woman.png';

export const Skill = () => {
  return (
    <div className="flex bg-white-500">
      <section className="mx-auto max-w-[1100px] flex flex-row justify-between ">
        <div className="flex flex-col">
          <p className="w-[573px] h-[246px]  text-black font-inter text-[64px] font-bold leading-tight tracking-tighter">
            Up your <span className="text-[#7F56D9]">skills</span> to{' '}
            <span className="text-[#7F56D9]">advance</span> your{' '}
            <span className="text-[#7F56D9]">career</span> path
          </p>
          <div className="mt-[-70px]">
            <p className="w-[487px] h-[58px] text-[#646464] font-inter text-[16px] font-[400] leading-[28.8px]">
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
            <div className="flex items-center">
              <button className="w-[157px] h-[60px] p-[16px 28px] mr-[24px] font-inter text-lg font-semibold leading-7 tracking-normal rounded-md  text-white border-[3px] border-solid bg-[#7F56D9] border-[#E9D7FE]">
                Get Started
              </button>
              <button className="w-[157px] h-[60px] p-[16px 28px]  font-inter text-lg font-semibold leading-7 tracking-normal rounded-md  text-[#6941C6] border-[3px] border-solid bg-[#E9D7FE] border-[#E9D7FE]">
                Get free trial
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-[495.72px] h-[495.72px] rounded-full border-[1.76px] border-solid border-purple-500 mx-auto my-16"></div>

          <div className="bg-purple-500 absolute top-[14%] left-[5%] transform translate[-50%,-50%] w-[495px] h-[495px] rounded-full border-[5px] border-solid border-purple-500">
            <img
              className="flex items-center  mt-[1rem] ml-10"
              src={woman}
              alt="woman"
            />
          </div>
          <div className="absolute top-[44%] left-[-9%] transform translate[-50%,-50%] w-[495px] h-[495px] rounded-full border-[5px]">
            <div className="text-black">
              <strong>2K+</strong>
              <span>Video Courses</span>
            </div>
          </div>
          <div className="absolute top-[84%] left-[-10%] transform  rounded-full border-[5px]">
            <div className="bg-[#7F56D9] w-[42.84px] h-[42.84px] rounded-full  border-[0.76px] border-solid border-[#7F56D9] absolute"></div>
          </div>

          <div className="absolute top-[34%] left-[90%] transform rounded-full border-[5px]">
            <div className="text-black">
              <strong>5K+</strong>
              <span>Video Courses</span>
            </div>
          </div>

          <div className="absolute top-[70%] left-[90%]    rounded-full border-[5px]">
            <div className="text-black">
              <strong>250+</strong>
              <span>Tutors</span>
            </div>
          </div>
        </div>

        {/* <div className="w-[495.72px] h-[495.72px] rounded-full border-[1.76px] border-solid border-purple-500 mx-auto my-16"></div>
        <div className="w-[495.72px] h-[495.72px] rounded-full border-[1.76px] border-solid border-purple-500 mx-auto my-16"></div> */}
      </section>
    </div>
  );
};

export default Skill;
