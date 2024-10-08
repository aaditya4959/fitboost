import React from "react";
import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
        FitBoost: Where AI Helps You Meet Your Fitness Goals
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
        Achieve your fitness goals with real-time form correction, personalized nutrition insights,
        and an AI-powered fitness guide. 
        Your all-in-one solution for smarter and healthier workouts.
        </p>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Virtual Coach
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Nutrify
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Chat-o-Fit
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <img
          className="w-full rounded-xl"
          src={images.HeroImage}
          alt="Users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;
