"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { AiOutlineInsertRowAbove } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { FaBars } from "react-icons/fa"; // Hamburger icon
import { useState } from "react"; // State for mobile menu

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.nav
      className="bg-[#060B27] py-2 border-b border-gray-800 shadow-md z-50 absolute w-full"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={132}
            className="rounded-full cursor-pointer"
          />
        </motion.div>

        {/* Hamburger Icon for Mobile Menu */}
        <div className="lg:hidden">
          <FaBars
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        {/* Middle Div: Nav Links (Responsive) */}
        <motion.div
          className={`lg:flex space-x-8 ${
            mobileMenuOpen ? "block" : "hidden"
          } lg:block`}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Link href="/">
            <motion.span
              className="flex items-center text-gray-400 text-sm hover:underline hover:text-white text-center"
              whileHover={{ scale: 1.1 }}
            >
              <AiOutlineHome className="inline-block mr-1" />
              Home
            </motion.span>
          </Link>

          <Link
            href="/services"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:underline hover:text-white"
          >
            <motion.span
              className="flex items-center text-gray-400 text-sm hover:underline hover:text-white text-center"
              whileHover={{ scale: 1.1 }}
            >
              <AiOutlineUsergroupAdd className="inline-block mr-1" />
              Services
            </motion.span>
          </Link>

          <Link href="/">
            <motion.span
              className="flex items-center text-gray-400 text-sm hover:underline hover:text-white text-center"
              whileHover={{ scale: 1.1 }}
            >
              <GiFilmProjector className="inline-block mr-1" />
              Projects
            </motion.span>
          </Link>

          <Link href="/">
            <motion.span
              className="flex items-center text-gray-400 text-sm hover:underline hover:text-white text-center"
              whileHover={{ scale: 1.1 }}
            >
              <MdOutlineReviews className="inline-block mr-1" />
              Reviews
            </motion.span>
          </Link>

          <Link href="/about">
            <motion.span
              className="flex items-center text-gray-400 text-sm hover:underline hover:text-white text-center"
              whileHover={{ scale: 1.1 }}
            >
              <AiOutlineInsertRowAbove className="inline-block mr-1" />
              About
            </motion.span>
          </Link>
        </motion.div>

        {/* Right Div: Contact Button (Responsive) */}
        <motion.button
          className="bg-[#02CC67] text-xs text-white px-4 py-2 rounded-full hover:bg-green-600"
          whileHover={{ scale: 1.1 }}
        >
          Contact
        </motion.button>
      </div>
    </motion.nav>
  );
}
