"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { US } from 'country-flag-icons/react/3x2'

const Reviews = () => {
  const reviewsData = [
    {
      name: 'elgatogrande',
      img_url: '/review1.png',
      country: 'USA',
      review:
        "I’ve greatly enjoyed partnering with CodeCrusher on this project so far! They communicate very clearly and has been extremely responsive - both are incredibly important characteristics to me. They also work very quickly and is receptive to feedback. Highly recommend Codecrusher and I am excited to continue working with them in future!",
    },
    {
      name: 'rockstarresume',
      img_url: '/review2.png',
      country: 'USA',
      review:
        "CodeCrusher has been tremendous to work with in making my website and LinkTree for my business. They have been responsive, helpful, and has made a great looking website that I am proud to advertise and show customers. They didn’t stop until the work was done, and they are someone who I will hire again for all future website needs as well! :)",
    },
    {
      name: 'earth_altering',
      img_url: '/review3.png',
      country: 'Australia',
      review:
        "It was a good experience, I wanted to try a lot of small changes just to experiment and the seller was very patient with me during the process. The seller and I went back and forth between different devices to get the best result. I am happy to pay for this service. Very efficient! Would use again.",
    },
    {
      name: 'amishanarandas0',
      img_url: '/review4.png',
      country: 'South Africa',
      review:
        "CodeCrusher is highly recommended. Was fast and efficient and delivered on time. They also did not mind too many changes and were patient with that. I would definitely use their services again.",
    },
    {
      name: 'mysteryawan',
      img_url: '/review5.png',
      country: 'Canada',
      review:
        "Went above and beyond! as someone with 0 experience coding CodeCrusher made it very easy to understand very complex languages and will make sure you understand what's going on before he proceeds to the next step. Highly recommend hiring him.",
    },
    {
      name: 'simo65624',
      img_url: '/review6.png',
      country: 'Germany',
      review:
        "CodeCrusher is one of the sweetest and best freelancers I've worked with. Their communication skills are top-notch, his work is full of dedication and hard work. Besides that, he has good manners and goes beyond to make you happy. Thanks for the great experience. ❤️🙏🏽",
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    // check if we are at the last review in the array and reset to 0 if true
    if (currentIndex === reviewsData.length - 1) {
      setCurrentIndex(0);
    }
    if (currentIndex < reviewsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevReview = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextReview();
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const controls = useAnimation();
  const iconsControls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 1.5 },
    });

    iconsControls.start({ opacity: 1, y: 0 }, { stagger: 0.2 }).then(() => {
      return iconsControls.start({ opacity: 1 });
    });
  }, []);

  const text = "Reviews";

  const textVariants = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.1, delay: 1 },
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
    <div className="bg-[#060B27] text-white min-h-screen">
      <div className="text-4xl font-semibold text-center py-32">
        <motion.h1
          className="text-3xl font-bold tracking-tight sm:mt-0 mt-12"
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
        <motion.p
          className="text-lg font-medium tracking-tight italic sm:mt-4 mt-6"
        >
          Elevating Success Stories: Empowering Clients, Transforming Businesses
        </motion.p>
      </div>

      <div className="flex items-center justify-center  relative bottom-4">
        <button onClick={prevReview} className="ml-40" disabled={currentIndex === 0}>
          <BsChevronLeft className="font-bold text-3xl text-gray-300 shadow-md " />
        </button>

        {/* Review Card */}
        <div className="max-w-3xl mx-auto
        shadow-lg shadow-white bg-transparent rounded-lg overflow-hidden
        mb-8
        ">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2 ">{reviewsData[currentIndex].name}</h2>
            <div className="flex items-center">
              <Image
                src={reviewsData[currentIndex].img_url}
                alt={reviewsData[currentIndex].name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />

            </div>
            <p className="text-gray-300
            absolute top-10 right-80
            rounded-full px-4 py-2 bg-blue-500
            ">{reviewsData[currentIndex].country}</p>
            <p
              className='text-gray-300 mt-4 italic'
            >
              <FaQuoteLeft className="relative top-0 left-0 text-gray-300 text-2xl" />
              {reviewsData[currentIndex].review}
            </p>
          </motion.div>
        </div>


        <button onClick={nextReview} className="mr-40" disabled={currentIndex === reviewsData.length - 1}>
          <BsChevronRight className="text-3xl text-gray-300" />
        </button>
      </div>

      {/* Now I want to show all the cards in the column one by one */}

      <div className="max-w-3xl mx-auto flex flex-col gap-12">
        {reviewsData.map((review, index) => (
          <motion.div
            key={index}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" bg-transparent p-6 rounded-lg shadow-lg shadow-white"
          >
            <h2 className="text-2xl font-semibold mb-2">{review.name}</h2>
            <div className="flex items-center">
              <Image
                src={review.img_url}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
              <AiFillStar className="text-yellow-400 ml-2" />
            </div>
            <p className="text-gray-300 mt-4 italic">
              <FaQuoteLeft className="relative top-0 left-0 text-gray-300 text-2xl" />
              {review.review}
            </p>
          </motion.div>
        ))}
      </div>
      <span
        className='mb-32'
      >
        .
      </span>




    </div>
  );
};

export default Reviews;
