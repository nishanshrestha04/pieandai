import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import arrow icons
import image1 from "../assets/members/Udit Kumar mahato.png";
import image2 from "../assets/members/Bharat Kumar Kapari.png";
import image3 from "../assets/members/Nabin Oli.png";
import image4 from "../assets/members/Sanket Shrestha.png";
import image5 from "../assets/members/Sagar Poudel.png";
import image6 from "../assets/members/Chotti Sherpa.png";
import image7 from "../assets/members/Prashanta Acharya.png";
import image8 from "../assets/members/Jenisha Shrestha.png";
import image9 from "../assets/members/Prathama Shrestha.png";
import image10 from "../assets/members/Nishant Pandey.png";
import image11 from "../assets/members/Ashlesha Shrestha.png";
import image12 from "../assets/members/Bipan Neupane.png";
import image13 from "../assets/members/Sandeep Shrestha.png";
import image14 from "../assets/members/Shrejal Adhikari.png";
import image15 from "../assets/members/Nirbha Chhetri.png";
import image16 from "../assets/members/Bikash Mishra.png";
import image17 from "../assets/members/Binayak Silwal.png";
import image18 from "../assets/members/Nishan Shrestha.png";
import image19 from "../assets/members/Sadikshya Ghimire.png";
import image20 from "../assets/members/Akash Bagle.png";
import image21 from "../assets/members/Deena Thapa.png";
import image22 from "../assets/members/Shankar Tamang.png";
import image23 from "../assets/members/Anish Karki.png";
import image24 from "../assets/members/Pratikshya Karki.png";
import image25 from "../assets/members/Grishma Shrestha.png";
import image26 from "../assets/members/Rojit Pokhrel.png";
import image27 from "../assets/members/Ayushma Mahat.png";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
    ];

    const nextSlide = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((currentIndex + 3) % images.length);
            setTimeout(() => setIsSliding(false), 500);
        }
    };

    const prevSlide = () => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex((currentIndex - 3 + images.length) % images.length);
            setTimeout(() => setIsSliding(false), 500);
        }
    };

    const goToSlide = (index) => {
        if (!isSliding) {
            setIsSliding(true);
            setCurrentIndex(index);
            setTimeout(() => setIsSliding(false), 500);
        }
    };

    return (
        <div className="slider flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg relative">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-yellow-400 mb-7 font-bold text-4xl md:text-6xl text-center">
                Meet Our Team
            </h1>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-pink-600 to-yellow-400 w-10 h-10 md:w-12 md:h-12 text-white rounded-full hover:bg-blue-700 transition duration-300 ml-2 md:ml-10"
            >
                <FaArrowLeft />
            </button>
            <div className="slider-row overflow-hidden mx-4 md:mx-40">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex / 3) * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="slider-column flex-none w-full md:w-1/3 px-2"
                        >
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-pink-600 to-yellow-400 w-10 h-10 md:w-12 md:h-12 text-white rounded-full hover:bg-blue-700 transition duration-300 mr-2 md:mr-10"
            >
                <FaArrowRight />
            </button>
            <div className="dots flex justify-center mt-4">
                {Array.from({ length: Math.ceil(images.length / 3) }).map(
                    (_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index * 3)}
                            className={`w-3 h-3 rounded-full mx-1 ${
                                currentIndex / 3 === index
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                            }`}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Slider;
