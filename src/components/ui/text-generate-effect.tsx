"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  const [complete, setComplete] = useState(false);
  const wordArray = words.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), wordArray.length * 80 + 500);
    return () => clearTimeout(timer);
  }, [wordArray.length]);

  return (
    <span className={cn("inline", className)}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3, delay: idx * 0.08 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
