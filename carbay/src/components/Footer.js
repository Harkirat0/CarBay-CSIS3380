import React from "react";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => (
  <footer aria-label="Site Footer" className="bgFooter">
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <img src="CarBay.png" className="h-32"></img>
      </div>
      <nav aria-label="Footer Nav" className="mt-12">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className=" text-white hover:text-white/75" href="/">
              About
            </a>
          </li>
          <li>
            <a className=" text-white hover:text-white/75" href="/">
              Contact Us
            </a>
          </li>
          <li>
            <a className=" text-white hover:text-white/75" href="/">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className=" text-white hover:text-white/75" href="/">
              Cookies
            </a>
          </li>
        </ul>
      </nav>
      <ul className="mt-12 flex justify-center gap-6 md:gap-8">
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" text-white hover:text-white/75"
          >
            <span className="sr-only">Facebook</span>
            <AiFillFacebook className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" text-white hover:text-white/75"
          >
            <span className="sr-only">Instagram</span>
            <AiFillInstagram className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" text-white hover:text-white/75"
          >
            <span className="sr-only">Twitter</span>
            <AiFillTwitterCircle className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="/"
            rel="noreferrer"
            target="_blank"
            className=" text-white hover:text-white/75"
          >
            <span className="sr-only">GitHub</span>
            <AiFillGithub className="h-6 w-6" />
          </a>
        </li>
      </ul>
      <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
        Made with ❤️️ in Surrey, BC
      </p>
    </div>
  </footer>
);

export default Footer;
