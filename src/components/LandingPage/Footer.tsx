
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#FF543D] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
                W
              </div>
              <h3 className="text-xl font-bold">Winslow</h3>
            </div>
            <p className="text-white/70 mb-6">
              Professional offer letter generation made simple.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-[#F06449]">
                <Mail size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#F06449]">
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-white">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-white">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-white/70 mb-2">123 Winslow Street</p>
            <p className="text-white/70 mb-2">San Francisco, CA 94105</p>
            <p className="text-white/70 mb-2">+1 (555) 123-4567</p>
            <p className="text-white/70">hr@winslow.com</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Winslow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
