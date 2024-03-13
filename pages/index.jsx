import { useState } from "react";

export default function HomePage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function menuHandler() {
    setMenuIsVisible((prev) => !prev);
  }

  return (
    <>
      <div className="flex flex-col bg-white p-4 px-6   lg:py-5 ">
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
        <div className="flex flex-col relative my-10 space-y-10 justify-center  md:items-center lg:flex-row-reverse  lg:justify-between">
          <div className={`${!menuIsVisible ? 'hidden' :'flex'} flex-col space-y-[21px] absolute bg-[#3B3054] top-0 inset-x-0 text-white p-6 text-center font-bold text-[18px] rounded-lg lg:hidden`}>
            <a className="hover:text-[#2ACFCF]" href="#">Features</a>
            <a className="hover:text-[#2ACFCF]" href="#">Pricing</a>
            <a className="hover:text-[#2ACFCF]" href="#">Resources</a>
            <hr />
            <a className="hover:text-[#2ACFCF]" href="#">Login</a>
            <button className="btn">Sign Up</button>
          </div>
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
      <div className="bg-slate-100  px-6 pb-12 md:pb-32 md:px-0 ">
        <div className="flex flex-col space-y-6 mt-20  max-w-[850px] mx-auto -translate-y-16 ">
          <div className="bg-[#3B3054] p-10 rounded-lg relative ">
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-between md:items-center">
              <input
                type="text"
                placeholder="Shorten a link here"
                className="py-3 w-full  px-3 rounded-lg placeholder:text-yellow-500 placeholder:text-lg"
              />
              <button className="btn rounded-lg md:w-52 font-normal">
                Shorten It!
              </button>
            </div>
            <span className="absolute bottom-3 italic left-8 text-red-400">
              Please enter a valid URL
            </span>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">https://frontendmentor.io</p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">
                https://rel.ink/k4IKyk
              </p>
              <button className="btn mt-2 py-2 rounded-lg font-normal md:mt-0">
                Copy
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">
              https://twitter.com/frontendmentor
            </p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">
                https://rel.ink/gxOXp9
              </p>
              <button className="btn mt-2 py-2 bg-[#3B3054] hover:bg-[#6d5d94] rounded-lg font-normal md:mt-0">
                Copy
              </button>
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-lg text-center md:flex-row md:items-center md:justify-between">
            <p className="text-lg font-bold">
              https://linkedin.com/frontend-mentor
            </p>
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-4 ">
              <p className="font-bold text-[#2ACFCF] text-lg">
                https://rel.ink/gob3X9
              </p>
              <button className="btn mt-2 py-2 rounded-lg font-normal md:mt-0">
                Copy
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center space-y-6 py-10">
          <h2 className="text-[38px] tracking-wider font-bold">
            Advanced Statistics
          </h2>
          <p className="text-[18px] max-w-[320px] text-slate-400 md:max-w-[400px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-[100px] pb-16 md:py-20 md:space-y-0 md:space-x-[30px] md:flex-row">
          <div className="bg-[#2ACFCF] absolute mx-auto inset-x-0 w-2 h-[700px] translate-y-20 md:w-3 md:mx-auto md:left-0 right-0  md:max-h-[600px] md:rotate-90 md:-translate-y-0"></div>
          <div className="bg-white relative   p-6 space-y-6 text-center rounded-lg md:text-left max-w-md ">
            <div className="absolute -top-10 inset-x-0 mx-auto md:mx-0 md:left-10 bg-black flex w-20 h-20 rounded-full ">
              <img
                src="/images/icon-brand-recognition.svg"
                className=" m-auto "
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold pt-4">Brand Recognition</h2>
            <p className="text-[17px] text-slate-400">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          <div className="bg-white relative   p-6 space-y-6 text-center rounded-lg md:text-left max-w-md md:translate-y-8 ">
            <div className="absolute -top-10 inset-x-0 mx-auto md:mx-0 md:left-10 bg-black flex w-20 h-20 rounded-full ">
              <img
                src="/images/icon-detailed-records.svg"
                className=" m-auto "
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold pt-4">Detailed Records</h2>
            <p className="text-[17px] text-slate-400">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          <div className="bg-white relative   p-6 space-y-6 text-center rounded-lg md:text-left max-w-md  md:translate-y-16">
            <div className="absolute -top-10 inset-x-0 mx-auto md:mx-0 md:left-10 bg-black flex w-20 h-20 rounded-full ">
              <img
                src="/images/icon-fully-customizable.svg"
                className=" m-auto "
                alt=""
              />
            </div>

            <h2 className="text-xl font-bold pt-4">Fully Customizable</h2>
            <p className="text-[17px] text-slate-400">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/bg-boost-desktop.svg')] bg-cover bg-[#5d5880] h-[340px] flex flex-col justify-center items-center space-y-6">
        <h2 className="text-4xl font-bold text-white">
          Boost your links today
        </h2>
        <button className="btn text-2xl py-5 px-12">Get Started</button>
      </div>
      <div className="flex flex-col items-center bg-[#232127] py-16 space-y-14 md:space-y-0 md:flex-row md:justify-between md:px-10">
        <img src="/images/logo.svg" alt="" />
        <div className="flex flex-col space-y-14 md:flex-row md:space-x-16 md:space-y-0">
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Features</h3>
            <a className="hover:text-[#2ACFCF]" href="#">
              Link Shortening
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Branded Links
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Analytics
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Resources</h3>
            <a className="hover:text-[#2ACFCF]" href="#">
              Blog
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Developers
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Support
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-center font-semibold text-gray-500">
            <h3 className="text-white text-xl">Company</h3>
            <a className="hover:text-[#2ACFCF]" href="#">
              About
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Our Team
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Careers
            </a>
            <a className="hover:text-[#2ACFCF]" href="#">
              Contact
            </a>
          </div>
        </div>
        <div className=" flex  space-x-7">
          <a href="#">
            <img src="/images/icon-facebook.svg" className="" alt="" />
          </a>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="/images/icon-pinterest.svg" alt="" />
          </a>
          <a href="#">
            <img src="/images/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
