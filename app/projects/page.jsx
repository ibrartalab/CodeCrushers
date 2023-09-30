"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaLaptop, FaCode, FaStar } from 'react-icons/fa';
import { FaMobileAlt, FaSearch, FaClock } from 'react-icons/fa';

import Image from "next/image";

const Projects = () => {
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

    const text = "Portfolio";
    const additionalText = "A collection of my projects showcasing creativity and excellence.";

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

    // Sample project data for multiple cards
    const projectData = [
        {
            title: "The PicksInn",
            image: "/proj1.png",
            technologies: "Next JS and Django",
            liveDemoUrl: "https://thepicksinn.vercel.app/",
        },
        {
            title: "The Savni Restaurant",
            image: "/proj2.png",
            technologies: "React JS",
            liveDemoUrl: "https://savni-restaurent.vercel.app/",
        },
        {
            title: "Grow and Earn",
            image: "/proj3.png",
            technologies: "React Native",
            liveDemoUrl: "https://grow-n-earn.vercel.app/",
        },
        {
            title: "Nifty Nafty",
            image: "/proj4.png",
            technologies: "Next Js and Framer Motion",
            liveDemoUrl: "https://nifty-nafty.vercel.app/",
        },
        {
            title: "Klout",
            image: "/proj5.png",
            technologies: "Django",
            liveDemoUrl: "https://klout-eight.vercel.app/",
        },
        {
            title: "The Resto.",
            image: "/proj6.png",
            technologies: "Mern Stack",
            liveDemoUrl: "https://food-app-lyart.vercel.app/",
        },

    ];

    return (
        <div className="bg-[#060B27] text-white min-h-screen">
            <div className="text-center px-4 py-16 mx-auto max-w-7xl lg:py-32">
                <motion.h1
                    className="text-4xl font-bold tracking-tight"
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
                                className="sm:text-5xl text-2xl sm:mt-20 mt-10"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                </motion.h1>
                <p className="text-lg mt-2 italic">{additionalText}</p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {projectData.map((project, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <div className="relative">
                                <Image src={project.image} alt={project.title} className="w-full h-80 object-cover"
                                    width={1200}
                                    height={500}
                                />
                                <div className="absolute top-0 left-0 m-2 bg-blue-500 text-white rounded-md p-2 text-xs">
                                    {project.technologies}
                                </div>
                            </div>
                            <h2 className="text-xl font-semibold mt-2">{project.title}</h2>
                            <div className="flex justify-between p-4">
                                <a
                                    href={project.liveDemoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-500 text-white rounded-md py-2 px-4 text-sm inline-block hover:bg-blue-600"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Explain some of our characteristics like quality products */}
                <div className="mt-16">
                    {/* create a list here */}
                    <h1
                        className="text-4xl font-bold tracking-tight text-center"
                    >
                        Our <span className="text-blue-500">Characteristics</span>
                    </h1>
                    <ul
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
                    >
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaStar className="text-xl text-blue-400 mx-auto mt-4" />
                            Quality Products
                        </li>
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaLaptop className="text-xl text-blue-400 mx-auto mt-4" />
                            Responsive Design
                        </li>
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaCode className="text-xl text-blue-400 mx-auto mt-4" />
                            Clean Code
                        </li>
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaMobileAlt className="text-xl text-blue-400 mx-auto mt-4" />
                            Mobile Friendly
                        </li>
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaSearch className="text-xl text-blue-400 mx-auto mt-4" />
                            SEO Friendly
                        </li>
                        <li className="rounded-lg overflow-hidden shadow-sm shadow-white
                        hover:shadow-lg hover:shadow-white transition-shadow duration-300 ease-in-out
                        ">
                            <FaClock className="text-xl text-blue-400 mx-auto mt-4" />
                            Fast Delivery
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;
