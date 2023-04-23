import React from "react";

import { useState, useEff } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  const [prompt, setPrompt] = useState({
    text: "",
    image_url: "",
  });
  const handleSubmit = async (e) => {
    alert("Form Submitted");
  };
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Get Prompt */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="text"
            placeholder="Create a cat eating a watermelon"
            value={prompt.text}
            onChange={(e) => {
              setPrompt({ ...prompt, text: e.target.value });
            }}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            🌎
          </button>
        </form>

        {/* Browser URL History */}

        {/* Display Results */}
      </div>
    </section>
  );
};

export default Demo;
