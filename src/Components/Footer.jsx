import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="hero  mt-16">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold">Gadget Heaven</h1>
            <p className="py-6 text-gray-500 font-semibold text-lg">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
        </div>
      </div>
      <hr className="mx-50 text-gray-400" />
      <footer className="footer sm:footer-horizontal  px-100 py-10 text-md text-gray-500 font-semibold flex justify-around">
        <nav className="flex flex-col items-center">
          <h6 className="text-zinc-900 font-bold text-lg mb-2">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping and Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-zinc-900 font-bold text-lg mb-2">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-zinc-900 font-bold text-lg mb-2">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
