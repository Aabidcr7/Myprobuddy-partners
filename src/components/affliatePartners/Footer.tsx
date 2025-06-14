
import React from 'react';
import { Youtube, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3 flex items-center justify-center">
                <img
                  src="https://debt.myprobuddy.com/lovable-uploads/7b22b45a-6860-47dd-b4d2-6f0dcf222efa.png"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4 leading-relaxed">
              Raise Funds like a PRO<br />
              with your ProBuddy
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
  <a
    href="https://youtube.com/@myprobuddy?si=VKVR7TbVAB8Hc0uK"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Youtube size={20} color="#FF0000" />
  </a>
  <a
    href="https://www.linkedin.com/company/myprobuddy/"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={20} color="#0077B5" />
  </a>
  <a
    href="https://www.instagram.com/myprobuddy/"
    className="hover:opacity-80 transition-opacity"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={20} color="#E1306C" />
  </a>
</div>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="https://debt.myprobuddy.com/" className="hover:text-white">Debt Funding</a></li>
              <li><a href="https://grants.myprobuddy.com/" className="hover:text-white">Grants</a></li>
              <li><a href="https://equity.myprobuddy.com/" className="hover:text-white">Equity Funding</a></li>
            </ul>
          </div>

          {/* Explore More */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore More</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="https://investor.myprobuddy.com/" className="hover:text-white">Investor</a></li>
               <li><a href="https://partners.myprobuddy.com/" className="hover:text-white">Partners</a></li>
              <li><a href="https://portfolio.myprobuddy.com/" className="hover:text-white">Portfolio</a></li>
              <li><a href="https://grants.myprobuddy.com/chatbot" className="hover:text-white">Grants AI Agent</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="https://www.myprobuddy.com/" className="hover:text-white">Home</a></li>
              <li><a href="https://www.myprobuddy.com/about-us" className="hover:text-white">About us</a></li>
              <li><a href="https://www.myprobuddy.com/founders-insights" className="hover:text-white">Blogs</a></li>
              <li><a href="https://myprobuddy.zohorecruit.in/jobs/Careers" className="hover:text-white">Careers</a></li>
              <li><a href="https://www.myprobuddy.com/contact-us" className="hover:text-white">Contact</a></li>
              <li><a href="https://www.myprobuddy.com/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="https://www.myprobuddy.com/terms-and-conditions" className="hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="text-center text-sm text-gray-400">
          © MyProBuddy, {currentYear}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
