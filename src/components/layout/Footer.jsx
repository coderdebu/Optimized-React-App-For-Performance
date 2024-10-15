import React, { useState } from 'react';
import Logo from '../../icons/logo';
import LogoText from '../../icons/logoText';
import FaceBookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import LinkedInIcon from '../../icons/LinkedInIcon';
import YoutubeIcon from '../../icons/YoutubeIcon';
import TitleText from '../TitleText';
import CommonButton from '../CommonButton';

const Footer = () => {
  const [email, setEmail] = useState('');

  // Function to validate the email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
    return emailPattern.test(email);
  };

  return (
    <footer className="relative bg-[#161D3A] text-white py-10 px-[5rem]">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/footerbg.png')`, // Replace with your image path
          backgroundRepeat: 'repeat',               // Ensure the background repeats
          backgroundSize: 'contain',                   // Change to auto for proper repetition
        }}
      ></div>

      {/* Footer Content */}
      <div className="relative container mx-auto lg:flex lg:justify-between">
        {/* Left Column */}
        <div className="flex flex-col lg:w-1/2">
          {/* Logo and LogoText Display */}
          <div className="flex items-center mb-6 space-x-3"> {/* Flex for alignment */}
            <Logo />  {/* Company logo */}
            <LogoText /> {/* Company logo text */}
          </div>

          {/* Non-Clickable Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-white-400 cursor-pointer">About Us</span>
            <span className="text-white-400 cursor-pointer">Contact Us</span>
            <span className="text-white-400 cursor-pointer">Terms & Conditions</span>
            <span className="text-white-400 cursor-pointer">Privacy Policy</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col lg:w-1/2 mt-10 lg:mt-0">
          {/* Main Title */}
          <h3 className="text-lg font-bold mb-2">Join our mailing list</h3>

          {/* Subtitle */}
          <p className="text-white-400 text-sm mb-6">
            Subscribe to get the latest news and updates right to your inbox.
          </p>

          {/* Email Input and Subscribe Button */}
          <div className="flex gap-2 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              className="w-full px-4 py-2 rounded bg-transparent border border-white-400 text-white-400 focus:outline-none"
            />
            <CommonButton
              size="hug"
              style="filled"
              state={isValidEmail(email) ? "enabled" : "disabled"} // Disable button if email is invalid
              text={true}
              leadingIcon={false}
              trailingIcon={false}
              className="w-[156px] h-[48px] p-[12px_32px_12px_32px] rounded-[24px_24px_24px_24px]"
              disabled={!isValidEmail(email)} // Disable button if email is invalid or empty
            >
              <div className="flex justify-center items-center">
                <TitleText
                  styleName="Web/Label Large"
                  fontFamily="Inter"
                  fontSize="16px"
                  fontWeight="500"
                  lineHeight="24px"
                  textAlign="center"
                >
                  Subscribe
                </TitleText>
              </div>
            </CommonButton>
          </div>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="border-gray-600 mx-10 my-6" /> {/* Added margin for spacing and changed border color */}

      {/* Footer Bottom Section */}
      <div className="relative container mx-auto flex justify-between items-center">
        {/* Left: Copyright Text */}
        <TitleText
          styleName="Web/Body Small"
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          lineHeight="20.02px"
          textAlign="left"
        >
          © 2024 Askitect. All rights reserved.
        </TitleText>

        {/* Center: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-white-400">
            <FaceBookIcon className="w-6 h-6"  style={{ color: 'white' }} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white-400">
            <LinkedInIcon className="w-6 h-6"  style={{ color: 'white' }} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-white-400">
            <InstagramIcon className="w-6 h-6"  style={{ color: 'white' }} />
          </a>
          <a href="https://youtube.com" aria-label="YouTube" className="hover:text-white-400">
            <YoutubeIcon className="w-6 h-6"  style={{ color: 'white' }} />
          </a>
        </div>

        {/* Right: Footer Credit */}
        <div className="text-right text-white-400 text-sm">
          Made by Magneto IT Solutions
        </div>
      </div>
    </footer>
  );
};

export default Footer;
