import React from "react";
import Navbar from "./Navbar";
import home from "../Assets/home.png";

const Home = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="bg-center bg-cover h-1/2 bg-hero-pattern">
                <div className="flex pt-[62px]">
                    <div className="w-1/2 ml-[120px] mt-[145px] left">
                        <h1 className="text-[70px] font-bold bg-custom-gradient inline-block text-transparent bg-clip-text ">
                            Empowering AI Enthusiasts in Kathmandu
                        </h1>
                        <p className="w-2/3 text-[#425466] ">
                            PIE & AI is a global AI community initiative powered
                            by DeepLearning.ai. The Kathmandu chapter focuses on
                            fostering AI education and innovation in Nepal.
                        </p>
                        <button className="px-5 py-2 w-1/4 mt-5 text-white bg-black rounded-full">
                            Join Us{" "}
                        </button>
                    </div>
                    <div className="absolute right-0 right">
                        <img src={home} alt="" className="h-[640px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
