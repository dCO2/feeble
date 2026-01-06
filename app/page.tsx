"use client";
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
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useState } from "react";

const navigation = [
  { name: 'How it Works', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Use Case', href: '#' },
  { name: 'FAQ', href: '#' },
]

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
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
            className=" font-gen mt-[24] mx-6 h-[7.5vh] text-[0.8rem] lg:mx-[280] lg:mt-[30] rounded-[200px] shadow-sm
              flex flex-row items-center justify-between bg-white pl-6 pr-5 px-5">
            <div>
              <Logo/>
            </div>
            <div className="hidden lg:flex flex-row gap-4 text-[#8C97A8] font-medium">
              {navigation.map((item) => (
              <a key={item.name} href={item.href} className="px-3 py-2">
                {item.name}
              </a>
            ))}
              {/* <div className="px-3 py-2">How it Works</div>
              <div className="px-3 py-2">Pricing</div>
              <div className="px-3 py-2">Use Case</div>
              <div className="px-3 py-2">FAQ</div> */}
            </div>
            <div className="items-center">
              <button className="hidden bg-[#007AFF] w-26 h-8 text-white rounded-[43.62px] items-center justify-center overflow-hidden whitespace-nowrap text-ellipsis lg:flex">Contact Sales</button>
              <button className="bg-[#007AFF] w-10 h-8 px-2 text-white rounded-[43.62px] lg:hidden items-center justify-center">
              <Bars3Icon aria-hidden="true" className="size-6 " />
              </button>
            </div>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">LOGO</span>
              {/* <Image
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
                width={100}
                height={100}
              /> */}
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        <div className="absolute top-[13.43vh] left-1/2 -translate-x-1/2 flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center gap-[2.22vh]">
            {/* <div className="flex flex-row bg-white rounded-[200px] text-[0.8rem] w-[14.5vw] gap-1.5 px-2 pt-1 pb-1.25
             text-[#006FE8] tracking-tight font-gen font-medium items-center">
              <MsgIconSvg/>
              #1 iMessage Automation Tool
            </div> */}
            {/* <div className="text-[3.2rem] text-center font-gen font-bold leading-[1.2]">
              <span className="text-[#007AFF]">iMessage</span> Automation <br /> for Teams and AI <br /> Workflows.
            </div> */}
            <div className="relative mt-8 lg:mt-18">
            <h1 className="text-[2.2rem] font-gen font-bold tracking-tight text-center text-balance text-black lg:text-[3.2rem] leading-[1.2]">
              <span className="text-[#007AFF]">iMessage</span> Automation <br /> for Teams and AI <br /> Workflows.
            </h1>

            <div className="hidden absolute -top-12 left-1/2 -translate-x-1/2 lg:flex flex-row
             bg-white rounded-[200px] text-[0.8rem] w-auto gap-1.5 px-2 pt-1 pb-1.25
             text-[#006FE8] tracking-tight font-gen font-medium items-center">
              <MsgIconSvg/>
              #1 iMessage Automation Tool
            </div>
            </div>
            <div
              className="text-[0.8rem] lg:text-[0.9rem] text-center text-black font-gen leading-[1.2]">
              Coup lets you, your team, <br  className="lg:hidden"/> or AI workflows send iMessages directly from<br />your phone number, running securely on your Mac or Mac Mini.
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 h-[4.5vh]">
            {/* <div className="h-[4.5vh]">
              <div
                className="bg-[#007AFF] w-auto text-white rounded-[43.62px] text-[0.9rem] p-2 items-center text-center">
                <span>Get Started</span>
              </div>
            </div> */}
            <div
              className="flex flex-row bg-[#007AFF] w-auto text-white rounded-[200px] text-[0.9rem] h-[4.5vh] gap-2 px-4  py-5
               tracking-tight font-gen font-medium items-center justify-center">
              <span className="px-0 flex flex-row items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
                Get Started</span>
            </div>
            <div
              className="flex flex-row bg-none border-[0.5] border-solid border-gray-400 rounded-[200px] text-[0.9rem] w-auto h-[4.5vh] gap-2 px-4  py-5
               text-black tracking-tight font-gen font-medium items-center justify-center">
              <AppleLogo/>
              <span className="px-0 flex flex-row items-center gap-2 overflow-hidden whitespace-nowrap text-ellipsis">
                <LineSvg/>
                Download the Mac app</span>
            </div>
          </div>

        </div>
        <div
          className="absolute top-[83.50vh] left-1/2 -translate-x-1/2 flex flex-col gap-1 text-[0.9rem] items-center overflow-hidden whitespace-nowrap text-ellipsis">
          <span>
            Scroll to learn more
          </span>
          <DownArrowSvg/>
        </div>
      </main>
    </div>
  );
}
