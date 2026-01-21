import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Intro({ onFinish }) {
  const greet = useMemo(
    () => [
      "Welcome to my portfolio.",
      "मेरे पोर्टफोलियो में आपका स्वागत है।",
      "میرے پورٹ فولیو میں خوش آمدید۔",
      "મારા પોર્ટફોલિયોમાં આપનું સ્વાગત છે।",
      "ನನ್ನ ಪೋರ್ಟ್‌ಫೋಲಿಯೊಗೆ ಸ್ವಾಗತ.",
      "माझ्या पोर्टफोलिओमध्ये आपले स्वागत आहे.",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (index < greet.length - 1) {
      const id = setInterval(() => {
        setIndex((i) => i + 1);
      }, 650);

      return () => clearInterval(id);
    } else {
      const last = setTimeout(() => setVisible(false), 800);
      return () => clearTimeout(last);
    }
  }, [index, greet.length]);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 1.05,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          <motion.h1
            key={index}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greet[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
