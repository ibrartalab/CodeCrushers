"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptop, FaCloud, FaPen, FaCheck, FaBuilding, FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { BsStars } from "react-icons/bs";

// Define your service data
const services = [
  {
    title: "Software Development",
    icon: <FaCode className="text-5xl text-blue-600 mb-4" />,
    description: "We craft custom software solutions to meet your unique needs.",
  },
  {
    title: "Web and Mobile Development",
    icon: <FaLaptop className="text-5xl text-blue-600 mb-4" />,
    description: "We build responsive and user-friendly web and mobile apps.",
  },
  {
    title: "Cloud Solutions",
    icon: <FaCloud className="text-5xl text-blue-600 mb-4" />,
    description: "We offer scalable cloud services to power your business.",
  },
  {
    title: "UI UX Design",
    icon: <FaPen className="text-5xl text-blue-600 mb-4" />,
    description: "Our designers create intuitive and appealing user interfaces.",
  },
  {
    title: "Quality Assurance and Testing",
    icon: <FaCheck className="text-5xl text-blue-600 mb-4" />,
    description: "We ensure the quality and reliability of your software.",
  },
  {
    title: "SEO and Digital Marketing",
    icon: <FaBuilding className="text-5xl text-blue-600 mb-4" />,
    description: "We ensure the quality and reliability of your software.",
  },
];

const softwareDevelopmentPoints = [
  "We make time to understand your business and its problems before we write the first line of code",
  "We iterate infinitely on the requirements until we are on the same page",
  "We don't overpromise. Period.",
  "We build for 20x of your immediate needs. We don't want your product to bottleneck as your business grows.",
  "We believe in Unit Testing. We write code that tests code.",
];

// create slugs for each service
services.forEach((service) => {
  service.slug = service.title.toLowerCase().replace(/ /g, "-");
});


export default function ServicesPage() {

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

  const serviceText = "Services by Code Crushers";

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

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const servicesText = "Services by Codecrusher";

  useEffect(() => {
    const timer = setInterval(() => {
      if (textIndex < servicesText.length) {
        setText((prevText) => prevText + servicesText[textIndex]);
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [textIndex]);

  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const [ref1, inView1] = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#060B27] text-white p-8 min-h-screen"
    >
      <div className="max-w-7xl mx-auto mt-4 mb-20">
        <div className="text-center">
          <motion.h1
            className="text-xl font-bold tracking-tight mt-20 mb-4"
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
              {serviceText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="sm:text-4xl text-xl sm:mt-2 mt-1"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            We offer a wide range of software development services to help you grow your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Software Development Points */}
      <motion.div
        className="max-w-6xl mx-auto mt-12"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className="text-4xl font-semibold text-white mb-2 text-center">Empowering Your Business with Codecrusher</div>
        <motion.div
          ref={ref1}
          initial={{ width: 0 }}
          animate={{ width: inView1 ? "12rem" : 0 }}
          transition={{ duration: 1 }}
          className="h-1 rounded bg-green-500 mx-auto mb-6 mr-[180px]"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
          }}
        />
        <div className="text-xm text-gray-200 text-center mb-16">Codecrusher empowers your business with custom software solutions. Our dedicated team collaborates closely with you to craft software that perfectly fits your unique needs. We prioritize a deep understanding of your business and its challenges. Our solutions are not just for today but designed to scale with your growth. We believe in rigorous testing, ensuring the reliability and robustness of your software.</div>

        <div className="bg-[#111827] rounded-lg p-8  mb-20">
          <h2 className="text-3xl font-semibold text-white mb-4 text-center">
            Why Choose Us ?
          </h2>

          <ul className="text-gray-200 text-left list-inside list-disc space-y-2">
            {softwareDevelopmentPoints.map((point, index) => (
              <li key={index} className="text-xl flex items-center">
                <BsStars className="text-3xl text-white mr-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service }) {

  const cardHover = {
    hover: {
      scale: 1.01,
      backgroundColor: "#060447",
      color: "#fff",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      cursor: "pointer",
    }
  };

  return (
    <Link href={`/services/${service.slug}`}>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover="hover"
        variants={cardHover}
        className="bg-gray-900 p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
      >
        {service.icon}

        <h2 className="text-2xl font-semibold text-white mb-2">
          {service.title}
        </h2>

        <p className="text-gray-200">
          {service.description}
        </p>

        <div className="mt-4">
          <FaArrowRight className="text-blue-600 text-2xl" />
        </div>

      </motion.div>
    </Link>
  );

}