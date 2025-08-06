'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: '/negotiation-simulations', label: 'Negotiation Simulations' },
    { href: '/past-events', label: 'Past Events' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/harvardundergradnegotiation/',
      icon: '/images/Instagram_Logo.png',
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/company/harvard-negotiations/',
      icon: '/images/Linkedin_Logo.png',
      label: 'LinkedIn',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Mobile Layout */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '48px', height: 'auto' }}
            className="w-12 h-12"
            unoptimized
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          {/* Close Icon */}
          <svg
            className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-center items-center px-6 py-4 space-x-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/Logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '48px', height: 'auto' }}
            className="w-12 h-12"
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex space-x-6 items-center text-sm font-medium">
          <Link 
            href="/negotiation-simulations" 
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            Negotiation Simulations
          </Link>

          {/* Workshops Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors select-none">
              Workshops
            </span>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-10 min-w-[12rem] border border-gray-200">
              <Link href="/past-events" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Past Events</Link>
              <Link href="/schedule" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">Schedule</Link>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe6x9w5dO3maWfYZUagEDEwQOPW0psdmCA0Jbz8tpm99bz-Jg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            Mentorship
          </a>
          <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>

          <a href="https://www.instagram.com/harvardundergradnegotiation/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/Instagram_Logo.png"
              alt="Instagram"
              width={20}
              height={20}
            />
          </a>
          <a href="https://www.linkedin.com/company/harvard-negotiations/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <Image
              src="/images/Linkedin_Logo.png"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe6x9w5dO3maWfYZUagEDEwQOPW0psdmCA0Jbz8tpm99bz-Jg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors"
              >
                Mentorship
              </a>

              {/* Social Links in Mobile Menu */}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default ResponsiveNavigation; 