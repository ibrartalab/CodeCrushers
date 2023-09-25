"use client";
// components/SecondPage.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import Link from "next/link";

export default function SecondPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });


  const listItemVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#060B27] text-white p-4"
    >
      <div className="max-w-7xl mx-auto py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">
          <motion.span
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            }}
            initial={{ opacity: 0, y: 10 }}
          >
            Welcome to Code Crushers
          </motion.span>
        </h1>

        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={{ width: inView ? "16rem" : 0 }}
          transition={{ duration: 1 }}
          className="h-1 rounded bg-green-500 mx-auto mb-6 mr-[400px]"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
        />

        <p className="text-lg text-gray-400 mb-8">
          <motion.span
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            }}
            initial={{ opacity: 0, y: 10 }}
          >
            We are a team of passionate developers and designers who transform{" "}
            <br /> ideas into powerful software solutions.
          </motion.span>
        </p>

        {/* Images section */}
        <section className="mt-10">
          {/* I want to show 4 images 2 images per row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <Image
                src="/img1.jpg"
                alt="image1"
                className="rounded-lg"
                width={650}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img2.jpg"
                alt="image2"
                className="rounded-lg"
                width={650}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img3.jpg"
                alt="image3"
                className="rounded-lg"
                width={650}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img4.jpg"
                alt="image4"
                className="rounded-lg"
                width={650}
                height={400}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <FaPlay className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h1 className="text-4xl font-bold text-white mb-2">
            <motion.span
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 2 },
              }}
              initial={{ opacity: 0, y: 10 }}
            >
              Our Services
            </motion.span>
          </h1>
          <motion.div
            ref={ref2}
            initial={{ width: 0 }}
            animate={{ width: inView2 ? "9rem" : 0 }}
            transition={{ duration: 1 }}
            className="h-1 rounded bg-green-500 mx-auto mb-6 mr-[530px]"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 2 },
            }}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#060B27] text-white "
          >
            <div className="max-w-5xl mx-auto py-10 text-center">
              <ul className="list-inside">
                <Link href="/services">
                  <motion.div
                    variants={listItemVariants}
                    whileHover="hover"
                    className="mb-4 p-4 rounded-lg bg-blue-900 cursor-pointer flex items-center"
                  >
                    <FaCode className="text-2xl text-white mr-2" />
                    <li className="text-xl">Software Development</li>
                  </motion.div>
                </Link>

                <Link href="/services">
                  <motion.div
                    variants={listItemVariants}
                    whileHover="hover"
                    className="mb-4 p-4 rounded-lg bg-blue-900 cursor-pointer flex items-center"
                  >
                    <FaMobile className="text-2xl text-white mr-2" />
                    <li className="text-xl">Web and Mobile App Development</li>
                  </motion.div>
                </Link>

                <Link href="/services">
                  <motion.div
                    variants={listItemVariants}
                    whileHover="hover"
                    className="mb-4 p-4 rounded-lg bg-blue-900 cursor-pointer flex items-center"
                  >
                    <FaCloud className="text-2xl text-white mr-2" />
                    <li className="text-xl">Cloud Solutions</li>
                  </motion.div>
                </Link>

                <Link href="/services">
                  <motion.div
                    variants={listItemVariants}
                    whileHover="hover"
                    className="mb-4 p-4 rounded-lg bg-blue-900 cursor-pointer flex items-center"
                  >
                    <FaPaintBrush className="text-2xl text-white mr-2" />
                    <li className="text-xl">UI/UX Design</li>
                  </motion.div>
                </Link>

                <Link href="/services">
                  <motion.div
                    variants={listItemVariants}
                    whileHover="hover"
                    className="p-4 rounded-lg bg-blue-900 cursor-pointer flex items-center"
                  >
                    <FaCheckCircle className="text-2xl text-white mr-2" />
                    <li className="text-xl">Quality Assurance and Testing</li>
                  </motion.div>
                </Link>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="mt-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#060B27] text-white p-4"
          >
            <div className="max-w-7xl mx-auto py-16 text-center">
              <h1 className="text-4xl font-bold text-white mb-2">
                <motion.span
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 2 },
                  }}
                  initial={{ opacity: 0, y: 10 }}
                >
                  About Code Crushers
                </motion.span>
              </h1>
              <motion.div
                ref={ref1}
                initial={{ width: 0 }}
                animate={{ width: inView1 ? "14rem" : 0 }}
                transition={{ duration: 1 }}
                className="h-1 rounded bg-green-500 mx-auto mb-6 mr-[440px]"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 2 },
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Our Team",
                    description:
                      "Meet our dedicated team of professionals who are passionate about software development and design.",
                    icon: <FaUsers className="text-6xl text-green-500 mb-4" />,
                  },
                  {
                    title: "Our Services",
                    description:
                      "Discover a wide range of services we offer, including software development, web and mobile app development",
                    icon: <FaLaptop className="text-6xl text-green-500 mb-4" />,
                  },
                  {
                    title: "Innovative Solutions",
                    description:
                      "We're committed to delivering innovative solutions that help your business thrive in the digital world.",
                    icon: (
                      <FaLightbulb className="text-6xl text-green-500 mb-4" />
                    ),
                  },
                  {
                    title: "Client-Centric Approach",
                    description:
                      "Our client-centric approach ensures that we focus on your specific needs and goals.",
                    icon: (
                      <FaBullseye className="text-6xl text-green-500 mb-4" />
                    ),
                  },
                  {
                    title: "Customer Feedback",
                    description:
                      "We value feedback from our clients and continuously improve our services to exceed your expectations.",
                    icon: (
                      <FaComments className="text-6xl text-green-500 mb-4" />
                    ),
                  },
                  {
                    title: "Commitment to Quality",
                    description:
                      "We're committed to delivering high-quality solutions that help your business thrive in the digital world.",
                    icon: (
                      <FaCheckCircle className="text-6xl text-green-500 mb-4" />
                    ),
                  },
                ].map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 * i }}
                    className="text-center rounded-lg shadow-lg bg-gray-900 p-6"
                  >
                    {section.icon}
                    <h2 className="text-2xl font-semibold mb-2">
                      {section.title}
                    </h2>
                    <p className="text-lg mb-4">{section.description}</p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                      Read more
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Contact Us</h2>
          <p className="text-lg text-white">
            Email: CodeCrusherOfficial@gmail.com
          </p>
          <p className="text-lg text-white">Address: Lahore, Pakistan, 54000</p>
        </section>
      </div>
    </motion.div>
  );
}
