"use client";

import { Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <>
    {/* Right Side Contact Buttons */}
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      </a>

      {/* Instagram Button */}
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Follow us on Instagram"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:+1234567890" 
        className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Call Us"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>

    {/* Left Side Social Buttons */}
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* YouTube Button */}
      <a 
        href="https://youtube.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#FF0000] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Subscribe on YouTube"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <path d="m10 15 5-3-5-3z"/>
        </svg>
      </a>

      {/* Facebook Button */}
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Follow us on Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      </a>

      {/* Twitter Button */}
      <a 
        href="https://twitter.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300"
        aria-label="Follow us on Twitter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
      </a>
    </div>
    </>
  );
}
