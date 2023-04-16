import React, { Component } from "react";
import {
  HiMagnifyingGlass,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiCreditCard,
} from "react-icons/hi2";
import { ReactComponent as BMW } from "../assets/bmw.svg";
import { ReactComponent as Ferrari } from "../assets/ferrari.svg";
import { ReactComponent as Toyota } from "../assets/toyota.svg";
import { ReactComponent as Mercedes } from "../assets/mercedes.svg";
import { ReactComponent as Skoda } from "../assets/skoda.svg";
import { ReactComponent as Alfa } from "../assets/alfa.svg";

class Hero extends Component {
  render() {
    return (
      <div>
        {/* Section 1 */}

        <section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Best Deals Always Guaranteed
              </h1>
              <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">
                Our mission is to provide top-rated Used Cars in BC at
                guaranteed lowest rates. <b>Imagine the unimaginable</b>
              </p>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="/mustang_red.png" alt="mockup" />
            </div>
          </div>
        </section>
        {/* Section 2 */}

        {/* Icon Blocks */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
            {/* Card */}
            <div className="w-full h-full  shadow-lg rounded-3xl p-5 bg-secondary">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-red-700 bg-red-900">
                  <HiMagnifyingGlass />
                </div>
                <div className="flex-shrink-0 place">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Step 1
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Search our inventory online or visit us to find your dream car
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="w-full h-full  shadow-lg rounded-3xl p-5 bg-secondary">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4border-red-700 bg-red-900">
                  <HiOutlineChatBubbleOvalLeftEllipsis />
                </div>
                <div className="flex-shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Step 2
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Talk to our financial advisorsand make payment for the car
              </p>
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="w-full h-full  shadow-lg rounded-3xl p-5 bg-secondary">
              <div className="flex items-center gap-x-4 mb-3">
                <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4border-red-700 bg-red-900">
                  <HiCreditCard />
                </div>
                <div className="flex-shrink-0">
                  <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                    Step 3
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Get the car delivered at your doorstep or come and pick it up
                from our automall
              </p>
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Icon Blocks */}

        {/* Section 3*/}
        <section className="bg-gray-900">
          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
              We have all make and models available
            </h2>
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
              <a href="#" className="flex justify-center items-center">
                <BMW className="h-14" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <Ferrari className="h-14" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <Mercedes className="h-14" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <Toyota className="h-14" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <Skoda className="h-14" />
              </a>
              <a href="#" className="flex justify-center items-center">
                <Alfa className="h-14" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
