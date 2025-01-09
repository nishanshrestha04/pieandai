import React from "react";
import social from "../Assets/social.png";

const Community = () => {
    return (
        <div>
            <div className="mt-28 flex justify-center items-center ">
                <div className="left">
                    <img src={social} alt="" />
                </div>
                <div className="right w-1/3 text-right">
                    <p className="text-[#FBBA33] uppercase font-semibold text-xs tracking-widest">
                    Community
                    </p>
                    <h1 className="font-bold text-2xl leading-10">
                    Community Collaboration
                    </h1>
                    <p className="  text-[#426666] leading-7">
                    Building a vibrant AI community in Kathmandu by fostering collaboration among students, professionals, and enthusiasts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Community;

