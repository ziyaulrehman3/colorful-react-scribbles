
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="blog-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">BlogVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-800 hover:text-blog-purple transition-colors">
              Home
            </Link>
            <Link to="/blog" className="font-medium text-gray-800 hover:text-blog-purple transition-colors">
              Blog
            </Link>
            <Link to="/about" className="font-medium text-gray-800 hover:text-blog-purple transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-800 hover:text-blog-purple transition-colors">
              Contact
            </Link>
            <Link 
              to="/add-blog" 
              className="px-4 py-2 rounded-full gradient-bg font-medium text-white hover:opacity-90 transition-opacity"
            >
              Write a Blog
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-2 font-medium text-gray-800 hover:text-blog-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="py-2 font-medium text-gray-800 hover:text-blog-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="py-2 font-medium text-gray-800 hover:text-blog-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="py-2 font-medium text-gray-800 hover:text-blog-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/add-blog" 
                className="py-2 px-4 rounded-full gradient-bg font-medium text-white hover:opacity-90 transition-opacity text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Write a Blog
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
