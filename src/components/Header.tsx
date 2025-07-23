import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { state } = useCart();
  const location = useLocation();
  const cartItemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with transparent background */}
          <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-md shadow-sm">
            <Link to="/" className="text-3xl font-extrabold tracking-wide hover:text-secondary transition-colors">
              F1 STORE
            </Link>
          </div>

          {/* Navigation with transparent boxes */}
          <nav className="hidden md:flex space-x-4 text-base font-medium">
            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md shadow-sm">
              <Link 
                to="/" 
                className={`hover:text-secondary transition-colors ${isActive('/') ? 'text-secondary underline' : ''}`}
              >
                Home
              </Link>
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md shadow-sm">
              <Link 
                to="/products" 
                className={`hover:text-secondary transition-colors ${isActive('/products') ? 'text-secondary underline' : ''}`}
              >
                Shop
              </Link>
            </div>
            <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-md shadow-sm">
              <Link 
                to="/category/tees" 
                className={`hover:text-secondary transition-colors ${location.pathname.includes('/category') ? 'text-secondary underline' : ''}`}
              >
                Racing Tees
              </Link>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            
            <Link to="/auth/login" className="hover:text-secondary transition-colors">
              <User className="w-5 h-5" />
            </Link>
            
            <Link to="/cart" className="relative hover:text-secondary transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-primary font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden hover:text-secondary transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
