import Img from "../../src/Image/about.png";
import Image from "next/image";
import "../globals.css";
//import Navbar from "../Component/Navbar";


export default function page() {
  return (
    <>

      <div className="w-screen min-h-screen my-5 ">
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
            <p className="sm:pl-9 pl-0 font-light text-xl">
              {" "}
              Project Completed{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center">
            <h1 className="text-[#6c57d2] text-3xl font-semibold"> 25+ </h1>
            <p className="sm:pl-9 pl-0 font-light text-xl">
              Years Of Experience
            </p>
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
      <div className="w-screen min-h-screen h-auto my-5 pt-9">
        <div className="md:w-[95vw] md:min-h-[92vh]  2xl:w-[1620px] m-auto grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-2">
          <div className="flex flex-col justify-center sm:gap-5 gap-3 sm:pl-9 pl-4 ">
            <h4 className="text-[#ff792e] sm:pl-9 pl-0">Who We Are</h4>
            <h1
              className={`text-4xl sm:pl-9 pl-0 xl:text-6xl text-start font-semibold leading-tight`}
            >
              Company Founded When You Need Marketing Results
            </h1>
            <Image src={Img} height={"95%"} width={"95%"} />
          </div>
          <div className="flex flex-col justify-center gap-5 sm:pl-9 pl-4">
            <p className="sm:pl-9 pl-0 font-light text-lg">
              Mauris sed purus cursus, feugiat nunc ut, sodales nisl, nulla
              facilisi. Maecenas scelerisque tempus tristique cras quis euismod
              arcu. Maecenas scelerisque tempus tristique cras quis euismod
              arcu.
            </p>
            <h1 className={`text-3xl sm:pl-9 pl-0 text-start font-semibold`}>
              Contact Us
            </h1>
            <div className="flex flex-col gap-3 sm:pl-9 pl-0">
              <div className="flex gap-4 md:gap-2 my-5 items-center self-start justify-items-start gap-3 justify-center">
                <div class="drop-shadow-md w-[15px] h-[15px] bg-[#f78c45]">
                  {" "}
                </div>
                <h1 className=" text-lg md:text-3xl sm:pl-9 pl-0 text-start font-semibold leading-tight">
                  2001
                </h1>
                <p className="sm:pl-9 pl-0 font-light text-base md:text-xl">
                  Startup Company Founded
                </p>
              </div>
              <div className="flex gap-2 my-5 items-center self-start justify-items-start gap-3 justify-center">
                <div class="drop-shadow-md w-[15px] h-[15px] bg-[#f78c45]">
                  {" "}
                </div>
                <h1 className="text-lg md:text-3xl sm:pl-9 pl-0 text-start font-semibold leading-tight">
                  2012
                </h1>
                <p className="sm:pl-9 pl-0 font-light text-base md:text-xl">
                  Create Professional Teams
                </p>
              </div>
              <div className="flex gap-2 my-5 items-center self-start justify-items-start gap-3 justify-center">
                <div class="drop-shadow-md w-[15px] h-[15px] bg-[#f78c45]">
                  {" "}
                </div>
                <h1 className="text-lg md:text-3xl sm:pl-9 pl-0 text-start font-semibold leading-tight">
                  2019
                </h1>
                <p className="sm:pl-9 pl-0 font-light text-base md:text-xl">
                  Open New Brunch On Prime Location
                </p>
              </div>
              <div className="flex gap-2 my-5 items-center self-start justify-items-start gap-3 justify-center">
                <div class="drop-shadow-md w-[15px] h-[15px] bg-[#f78c45]"></div>
                <h1 className="text-lg md:text-3xl sm:pl-9 pl-0 text-start font-semibold leading-tight">
                  2023
                </h1>
                <p className="sm:pl-9 pl-0 font-light text-base md:text-xl">
                  Winning Best Agency Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen md:min-h-[650px] grid pt-9">
        <div className="flex flex-col md:w-1/2 m-auto justify-center my-5 md:my-0 items-center gap-3">
          <h4 className="text-[#ff792e] sm:pl-9 px-2 font-light text-lg animate-bounce">
            Our Mission & value
          </h4>
          <h1 className="text-3xl px-2 font-semibold leading-tight text-center">
            Why Our Client Mostly Time <br /> Working With Us
          </h1>
          <p className="sm:pl-9 px-2 font-light text-lg text-center">
            Etiam viverra purus sed aliquet tincidunt diam auctor nibhe eget
            elementum lobortis ante massa quis dui suspendisse.
          </p>
        </div>
        <div className="2xl:w-[1620px] w-[96vw] my-5 md:my-0 m-auto grid grid-cols-1 md:grid-cols-3 sm:gap-4 gap-4">
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg border border-rose-600  h-[300px]">
            <Image
              className="bg-[#fff0ea] rounded-full"
              src={Img}
              width={80}
              height={80}
            />
            <h1 className="font-light text-center text-2xl">Market Analysis</h1>
            <p className="font-light text-center text-2xl px-2">
              Etiam viverra purus seder aliquet tincidunt diamvel amet.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg border border-rose-600  h-[300px]">
            <Image
              className="bg-[#ddfffe] rounded-full"
              src={Img}
              width={80}
              height={80}
            />
            <h1 className="font-light text-center text-2xl">Market Analysis</h1>
            <p className="font-light text-center text-2xl px-2">
              Etiam viverra purus seder aliquet tincidunt diamvel amet.
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg border border-rose-600  h-[300px]">
            <Image
              className="bg-[#fefbdf] rounded-full"
              src={Img}
              width={80}
              height={80}
            />
            <h1 className="font-light text-center text-2xl">Market Analysis</h1>
            <p className="font-light text-center text-2xl px-2">
              Etiam viverra purus seder aliquet tincidunt diamvel amet.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen m-auto md:min-h-[650px] grid">
        <div className="flex flex-col md:w-1/2 m-auto justify-center my-5 items-center gap-3">
          <h4 className="text-[#ff792e] sm:pl-9 px-2 font-light text-lg animate-bounce">
            Our Mission & value
          </h4>
          <h1 className="text-3xl px-2 font-semibold leading-tight text-center">
            Why Our Client Mostly Time <br /> Working With Us
          </h1>
          <p className="sm:pl-9 px-2 font-light text-lg text-center">
            Etiam viverra purus sed aliquet tincidunt diam auctor nibhe eget
            elementum lobortis ante massa quis dui suspendisse.
          </p>
        </div>
        <div className="2xl:w-[1620px] w-[90vw] my-5 md:my-0 m-auto grid grid-cols-1 md:grid-cols-4 sm:gap-4 gap-4">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image className="bg-[#fff0ea] rounded-lg h-[300px]" src={Img} />
            <h1 className="font-light text-center text-2xl my-2">Adam Smith</h1>
            <p className="font-light text-center text-2xl px-2">Developer.</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image className="bg-[#ddfffe] rounded-lg h-[300px]" src={Img} />
            <h1 className="font-light text-center text-2xl my-2">Adam Smith</h1>
            <p className="font-light text-center text-2xl px-2">Developer</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image className="bg-[#fefbdf] rounded-lg h-[300px]" src={Img} />
            <h1 className="font-light text-center text-2xl my-2">Adam Smith</h1>
            <p className="font-light text-center text-2xl px-2">Developer.</p>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image className="bg-[#fefbdf] rounded-lg h-[300px]" src={Img} />
            <h1 className="font-light text-center text-2xl my-2">Adam Smith</h1>
            <p className="font-light text-center text-2xl px-2">Developer.</p>
          </div>
        </div>
      </div>
      <div className="h-[300px] grid place-content-center">
        <h1 className="w-[90vw] my-5  text-3xl font-semibold leading-tight">
          10k+ Our Trusted Partners:
        </h1>
        <div className="2xl:w-[1620px] w-[90vw] my-5 md:my-0 m-auto grid grid-cols-1 md:grid-cols-4 sm:gap-4 gap-4">
          <div className="flex flex-col gap-2 justify-center items-center my-5">
            <Image
              className="bg-[#fff0ea] rounded-lg h-[100px] border-2"
              src={Img}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              className="bg-[#ddfffe] rounded-lg h-[100px] border-2"
              src={Img}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              className="bg-[#fefbdf] rounded-lg h-[100px] border-2"
              src={Img}
            />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              className="bg-[#fefbdf] rounded-lg h-[100px] border-2"
              src={Img}
            />
          </div>
        </div>
      </div>
    </>
  );
}
