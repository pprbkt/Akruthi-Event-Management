"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const AccordionContext = React.createContext<{
  activeItem: string | null;
  setActiveItem: (value: string | null) => void;
}>({
  activeItem: null,
  setActiveItem: () => {},
});

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: "single"; // for compatibility
  collapsible?: boolean; // for compatibility
}

export function Accordion({ className, children, ...props }: AccordionProps) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
      <div className={cn("w-full space-y-2", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
}

export function AccordionItem({ value, className, children, ...props }: AccordionItemProps) {
  return (
    <div className={cn("border-b border-border/80 last:border-b-0", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{ value?: string }>,
            { value }
          );
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value?: string;
}

export function AccordionTrigger({
  className,
  children,
  value,
  ...props
}: AccordionTriggerProps) {
  const { activeItem, setActiveItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  const handleClick = () => {
    if (value) {
      setActiveItem(isOpen ? null : value);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={isOpen}
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all duration-300 hover:text-crimson dark:hover:text-gold outline-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
          isOpen && "rotate-180 text-crimson dark:text-gold"
        )}
      />
    </button>
  );
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value?: string;
}

export function AccordionContent({
  className,
  children,
  value,
  ...props
}: AccordionContentProps) {
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className={cn("pb-4 text-sm text-muted-foreground font-sans leading-relaxed", className)} {...props}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
