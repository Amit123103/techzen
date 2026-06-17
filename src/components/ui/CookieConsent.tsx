"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 w-full z-[9999]"
        >
          <div className="bg-[var(--color-background)] border-t border-[var(--color-border)] shadow-2xl p-6 md:p-8 relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4 max-w-4xl">
              <div className="hidden md:flex p-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0">
                <Cookie className="w-6 h-6 text-[var(--color-text)]" />
              </div>
              
              <div className="flex-1 pr-6 md:pr-0">
                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-[var(--color-text)] md:hidden shrink-0" />
                  We value your privacy
                </h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies and agree to our{" "}
                  <Link href="/privacy" className="text-[var(--color-text)] font-semibold underline hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            </div>
            
            <div className="flex w-full md:w-auto gap-3 shrink-0">
              <Button 
                onClick={handleDecline}
                variant="outline"
                className="flex-1 md:w-auto"
              >
                Decline
              </Button>
              <Button 
                onClick={handleAccept}
                className="flex-1 md:w-auto bg-[var(--color-text)] text-[var(--color-background)] hover:opacity-90"
              >
                Accept All
              </Button>
            </div>

            <button 
              onClick={handleDecline}
              className="absolute top-6 right-6 md:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
