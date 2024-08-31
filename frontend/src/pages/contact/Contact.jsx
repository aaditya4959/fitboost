import React from "react";
import MainLayout from "../../components/MainLayout";
import { images } from "../../constants";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import CTATestimonial from "../shared/CTATestimonial";

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-5 mt-25">
        <div className="flex flex-col md:flex-row justify-center items-center p-8">
          {/* <div className="md:w-1/2">
            <img
              className="w-full"
              src={images.HeroImage}
              alt="Inventory Management"
            />
          </div> */}

          <div className="md:w-1/2 mt-8 md:mt-0 text-lg flex flex-wrap justify-center border-4 border-blue-500">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 text-lg">
              We'd love to hear from you! If you have any questions, feedback,
              or inquiries, please feel free to reach out to us using the
              contact information below:
            </p>

            <ul className="mt-6">
              <li className="flex items-center text-gray-600 mb-3">
                <FiPhone className="w-6 h-6 mr-2" />
                <span>Phone: +91-8708743388</span>
              </li>
              <li className="flex items-center text-gray-600 mb-3">
                <FiMail className="w-6 h-6 mr-2" />
                <span>Email: fitboost@hotmail.com</span>
              </li>
              <li className="flex items-center text-gray-600">
                <FiMapPin className="w-6 h-6 mr-2" />
                <span>Address: 123 Main St, Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>
        <CTATestimonial/>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
