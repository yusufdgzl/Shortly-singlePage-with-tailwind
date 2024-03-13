import { useState } from "react";

export default function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function menuHandler() {
    setMenuIsVisible((prev) => !prev);
  }

  return (
    <>
      <div className="flex flex-col bg-white p-4 px-6 min-h-screen  lg:py-5 ">
        <nav className="flex space-x-10 justify-between items-center lg:items-start ">
          <h1 className="text-4xl font-bold text-slate-800 ">Shortly</h1>
          <div className=" lg:hidden ">
            <button
              onClick={menuHandler}
              className={`hamburger block ${menuIsVisible ? "open" : ""}  `}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
          <div className="hidden lg:flex justify-between items-center w-full pl-10 ">
            <div className="space-x-10 text-gray-400 font-bold text-lg">
              <a className="hover:text-black" href="#">
                Features
              </a>
              <a className="hover:text-black" href="#">
                Pricing
              </a>
              <a className="hover:text-black" href="#">
                Resources
              </a>
            </div>
            <div className="space-x-8">
              <button className="text-gray-400 font-bold text-lg hover:text-black">
                Login
              </button>
              <button className="btn">Sign Up</button>
            </div>
          </div>
        </nav>
        <div className="flex flex-col my-10 space-y-10 justify-center  md:items-center lg:flex-row-reverse  lg:justify-between">
          <img
            src="/images/illustration-working.svg"
            className="max-w-3xl"
            alt=""
          />
          <div className="flex flex-col items-center text-center space-y-6 lg:space-y-10 max-w-lg lg:items-start lg:text-left lg:justify-center">
            <h2 className="text-5xl font-[700] lg:text-[65px]">
              More than just shorter links
            </h2>
            <p className="text-2xl text-slate-400 max-w-md md:text-3xl">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn text-2xl py-5 px-12">Get Started</button>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 px-6  ">
        <div className="flex flex-col space-y-6 mt-20  max-w-[850px] mx-auto -translate-y-16 ">
          <div className="bg-[#3B3054] p-10 rounded-lg relative ">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-between md:items-center">
              <input
                type="text"
                placeholder="Shorten a link here"
                className="py-3 w-full  px-3 rounded-lg placeholder:text-yellow-500 placeholder:text-lg"
              />
              <button className="btn rounded-lg md:w-52 font-normal">Shorten It!</button>
            </div>
            <span className="absolute bottom-3 left-8 text-red-400">
              Please enter a valid URL
            </span>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">https://frontendmentor.io</p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">https://rel.ink/k4IKyk</p>
              <button className="btn mt-2 py-2 rounded-lg font-normal md:mt-0">Copy</button>
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">https://twitter.com/frontendmentor</p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">https://rel.ink/gxOXp9</p>
              <button className="btn mt-2 py-2 bg-[#3B3054] hover:bg-[#6d5d94] rounded-lg font-normal md:mt-0">Copy</button>
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">https://linkedin.com/frontend-mentor</p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">https://rel.ink/gob3X9</p>
              <button className="btn mt-2 py-2 rounded-lg font-normal md:mt-0">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
