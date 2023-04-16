import React from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const About = () => (
  <div>
    <div>
      <h2 className="m-6 lg:m-8 text-3xl  p-10 font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
        Frequently Asked Questions
      </h2>
    </div>
    <div className="bg-gray-900 border border-gray-700 divide-y divide-gray-700 rounded-3xl m-16  ">
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden  hover:text-gray-600 ">
        <summary className="flex items-center justify-between cursor-pointer ">
          <h2 className="text-lg font-medium text-white  hover:text-gray-600">
            What types of used cars do you sell?
          </h2>
          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <AiFillPlusCircle className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" />
            <AiFillMinusCircle className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          We sell a wide range of used cars, including sedans, SUVs, trucks, and
          sports cars. Our inventory is constantly changing, so be sure to check
          back often to see what's new.
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden  hover:text-gray-600">
        <summary className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-medium text-white  hover:text-gray-600">
            What is the condition of the used cars you sell?
          </h2>
          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <AiFillPlusCircle className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" />
            <AiFillMinusCircle className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          We thoroughly inspect each used car before we put it up for sale, and
          we only sell vehicles that meet our high standards for quality and
          safety. You can be confident that the used car you buy from us is in
          excellent condition.
        </p>
      </details>
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden  hover:text-gray-600">
        <summary className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-medium text-white  hover:text-gray-600">
            Is there a warranty or guarantee on the used cars you sell?
          </h2>
          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <AiFillPlusCircle className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" />
            <AiFillMinusCircle className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          We thoroughly inspect each used car before we put it up for sale, and
          we only sell vehicles that meet our high standards for quality and
          safety. You can be confident that the used car you buy from us is in
          excellent condition.
        </p>
      </details>
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden  hover:text-gray-600">
        <summary className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-medium text-white  hover:text-gray-600">
            Can I test drive a used car before I buy it?
          </h2>
          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <AiFillPlusCircle className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" />
            <AiFillMinusCircle className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Yes, we encourage our customers to test drive a used car before they
          make a purchase. We want you to feel confident in your decision, and a
          test drive is a great way to get a feel for the car and make sure it's
          the right fit for you.
        </p>
      </details>
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden  hover:text-gray-600">
        <summary className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-medium text-white  hover:text-gray-600 ">
            Do you offer financing options for used cars?
          </h2>
          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <AiFillPlusCircle className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" />
            <AiFillMinusCircle className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-white">
          Yes, we offer financing options to make it easier for you to purchase
          a used car. Our financing options are flexible and tailored to your
          specific needs, so you can find a plan that works for you.
        </p>
      </details>
    </div>
  </div>
);

export default About;
