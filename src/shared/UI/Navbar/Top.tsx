import React from 'react';
import logo from './../../../assets/logo.svg';

export const TopNavbar = () => {
  return (
    <div className="flex bg-white-500">
      <header className="w-full p-4">
        <section className="mx-auto max-w-[1100px] flex flex-row justify-between ">
          <nav className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-6 w-6" />
              <span className="text-black font-inter text-2xl font-extrabold leading-6 tracking-wide text-left">
                Ed-Circle.
              </span>
            </div>
          </nav>

          <nav className="flex items-center">
            <div>
              <input
                type="text"
                placeholder="Want to learn?"
                className="px-2 py-1 rounded-md border border-gray-300"
              />
            </div>
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
                className="text-black list-none text-base font-medium leading-6 border-none bg-white"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                className="items-center  font-inter text-sm font-semibold leading-5 tracking-normal text-left text-white border border-solid bg-[#7F56D9] border-purple-500 w-[150px] h-[40px] p-[10px 16px] border border-gray-300 rounded-md gap-8"
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
