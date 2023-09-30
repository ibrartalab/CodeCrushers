"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { SiReact, SiMongodb, SiFirebase, SiPython, SiDjango, SiFlask, SiPostgresql, SiMysql } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { useInView } from 'react-intersection-observer';
import { BsStars } from 'react-icons/bs';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useState } from 'react';


const ServicePage = ({ params }) => {
    const [showVideo, setShowVideo] = useState(false);

    const toggleVideo = () => {
        setShowVideo(!showVideo);
    };

    const [ref2, inView2] = useInView({
        threshold: 0.1,
    });

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


    const serviceData = {
        title: "Software Development",
        description: "We craft custom software solutions to meet your unique needs.",
        url: "/img1.jpg",
        languages: [
            {
                name: "React",
                icon: <SiReact className="text-4xl" />,
            },
            {
                name: "Next.js",
                icon: <DiNodejs className="text-4xl" />,
            },
            {
                name: "Node.js",
                icon: <DiNodejs className="text-4xl" />,
            },
            {
                name: "MongoDB",
                icon: <SiMongodb className="text-4xl" />,
            },
            {
                name: "Firebase",
                icon: <SiFirebase className="text-4xl" />,
            },
            {
                name: "Python",
                icon: <SiPython className="text-4xl" />,
            },
            {
                name: "Django",
                icon: <SiDjango className="text-4xl" />,
            },
            {
                name: "Flask",
                icon: <SiFlask className="text-4xl" />,
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-4xl" />,
            },
            {
                name: "MySQL",
                icon: <SiMysql className="text-4xl" />,
            },
        ],
    };

    // Create controls for technologies list animation
    const controls = useAnimation();
    useEffect(() => {
        controls.start("visible");
    }, []);

    const slug = params.service;
    const [serviceTitle, setServiceTitle] = React.useState("");

    useEffect(() => {
        if (slug === "software-development") {
            setServiceTitle("Software Development");
        } else if (slug === "web-and-mobile-development") {
            setServiceTitle("Web and Mobile Development");
        } else if (slug === "ui-ux-design") {
            setServiceTitle("UI/UX Design");
        } else if (slug === "quality-assurance-and-testing") {
            setServiceTitle("Quality Assurance and Testing");
        } else if (slug === "seo-and-digital-marketing") {
            setServiceTitle("SEO and Digital Marketing");
        } else if (slug === "cloud-solutions") {
            setServiceTitle("Cloud Solutions");
        }
    }, [slug]);

    return (
        <div className="flex flex-col items-center min-h-screen py-2 bg-[#060B27] text-white">
            <motion.h1
                className="text-xl font-bold tracking-tight mt-32"
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
                    {serviceTitle.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="sm:text-4xl text-xl sm:mt-10 mt-4"
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            </motion.h1>
            <p className="mt-8 text-center text-lg">{serviceData.description}</p>
            <div className="relative rounded-md mt-20 mb-12 ">
                {showVideo ? (
                    <iframe width="650" height="370" src="https://www.youtube.com/embed/GQpjDQsQFsU?si=22dwxmSKkQsNjdru" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                ) : (
                    <div>
                        <Image
                                src="/img1.jpg"
                                alt="image1"
                                className="rounded-lg"
                                width={650}
                                height={400}
                            />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center"
                                onClick={toggleVideo}
                            >
                                <FaPlay className="text-white text-3xl cursor-pointer" />
                            </div>
                    </div>
                )}
            </div>


            {/* Section for languages */}
            <section className="flex flex-col items-center justify-center mb-10">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-white mb-2 text-center">
                        <motion.span
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 2 },
                            }}
                            initial={{ opacity: 0, y: 10 }}
                        >
                            Technologies We Use
                        </motion.span>
                    </h1>
                    <motion.div
                        ref={ref2}
                        initial={{ width: 0 }}
                        animate={{ width: inView2 ? "12rem" : 0 }}
                        transition={{ duration: 1 }}
                        className="h-1 rounded bg-green-500 mx-auto mb-6 mr-[170px]"
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 2 },
                        }}
                    />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {serviceData.languages?.map((language, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <div className="bg-[#060B27] rounded-full p-2">
                                {language.icon}
                            </div>
                            <p className="text-sm">{language.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section for more services */}
            <section className="flex flex-col items-left text-left justify-left mb-10 mt-10">
                <motion.ul className="flex flex-col flex-wrap justify-left items-left gap-4 text-left">
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white">
                        <BsStars className="text-3xl" />
                        Modern Technologies & Frameworks
                    </li>
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white"> {/* Updated text-align to left */}
                        <BsStars className="text-3xl" />
                        Custom Software Solutions
                    </li>
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white"> {/* Updated text-align to left */}
                        <BsStars className="text-3xl" />
                        Mobile & Web Applications
                    </li>
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white"> {/* Updated text-align to left */}
                        <BsStars className="text-3xl" />
                        Database Design & Management
                    </li>
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white"> {/* Updated text-align to left */}
                        <BsStars className="text-3xl" />
                        API Development
                    </li>
                    <li className="text-left flex items-left gap-2 hover:outline-dotted
hover:outline-2 hover:outline-white"> {/* Updated text-align to left */}
                        <BsStars className="text-3xl" />
                        Cloud Deployment
                    </li>
                </motion.ul>
                <button className="bg-green-500 text-white text-lg px-1 py-1 mt-10 mb-10 rounded-full hover:bg-[#023360] flex items-center justify-center w-56">
                    <BsArrowRightCircleFill className="inline-block mr-2" />
                    Get Started
                </button>
            </section>

        </div>
    );
};

export default ServicePage;
