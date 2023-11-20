import speakIcon from './../../../assets/Speak.svg';
import briefIcon from './../../../assets/Briefcase.svg';
import ideaIcon from './../../../assets/idea.svg';

import expirienceIcon from './../../../assets/user_experience.svg';
import userMarkIcon from './../../../assets/user_mark.svg';
import userWebIcon from './../../../assets/user_web.svg';
import nextIcon from './../../../assets/next.svg';
import nextPurpleIcon from './../../../assets/next_purple.svg';

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

export const OuServiceComponent = () => {
  return (
    <section className="mx-auto max-w-[1100px]">
      <div className="mt-[8rem] flex items-center justify-center flex-col">
        <span className="text-[#6941C6] leading-6 font-[600] mb-[10px]">
          Our Services
        </span>
        <strong className="text-[#101828] flex leading-[44px] font-[600] items-center text-3xl">
          Fostering a playful & engaging learning
        </strong>
        <strong className="text-[#101828] flex leading-[44px] font-[600] items-center text-3xl mt-[-1rem]">
          environment
        </strong>
      </div>
    </section>
  );
};

export const UserExperience = () => {
  const itemsContent = [
    {
      id: 1,
      title: 'Medical universities',
      icon: expirienceIcon,
      content: 'Lessons on design that cover the most',
      bg: '#7F56D9',
      border: '[#7F56D9',
      color: '#fff',
      color_learn_more: '#fff',
      icon_next: nextIcon,
    },
    {
      id: 2,
      title: 'Engineering universities',
      icon: userWebIcon,
      content: 'Classes in development that cover .',
      bg: '#EAECF0',
      border: '#000',
      color: '#101828',
      color_content: '#646464',
      color_learn_more: '#7F56D9',
      icon_next: nextPurpleIcon,
    },
    {
      id: 3,
      title: 'Economics universities',
      icon: userMarkIcon,
      content: 'Marketing courses that cover the .',
      bg: '#EAECF0',
      border: '#000',
      color: '#101828',
      color_content: '#646464',
      color_learn_more: '#7F56D9',
      icon_next: nextPurpleIcon,
    },
    {
      id: 4,
      title: 'Humanities universities',
      icon: userMarkIcon,
      content: 'Marketing courses that cover the most .',
      bg: '#EAECF0',
      border: '#000',
      color: '#101828',
      color_content: '#646464',
      color_learn_more: '#7F56D9',
      icon_next: nextPurpleIcon,
    },
  ];
  return (
    <section className="mx-auto max-w-[1100px]">
      <div className="flex flex-row mt-2 mb-10">
        {itemsContent.map(item => (
          <div
            key={item.id}
            className={`w-[373px] h-[243px] m-[20px] rounded-[12px] font-inter bg-[${item.bg}] text-base  font-normal leading-[40px] tracking-normal text-left border-[0.03px] border-solid border-[${item.border}]`}
          >
            <div className="p-[20px]">
              <div className="flex items-center ">
                <img
                  className={`mr-[20px] w-[48px] h-[48px] top-[20.94px] left-[18.36px]  bg-[#F4EBFF] p-[12px] border-[0.6px] border-solid border-[${item.border}] rounded-[10.36px] gap-[10px]`}
                  src={item.icon}
                  alt="ring"
                />
                <strong
                  className={`leading-[36px] font-bold text-[24px] text-[${item.color}]`}
                >
                  {item.title}
                </strong>
              </div>
              <p
                className={`font-normal text-[16px] p-0 flex-wrap gap-0 leading-[28px] text-[${item.color_content}]`}
              >
                {item.content}
              </p>
              <div className="flex items-center">
                <p
                  className={`mr-[21px] font-[500] text-[${item.color_learn_more}]`}
                >
                  Learn More
                </p>
                <img
                  src={item.icon_next}
                  className={`w-[5px] h-[10px] border[1.5px]`}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
