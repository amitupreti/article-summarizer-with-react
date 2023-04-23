import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Image_Generator" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => {
            window.open(
              "https://github.com/amitupreti/image-generator-with-react-and-ARDIC-Image-Synthesizer",
              "_blank"
            );
          }}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Image Generator with
        <span className="orange_gradient">
          {" "}
          <br className="max-md:hidden" />
          ArdicAI
        </span>
      </h1>
      <h2 className="desc">
        Create breathtaking images with the help of AI. Just enter the text and
        click on the generate button and let the AI do the rest. violla!
      </h2>
    </header>
  );
};

export default Hero;
