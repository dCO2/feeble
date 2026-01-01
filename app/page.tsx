import AppleLogo from "@/components/AppleLogo";
import CloudsSvg from "@/components/CloudsSvg";
import DownArrowSvg from "@/components/DownArrowSvg";
import EllipseSvg from "@/components/EllipseSvg";
import LineSvg from "@/components/LineSvg";
import Logo from "@/components/Logo";
import MsgIconSvg from "@/components/MsgIconSvg";
import SixBirdsSvg from "@/components/SixBirdsSvg";
import TwoBirdsSvg from "@/components/TwoBirdsSvg";
import TwoOffscreenBirdsSvg from "@/components/TwoOffscreenBirdsSvg";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div>
        <div className="relative top-0 left-0 h-1 w-1">
          {/* ellipse svg */}
          <EllipseSvg/>

          {/* 2 birds svg */}
          <TwoBirdsSvg/>

          {/* 6 birds svg */}
          <SixBirdsSvg/>

          {/* 2 birds svg: animated */}
          <TwoBirdsSvg className="animate-slideup-fadeout"/>

          {/* clouds svg */}
          <CloudsSvg/>

          {/* 2 outer birds */}
          <TwoOffscreenBirdsSvg/>
        </div>
      </div>
      <main className="relative">
        <nav>
          <div
            className=" font-gen w-[62.5vw] h-[7.5vh] text-[0.8rem] mx-auto mt-[3.70vh] rounded-[200px] shadow-sm
              flex flex-row items-center justify-between bg-white pl-6 pr-5 px-5">
            <div>
              <Logo/>
            </div>
            <div className="flex flex-row gap-4 text-[#8C97A8] font-medium">
              <div className="px-3 py-2">How it Works</div>
              <div className="px-3 py-2">Pricing</div>
              <div className="px-3 py-2">Use Case</div>
              <div className="px-3 py-2">FAQ</div>
            </div>
            <div className="items-center">
              <button className="bg-[#007AFF] w-[7.19vw] h-[3.80vh] text-white rounded-[43.62px]">Contact Sales</button>
            </div>
          </div>
        </nav>
        <div className="absolute top-[13.43vh] left-1/2 -translate-x-1/2 flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center gap-[2.22vh]">
            <div className="flex flex-row bg-white rounded-[200px] text-[0.8rem] w-[14.5vw] gap-1.5 px-2 pt-1 pb-1.25
             text-[#006FE8] tracking-tight font-gen font-medium items-center">
              <MsgIconSvg/>
              #1 iMessage Automation Tool
            </div>
            <div className="text-[3.2rem] text-center font-gen font-bold leading-[1.2]">
              <span className="text-[#007AFF]">iMessage</span> Automation <br /> for Teams and AI <br /> Workflows.
            </div>
            <div
              className="text-[0.9rem] text-center text-black font-gen leading-[1.2]">
              Coup lets you, your team, or AI workflows send iMessages directly from<br />your phone number, running securely on your Mac or Mac Mini.
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 h-[4.5vh]">
            <div className="items-center text-center">
              <button
                className="bg-[#007AFF] w-[7.0vw] h-[4.5vh] text-white rounded-[43.62px] text-[0.9rem] pb-7.5 py-2 items-center text-center">
                Get Started
              </button>
            </div>
            <div
              className="flex flex-row bg-none border-[0.5] border-solid border-gray-400 rounded-[200px] text-[0.9rem] w-[14.0vw] h-[4.5vh] gap-2 pl-0 py-5
               text-black tracking-tight font-gen font-medium items-center justify-center">
              <AppleLogo/>
              <span className="px-0 flex flex-row items-center gap-2">
                <LineSvg/>
                Download the Mac app</span>
            </div>
          </div>

        </div>
        <div
          className="absolute top-[83.50vh] left-1/2 -translate-x-1/2 flex flex-col gap-1 text-[0.9rem] items-center">
          <span>
            Scroll to learn more
          </span>
          <DownArrowSvg/>
        </div>
      </main>
    </div>
  );
}
