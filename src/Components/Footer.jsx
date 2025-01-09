import React from "react";

const Footer = () => {
    return (
        <div className="footer mt-20 w-full border-t-2 border-gray-200 py-5">
           <div className="mx-60">
            <h1 className="text-3xl font-bold text-center">PIE & AI</h1>
            <p className="text-center mt-3">PIE & AI is a community-led initiative that aims to foster collaboration between AI enthusiasts and professionals. <br></br>
        © {new Date().getFullYear()} PIE & AI. All rights reserved.</p>
           </div>
        </div>
    );
};

export default Footer;
