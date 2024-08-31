import React from "react";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import CTATestimonial from "../shared/CTATestimonial";

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 mt-25">
        <div className="flex flex-col md:flex-row justify-center items-center p-4 gap-8">
          <div className="md:w-1/2">
            <img
              className="w-full rounded-xl"
              src={images.HeroImage}
              alt="Inventory Management"
            />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
            <p className="text-gray-600 text-lg">
              FitBoost offers powerful tools to elevate your fitness journey.
               Track your workouts, monitor your progress,
                and streamline your routine with ease. Whether you're a beginner
                 or a fitness enthusiast, FitBoost is designed to meet your needs and
                  simplify your path to a healthier lifestyle.
            </p>
          </div>
        </div>
        <CTATestimonial />
      </section>
    </MainLayout>
  );
};

export default AboutPage;
