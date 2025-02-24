import pairs from "../images/pairs.png";
import gmail from "../images/gmail.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-left md:flex md:justify-between md:items-start pb-6 border-b border-gray-400">
          <div className="w-16 h-16">
            <img src={pairs} className="w-full h-full"></img>
            <p className="text-gray-200 font-bold px-4 text-center md:text-left">Pairs</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-32 text-sm mt-6 md:mt-2">
            <div>
              <p className="font-semibold">WEEKLY THEMES</p>
              <ul className="text-gray-400 space-y-1">
                <li>Pre-Sale FAQs</li>
                <li>Submit a Ticket</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">SERVICES</p>
              <ul className="text-gray-400 space-y-1">
                <li>Dr. Astan</li>
                <li>Shelf</li>
                <li>SafeAi</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">SHOWCASE</p>
              <ul className="text-gray-400 space-y-1">
                <li>Widgetkit</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">ABOUT US</p>
              <ul className="text-gray-400 space-y-1">
                <li>Services</li>
                <li>Team</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 my-6">
          <a href="mailto:thepairs007@gmail.com"><img src={gmail} className="w-8 h-8 hover:opacity-75 transition-opacity" /></a>
          <a href="https://x.com/PairsAi"><img src={twitter} className="w-8 h-8 hover:opacity-75 transition-opacity" /></a>
          <a href=""><img src={linkedin} className="w-8 h-8 hover:opacity-75 transition-opacity" /></a>
        </div>
        <p className="text-gray-500 text-sm">&copy; Copyright. All rights reserved.</p>
      </div>
    </footer>
  );
}