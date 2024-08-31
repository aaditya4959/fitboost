import React from "react";
import { FiPackage, FiShoppingCart, FiBarChart2, FiDribbble , FiSlack } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { images } from "../../../constants";
import CTATestimonial from "../../shared/CTATestimonial";

const About = () => {
  return (
    <section className="container mx-auto px-5 mt-25">
      <div className="mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
            <FiDribbble className="inline-block mr-2 text-primary"/>
              
              Virtual Coach
            </h3>
            <p className="text-gray-600">
            The Virtual Coach is your real-time fitness guide, 
            using AI and computer vision to perfect your workout form. 
            It analyzes your movements, offers instant feedback, 
            and ensures safe, effective exercises—whether lifting weights,
            practicing yoga, or doing bodyweight workouts. 
            Optimize your technique and prevent injuries with ease.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
            <IoFastFoodOutline className="inline-block mr-2 text-primary"/>
              Nutrify
            </h3>
            <p className="text-gray-600">
            Nutrify is your AI nutrition assistant,
             providing instant insights on the foods you eat.
              Snap a photo, and Nutrify analyzes it to deliver detailed
               nutritional facts, helping you make healthier choices
                and align your diet with your fitness goals.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
            <FiSlack className="inline-block mr-2 text-primary"/>
              Chat-o-Fit
            </h3>
            <p className="text-gray-600">
              Gain valuable insights into your inventory performance with
              comprehensive reporting and analytics. Analyze sales trends,
              identify popular products, and make data-driven decisions to
              optimize your inventory management strategy.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
        <div className="md:w-1/2">
          <img
            className="w-full"
            src={images.AboutImage}
            alt="Inventory Management"
          />
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Master The Art Of Being Fit
          </h2>
          <p className="text-gray-600 text-lg">
          FitBoost offers powerful tools to elevate your fitness journey.
          Track your workouts, monitor your progress, and streamline your 
          routine with ease. Whether you're a beginner or a fitness enthusiast, 
          FitBoost is designed to meet your needs and simplify your path to a healthier lifestyle.
          </p>
        </div>
      </div>
      <CTATestimonial />
    </section>
  );
};

export default About;
