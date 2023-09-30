"use client";
import { motion } from 'framer-motion';
import { AiOutlineUsergroupAdd } from "react-icons/ai";

import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import { GoGoal } from "react-icons/go";
import { IoIosPlayCircle } from "react-icons/io";
import { useState } from 'react';




const AboutUsPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


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

  const text = "About Us";

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

  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 5; // Set the target count here

    const incrementCount = () => {
      if (count < targetCount) {
        setCount(count + 1);
      }
    };

    const interval = setInterval(incrementCount, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [count]);



  return (
    <div className="bg-[#060B27] flex flex-col justify-center text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto p-4 mt-12 flex flex-col justify-center">
        <motion.h1
          className="text-3xl text-center font-bold tracking-tight mt-4 "
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
                className="sm:text-4xl text-2xl sm:mt-20 mt-10"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p className="flex items-center justify-center text-lg mt-4 mb-12 max-w-6xl italic text-center " variants={fadeInUp}>
          Welcome to CodeCrushers! We are a dedicated team of developers and innovators who are passionate about technology and building high-quality software solutions.
        </motion.p>

        <motion.div className="flex items-center justify-between mb-8" variants={fadeInUp}>
          <div className="w-1/2">
            {/* use icon here */}
            <AiOutlineUsergroupAdd className="text-6xl" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p>
              Our mission is to provide cutting-edge software solutions that meet the unique needs of our clients. We strive to deliver high-quality web and mobile applications, database solutions, and more.
            </p>
          </div>
          <div className="w-1/2 relative">
            <Image src="/img4.jpg" alt="Mission Image" width={600} height={500}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
                <IoIosPlayCircle className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex items-center justify-between mb-8" variants={fadeInUp}>

          <div className="w-1/2 relative">
            <Image src="/img3.jpg" alt="Mission Image" width={600} height={500}
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-50 p-2 rounded-full cursor-pointer">
                <IoIosPlayCircle className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          <div className="w-1/2 ml-4">
            {/* use icon here */}
            <GoGoal className="text-6xl" />
            <h2 className="text-xl font-semibold">Our Vision</h2>
            <p>
              We envision a world where technology empowers businesses and individuals to achieve their goals. Our vision is to be at the forefront of innovation, delivering software solutions that make a positive impact.
            </p>
          </div>
        </motion.div>

        <hr
          className='border-1 border-gray-500 my-8 w-4/6 flex items-center justify-center mx-auto mb-8 '
        />


        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-xl font-semibold mb-4">CEO & Founder</h2>
          <div className="flex items-center space-x-4">
            <Image src="/ceo.jpg" alt="CEO & Founder" className="w-14 h-14 rounded-full
            object-cover
            "
              width={100}
              height={80}
            />
            <div>
              <p className="text-lg font-semibold">Mansoor Ahmad</p>
              <p className="text-sm italic">Leading innovation and excellence.</p>
              <br />
            </div>
          </div>
          <p
            className="text-sm italic"
          >
            A visionary leader at the helm of CodeCrushers, Mansoor Ahmad epitomizes an unwavering dedication to technology and innovation. With a wealth of experience and a steadfast commitment to excellence, Mansoor has adeptly navigated the course of CodeCrushers towards unparalleled success. Possessing a unique ability to transform concepts into reality, Mansoor is more than just a leader; he is an inspiration to the entire team. Committed to expanding the horizons of what&apos;s achievable in the tech realm, his unshakeable vision has propelled CodeCrushers to the forefront of the industry.
          </p>
          <h2 className="text-xl font-semibold mb-4 mt-12 ">Founder</h2>
          <div className="flex items-center space-x-4">
            <Image src="/ceo1.jpg" alt="CEO & Founder" className="w-14 h-14 rounded-full
            object-cover
            "
              width={100}
              height={80}
            />
            <div>
              <p className="text-lg font-semibold">Haris Iftikhar</p>
              <p className="text-sm italic">Innovate, Elevate and CodeCrush.</p>
              <br />
            </div>
          </div>

        </motion.div>

        <hr
          className='border-1 border-gray-500 my-8 w-4/6 flex items-center justify-center mx-auto mb-8 '
        />

        <motion.div className="flex justify-between mb-8" variants={fadeInUp}>
          <div className="w-1/3 text-center bg-gradient-to-r from-[#0833f1] to-[#00885E] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold">Experience</h2>
            <p className="text-2xl">{count}+ Years</p>
          </div>
          <div className="w-1/3 text-center bg-gradient-to-r from-[#0833f1] to-[#00885E]  text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold">Clients Served Worldwide</h2>
            <p className="text-2xl">300+</p>
          </div>
          <div className="w-1/3 text-center bg-gradient-to-r from-[#0833f1] to-[#00885E] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-xl font-semibold">Team Members</h2>
            <p className="text-2xl">10+</p>
          </div>
        </motion.div>


        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-xl font-semibold mb-4">Companies We&apos;ve Worked With</h2>
          <p>
            Our expertise has been trusted by industry-leading companies such as Grow and Earn, The PickInns,Savni and many more.We take pride in our partnerships and the impact we&apos;ve made together.
          </p>

          {/* section for images */}
          <div className="flex items-center justify-center space-x-4 mt-8
          bg-gradient-to-r from-[#0833f1] to-[#00885E] text-white p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform
          ">
            <Image src="/company1.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />
            <Image src="/company2.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />
            <Image src="/company3.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />
            <Image src="/company4.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />
            <Image src="/company5.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />

            <Image src="/company6.png" alt="CEO & Founder" className="w-30 h-30 rounded-full"
              width={150}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsPage;
