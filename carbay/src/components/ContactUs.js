import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import {
  AiOutlineQuestionCircle,
  AiOutlineMail,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import About from "./About";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactUs = () => (
  <div>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="mb-8 lg:mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We love to help our customers. Fill in the form to get help.
          </p>
        </div>
      </div>
      <div className="mt-12 max-w-lg mx-auto">
        {/* Card */}
        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-gray-800">
          <form>
            <div className="grid gap-4 lg:gap-6">
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-firstname-contacts-1"
                    className="block text-sm  pb-3 font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="hs-firstname-contacts-1"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block w-full rounded-md text-sm focus:outline-none focus:outline-red-500 bg-gray-800 border-gray-800 text-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-lastname-contacts-1"
                    className="block text-sm  pb-3 font-medium text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="hs-lastname-contacts-1"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full rounded-md text-sm focus:outline-none focus:outline-red-500 bg-gray-800 border-gray-800 text-gray-400"
                  />
                </div>
              </div>
              {/* End Grid */}
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-email-contacts-1"
                    className="block text-sm  pb-3 font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full rounded-md text-sm focus:outline-none focus:outline-red-500 bg-gray-800 border-gray-800 text-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hs-phone-number-1"
                    className="block text-sm  pb-3 font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full rounded-md text-sm focus:outline-none focus:outline-red-500 bg-gray-800 border-gray-800 text-gray-400"
                  />
                </div>
              </div>
              {/* End Grid */}
              <div>
                <label
                  htmlFor="hs-about-contacts-1"
                  className="block text-sm  pb-3 font-medium text-white"
                >
                  Details
                </label>
                <textarea
                  id="hs-about-contacts-1"
                  name="hs-about-contacts-1"
                  rows={4}
                  className="py-3 px-4 block w-full rounded-md text-sm focus:outline-none focus:outline-red-500 bg-gray-800 border-gray-800 text-gray-400"
                  defaultValue={""}
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-6 grid">
              <button
                type="submit"
                className="inline-flex justify-center items-center gap-x-3 text-center bg-red-600 hover:bg-red-800 border border-transparent text-sm lg:text-base text-white font-medium rounded-md py-3 px-4"
              >
                Send
              </button>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </form>
        </div>
        {/* End Card */}
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-4 lg:gap-8">
        {/* Icon Block */}
        <a
          className="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]"
          href="mailto:amh2harkirat@gmail.com"
        >
          <AiOutlineMail className="w-9 h-9  mx-auto text-gray-200" />
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Get help by email
            </h3>
            <p className="mt-1 text-gray-500">
              We're here to help with any questions.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-red-500 ">
              Contact support
              <AiOutlineArrowRight className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" />
            </p>
          </div>
        </a>
        {/* End Icon Block */}
        {/* Icon Block */}
        <NavLink
          className="flex flex-col h-full text-center rounded-md hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05]"
          to="/about"
        >
          <AiOutlineQuestionCircle className="w-9 h-9  mx-auto text-gray-200" />
          <div className="grow">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              FAQ
            </h3>
            <p className="mt-1 text-gray-500">
              Search our FAQ for answers to anything you might ask.
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-red-500">
              Visit FAQ
              <AiOutlineArrowRight className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" />
            </p>
          </div>
        </NavLink>
        {/* End Icon Block */}
      </div>
    </div>
  </div>
);

export default ContactUs;
