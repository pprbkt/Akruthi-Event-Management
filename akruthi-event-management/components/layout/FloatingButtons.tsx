"use client";

import { Phone, MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/site-data";
import { motion } from "framer-motion";

export function FloatingButtons() {
  const whatsappLink = `https://wa.me/91${businessInfo.phone[0]}?text=Hi, I'm interested in your event management services.`;

  return (
    <>
      {/* WhatsApp Button — Bottom Right */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/30 transition-shadow"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Mobile Call Button — Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <a
          href={`tel:${businessInfo.phone[0]}`}
          className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-crimson to-crimson-dark text-white font-semibold text-sm shadow-2xl"
          aria-label="Call now"
        >
          <Phone className="w-4 h-4" />
          Call Now — {businessInfo.phone[0]}
        </a>
      </div>
    </>
  );
}
