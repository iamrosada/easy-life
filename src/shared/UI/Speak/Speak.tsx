import speakIcon from './../../../assets/Speak.svg';
import briefIcon from './../../../assets/Briefcase.svg';
import ideaIcon from './../../../assets/idea.svg';

export const SpeakComponent = () => {
  return (
    <section className="mx-auto max-w-[1100px]">
      <ul className="flex justify-start m-0 p-0">
        <li className="flex mr-[3rem] items-center text-white list-none text-base font-medium leading-6">
          <img className="w-[3rem] h-[3rem]" src={speakIcon} alt="speak-icon" />
          <span className="p-3 text-[#1D2939B2] font-inter text-base font-normal leading-[40px] tracking-normal text-left">
            Public Speaking
          </span>
        </li>
        <li className=" flex mr-[3rem]   items-center text-white list-none text-base font-medium leading-6">
          <img className="w-[3rem] h-[3rem]" src={briefIcon} alt="briefIcon" />
          <span className="p-3 text-[#1D2939B2] font-inter text-base font-normal leading-[40px] tracking-normal text-left">
            Career-Oriented
          </span>
        </li>
        <li className="flex mr-[3rem]  items-center text-white list-none text-base font-medium leading-6">
          <img className=" w-[3rem] h-[3rem]" src={ideaIcon} alt="ideaIcon" />
          <span className="p-3 text-[#1D2939B2] font-inter text-base font-normal leading-[40px] tracking-normal text-left">
            Creative Thinking
          </span>
        </li>
      </ul>
    </section>
  );
};

export default SpeakComponent;
