"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MainPage() {
  const controls = useAnimation();
  const iconsControls = useAnimation();
  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.5 },
    });

    // Animate the social media icons one after the other
    iconsControls.start({ opacity: 1, y: 0 }, { stagger: 0.2 }).then(() => {
      return iconsControls.start({ opacity: 1 });
    });
  }, []);

  const text = "Code Crushers";

  const textVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1, delay: 0.5 },
    },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
    id="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#060B27] text-white h-screen "
    >
      {/* Hero Section */}
      <motion.div
        className="px-4 py-16 mx-auto max-w-7xl lg:py-32"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold tracking-tight mt-4 "
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="inline-block"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  // add sm class to make the text responsive on small screens
                  className="sm:text-5xl text-2xl sm:mt-20 mt-10"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <div className="mx-auto  sm:max-w-5xl max-w-2xl mt-4 sm:text-xl text-sm">
            <motion.p
              className="text-white italic text-lg"
              initial={{ opacity: 0 }}
              animate={controls}
            >
              We&apos;re passionate about crafting software solutions that
              transcend expectations. <br /> We take pride in our ability to
              turn your ideas into digital realities, empowering your business
              for a brighter future.
            </motion.p>
          </div>

          {/* CTA Button */}
          <Link href="/contact">
          <motion.button
            className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full text-xs hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            </motion.button>
          </Link>

        </div>  
        <Image
          src="/theme1.svg"
          alt="Image"
          width={500}
          height={500}
          className="mx-auto mt-16"
        />
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="px-4 py-16 mx-auto max-w-7xl lg:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>
    </motion.div>
  );
}
