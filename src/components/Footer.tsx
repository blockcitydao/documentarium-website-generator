
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-8 bg-purple-950 text-purple-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" className="w-16 h-12 mr-3">
              <defs>
                <linearGradient id="footerPhysicalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2B50AA"/>
                  <stop offset="100%" stopColor="#4B7BE5"/>
                </linearGradient>
                <linearGradient id="footerDigitalCityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34D399"/>
                  <stop offset="100%" stopColor="#6EE7B7"/>
                </linearGradient>
                <filter id="footerGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                </filter>
              </defs>
              <g transform="translate(50, 40)">
                <g transform="rotate(-15, 100, 60)" filter="url(#footerGlow)">
                  <rect x="40" y="30" width="20" height="70" fill="url(#footerPhysicalCityGradient)"/>
                  <rect x="70" y="20" width="20" height="80" fill="url(#footerPhysicalCityGradient)"/>
                  <rect x="100" y="10" width="25" height="90" fill="url(#footerPhysicalCityGradient)"/>
                  <rect x="135" y="25" width="15" height="75" fill="url(#footerPhysicalCityGradient)"/>
                  <polygon points="160,40 180,40 170,20 160,40" fill="url(#footerPhysicalCityGradient)"/>
                </g>
                <g transform="rotate(15, 100, 110)" filter="url(#footerGlow)">
                  <g fill="url(#footerDigitalCityGradient)">
                    <rect x="40" y="100" width="20" height="5" />
                    <rect x="40" y="110" width="20" height="5" />
                    <rect x="40" y="120" width="20" height="5" />
                    <rect x="40" y="130" width="20" height="5" />
                    <rect x="70" y="90" width="5" height="5" />
                    <rect x="80" y="90" width="5" height="5" />
                    <rect x="70" y="100" width="5" height="5" />
                    <rect x="80" y="100" width="5" height="5" />
                    <rect x="70" y="110" width="5" height="5" />
                    <rect x="80" y="110" width="5" height="5" />
                    <rect x="70" y="120" width="5" height="5" />
                    <rect x="80" y="120" width="5" height="5" />
                    <rect x="70" y="130" width="5" height="5" />
                    <rect x="80" y="130" width="5" height="5" />
                    <rect x="100" y="85" width="25" height="5" />
                    <rect x="100" y="95" width="25" height="5" />
                    <rect x="100" y="105" width="25" height="5" />
                    <rect x="100" y="115" width="25" height="5" />
                    <rect x="100" y="125" width="25" height="5" />
                    <rect x="100" y="135" width="25" height="5" />
                    <rect x="135" y="100" width="5" height="5" />
                    <rect x="145" y="100" width="5" height="5" />
                    <rect x="135" y="110" width="5" height="5" />
                    <rect x="145" y="110" width="5" height="5" />
                    <rect x="135" y="120" width="5" height="5" />
                    <rect x="145" y="120" width="5" height="5" />
                    <rect x="135" y="130" width="5" height="5" />
                    <rect x="145" y="130" width="5" height="5" />
                  </g>
                </g>
              </g>
            </svg>
            <h3 className="font-pixel text-lg font-bold text-white">Block City DAO</h3>
          </div>
          <p className="font-pixel-alt mb-4">A community-governed, AI-empowered digital city ecosystem on the blockchain</p>
        </div>
        
        <div>
          <h4 className="font-pixel text-lg font-semibold mb-4 text-white">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
              <span>Whitepaper</span>
            </a></li>
            <li><a href="#" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
              <span>Tokenomics</span>
            </a></li>
            <li><a href="https://x.com/BlockCityDAO" target="_blank" rel="noopener noreferrer" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
              <Twitter className="h-4 w-4" /> <span>Twitter</span>
            </a></li>
            <li><a href="https://github.com/blockcitydao/BCD" target="_blank" rel="noopener noreferrer" className="font-pixel-alt hover:text-white transition flex items-center gap-2 pixel-text">
              <Github className="h-4 w-4" /> <span>GitHub</span>
            </a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-purple-800 text-center text-sm font-pixel-alt text-purple-400">
        &copy; {new Date().getFullYear()} Block City DAO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
