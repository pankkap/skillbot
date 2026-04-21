"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DemoModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function useDemoModal() {
  return useContext(DemoModalContext);
}

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && <DemoModalOverlay onClose={closeModal} />}
      </AnimatePresence>
    </DemoModalContext.Provider>
  );
}

function DemoModalOverlay({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl bg-background rounded-2xl border border-border shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold font-heading">Book a Demo</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">
          {/* Replace the Calendly URL below with your actual Calendly link */}
          <div className="w-full h-[500px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
            <iframe
              src="https://calendly.com/your-link"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a Demo"
              className="w-full h-full"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Can&apos;t find a time? Email us at{" "}
            <a href="mailto:hello@skillbot.ai" className="text-primary hover:underline">
              hello@skillbot.ai
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
