import React from 'react';

const Footer = () => {
    return (
<footer className="footer bg-[#CCCCCC]  text-[#333333] dark:bg-black p-10 ">
  <nav>
    <header  className="footer-title  ">Services</header> 
    <a className="link link-hover dark:text-white  ">Branding</a> 
    <a className="link link-hover">Product Catalog</a> 
    <a className="link link-hover">Warranty</a> 
    <a className="link link-hover">Privacy</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    );
};

export default Footer;