"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ContactPage = () => {
  const text = "Say Hello";

  // Use destructuring for clarity and efficiency
  const letters = text.split("");

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col h-screen max-w-7/10 lg:flex-row">
        {/* TEXT CONTAINER */}
        <div className="flex items-center justify-center text-5xl h-1/2 lg:h-full lg:w-1/2">
          <div>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* QR Codes */}
        <div className="flex flex-row items-center justify-evenly lg:w-1/2">
          {/* Whatsapp */}

          <a href="https://wa.me/60166684985">
            <div className="p-1 m-2 bg-white rounded-2xl">
              <h1 className="text-lg italic font-semibold text-center text-stone-700 xl:text-xl xl:pt-2">
                Whatsapp
              </h1>
              <div className="container">
                <Image
                  src="/contact/whatsapp-qr.svg"
                  alt="Whatsapp QR Code"
                  width="150"
                  height="150"
                  className="object-contain w-30 h-30 md:w-60 md:h-60"
                />
              </div>
            </div>
          </a>

          {/* Wechat */}

          <div className="p-1 m-2 bg-white rounded-2xl">
            <h1 className="text-lg italic font-semibold text-center text-stone-700 xl:text-xl xl:pt-2">
              Wechat
            </h1>
            <div className="container">
              <Image
                src="/contact/wechat-qr.svg"
                alt="Wechat QR Code"
                width="150"
                height="150"
                className="object-contain w-30 h-30 md:w-60 md:h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
