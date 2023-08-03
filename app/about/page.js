import Img from "../../src/Image/about.png";
import Image from "next/image";
import "../globals.css";

export default function page() {
  return (
    <div className="w-screen h-screen mt-5">
      <div className="md:w-[95vw] md:h-[92vh] 2xl:w-[1620px] m-auto grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-2">
        <div className="flex flex-col justify-center sm:gap-5 gap-3 sm:pl-9 pl-4 ">
          <h4 className="animate-bounce text-[#ff792e] sm:pl-9 pl-0">
            About us
          </h4>
          <h1
            className={`text-4xl sm:pl-9 pl-0 xl:text-6xl text-start font-semibold leading-tight`}
          >
            we create Bunch <br />
            of Enthusiastic & <br />
            Creative Minds
          </h1>
          <p className="sm:pl-9 pl-0 font-light text-lg">
            Mauris sed purus cursus, feugiat nunc ut, sodales nisl, nulla
            facilisi. Maecenas scelerisque tempus tristique cras quis euismod
            arcu.
          </p>
          <button className="rounded-md sm:ml-9 ml-0 bg-[#f78c45] w-[140px] p-3 text-white font-light">
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={Img} height={"95%"} width={"95%"} alt="image" />
        </div>
      </div>
      <div className="w-screen grid grid-cols-1 md:grid-cols-4 md:mt-0 mt-5 md:gap-0 gap-4">
        <div className="flex items-center flex-col gap-3 justify-center">
          <h1 className="text-[#6c57d2] text-3xl font-semibold"> 5.2 K </h1>
          <p className="sm:pl-9 pl-0 font-light text-xl"> Project Completed </p>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <h1 className="text-[#6c57d2] text-3xl font-semibold"> 25+ </h1>
          <p className="sm:pl-9 pl-0 font-light text-xl">Years Of Experience</p>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <h1 className="text-[#6c57d2] text-3xl font-semibold"> 2.3 K </h1>
          <p className="sm:pl-9 pl-0 font-light text-xl"> Trusted Clients </p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <h1 className="text-[#6c57d2] text-3xl font-semibold"> 184+ </h1>
          <p className="sm:pl-9 pl-0 font-light text-xl"> Team Members </p>
        </div>
      </div>
    </div>
  );
}
