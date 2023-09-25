"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


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
        <motion.div
          className="absolute w-16 h-16 bg-green-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ top: "1rem", left: "1rem" }}
        ></motion.div>
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
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-white to-green-500 text-lg "
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
          <motion.button
            className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full text-xs hover:bg-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
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
        {/* ... (Services section code) */}
      </motion.div>

      {/* Social Media Icons */}
      <div className="fixed right-10 top-40 flex flex-col gap-4 items-end">
        <a href="https://web.facebook.com/profile.php?id=61551713522480&is_tour_dismissed=true">
          <FaFacebook
            className="sm:text-3xl cursor-pointer hover:text-blue-700
        sm:text-white text-lg
        "
          />
        </a>
        <a href="https://twitter.com/CodeCrushers">
          <FaTwitter className="sm:text-3xl text-lg cursor-pointer hover:text-blue-700 sm:text-white" />
        </a>
        <a href="https://www.instagram.com/codecrushersofficial/">
          <FaInstagram className="sm:text-3xl text-lg cursor-pointer hover:text-pink-700 sm:text-white" />
        </a>
        <a href="https://www.linkedin.com/company/codecrusherofficial/?viewAsMember=true">
          <FaLinkedin className="sm:text-3xl text-lg cursor-pointer hover:text-blue-900 sm:text-white" />
        </a>
      </div>
    </motion.div>
  );
}
