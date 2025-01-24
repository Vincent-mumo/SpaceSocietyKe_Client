import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white w-full">
      <div className="w-full p-4">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between p-2">
          {/* Contact Information */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <img src="call.png" alt="Call" className="h-7 w-7" />
              <h4>0769003126</h4>
            </div>
            <div className="flex items-center gap-2">
              <img src="mail.png" alt="Mail" className="h-7 w-7" />
              <h4>spacesocietyke@gmail.com</h4>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-5">
            <h4>Partners</h4>
            <h4>Donors</h4>
            <h4>Guidelines</h4>
            <h4>Community</h4>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              <img src="twitter.png" alt="Twitter" className="h-7 w-7" />
              <img src="linkedin.png" alt="LinkedIn" className="h-7 w-7" />
              <img src="instagram.png" alt="Instagram" className="h-7 w-7" />
              <img src="facebook.png" alt="Facebook" className="h-7 w-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;