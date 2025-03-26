
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#FF543D] h-10 w-10 rounded-full flex items-center justify-center text-white font-bold">
              W
            </div>
            <span className="text-xl font-bold text-[#333333]">Winslow</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link 
                to="/" 
                className={`font-medium ${
                  location.pathname === '/' ? 'text-[#F06449]' : 'text-[#333333] hover:text-[#F06449]'
                } transition-colors`}
              >
                Home
              </Link>
              <a href="#features" className="font-medium text-[#333333] hover:text-[#F06449] transition-colors">Features</a>
              <a href="#how-it-works" className="font-medium text-[#333333] hover:text-[#F06449] transition-colors">How It Works</a>
            </div>
            
            <Link to="/generator">
              <Button className="bg-[#F06449] hover:bg-[#F06449]/90 text-white">
                Create Offer Letter
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#333333]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className={`font-medium p-2 ${
                location.pathname === '/' ? 'text-[#F06449]' : 'text-[#333333] hover:text-[#F06449]'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="font-medium p-2 text-[#333333] hover:text-[#F06449] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium p-2 text-[#333333] hover:text-[#F06449] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <Link 
              to="/generator" 
              className="bg-[#F06449] text-white p-2 rounded text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Create Offer Letter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
