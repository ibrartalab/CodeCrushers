"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import icons for name, email, message from react-icons
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import Image from 'next/image';


const Contact = () => {
    const form = useRef();
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

    const text = "Contact Us";

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pg8on68', 'template_dddfxrd', form.current, 'H5wSIk8eG7aKNCbQk')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Email not sent!");
            });

        e.target.reset();
    };

    return (
        <div className="bg-[#060B27] text-white min-h-screen relative ">
            {/* Frosted glass effect */}
            <div
                className="absolute inset-0 bg-[rgba(6, 11, 39, 0.7)] backdrop-blur-md"
            ></div>
            <div className="relative">
                <div className="flex flex-col justify-center items-center px-4 py-16 mx-auto max-w-7xl lg:py-32">
                    <motion.h1
                        className="text-3xl font-bold tracking-tight
                        sm:mt-0 mt-12
                        "
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
                                    className="sm:text-4xl text-xl sm:mt-12 mt-2"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.span>
                    </motion.h1>

                    <p className="text-center text-xl sm:text-sm mt-1 italic">
                        Get in Touch with Us – Your Questions, Our Answers
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={sendEmail} className="mt-8 w-full max-w-xl p-8 bg-[rgba(6, 11, 39, 0.7)] rounded-md border border-blue-500 shadow-lg
                     relative z-10
                    ml-0 sm:ml-80
                    "
                        ref={form}
                    >
                        <div className="mb-4">
                            <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <FaUser className="inline-block ml-1" />Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                className="mt-1 p-2 w-full rounded-md text-white border border-gray-300
                                bg-transparent
                                "
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <FaRegCommentDots className="inline-block ml-1" />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                className="mt-1 p-2 w-full rounded-md text-white border border-gray-300
                                bg-transparent
                                "
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-200">
                                <FaEnvelope className="inline-block ml-1" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="mt-1 p-2 w-full rounded-md text-white border border-gray-300
                                bg-transparent
                                "
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-2 px-16 text-sm mt-4 hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </form>

                    <Image
                        src="/contact2.svg"
                        alt="Contact Us"
                        width={400}
                        height={400}
                        className="sm:mr-20 sm:absolute sm:top-[284px] sm:left-10
                        hidden sm:block
                        "
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;