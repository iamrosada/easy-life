import React from 'react';

import logo from './../../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export const TopNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(to);
  };

  return (
    <div className="flex bg-white-500">
      <header className="w-full p-4">
        <section className="mx-auto max-w-[1100px] flex flex-row justify-between ">
          <nav className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-6 w-6" />
              <span className="text-black font-inter text-2xl font-extrabold leading-6 tracking-wide text-left">
                Easy Life
              </span>
            </div>
          </nav>

          <nav className="flex items-center">
            <div className="ml-4">
              <ul className="flex space-x-4">
                <li className="text-black list-none text-base font-medium leading-6">
                  Program
                </li>
                <li className="text-black list-none text-base font-medium leading-6">
                  Enterprise
                </li>
                <li className="text-black list-none text-base font-medium leading-6">
                  Universities
                </li>
              </ul>
            </div>
          </nav>

          <nav className="flex items-center space-x-4">
            <div>
              <button
                type="button"
                onClick={() => handleNavigate('/login')}
                className="text-black  text-base	 font-medium leading-6 border-none bg-white"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => handleNavigate('/create-account')}
                className="items-center  font-inter text-sm font-semibold leading-5 tracking-normal text-left text-white border-[3px] border-solid bg-[#7F56D9] border-[#E9D7FE] w-[150px] h-[40px] p-[10px 16px] border border-gray-300 rounded-md gap-8"
              >
                Create free account
              </button>
            </div>
          </nav>
        </section>
      </header>
    </div>
  );
};

export default TopNavbar;
