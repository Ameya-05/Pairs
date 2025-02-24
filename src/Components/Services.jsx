import React from 'react';
import { ArrowRight } from "lucide-react";
import astan from "../images/astan.png"
import shelf from "../images/shelf.png";
import safeai from "../images/safeAi.png";

const Services = () => {
  return (
    <div id="services" className='bg-white'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </div>
      <div className="mt-8 flex items-center justify-between border-black border-t border-b py-12 px-8 md:px-16 lg:px-24">
        <div className="w-1/3">
            <h1 className="text-3xl font-lobster font-semibold leading-tight">Dr. Astan</h1>
        </div>
        <div className="w-2/3 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-2/3">
            <p className="text-lg mr-6 font-ebgaramond text-gray-700 leading-relaxed">
            Our flagship solution, dr Astan, combines advanced AI with deep industry expertise to drive smarter decision-making and operational efficiency. It’s designed to empower your business with cutting-edge technology and insights.
            </p>
            <div className="mt-6 flex items-center space-x-16 border-black border-b pb-1 w-fit cursor-pointer overflow-hidden group">
                <span className="text-lg font-medium relative inline-block transition-all duration-300 group-hover:-translate-y-1 group-hover:delay-0 group-hover:ease-out">Learn more</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            </div>
                <div className="md:w-1/3 md:ml-16 mt-8 md:mt-8">
                    <img 
                        src={astan}
                        alt="Abstract Design" 
                        className="rounded-2xl object-cover w-full"
                    />
                </div>
            </div>
        </div>
      <div className="mt-8 flex items-center justify-between py-12 px-8 md:px-16 lg:px-24">
        <div className="w-1/3">
            <h1 className="text-3xl font-lobster font-semibold leading-tight">Shelf</h1>
        </div>
        <div className="w-2/3 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-2/3">
            <p className="text-lg mr-6 font-ebgaramond text-gray-700 leading-relaxed">
                Shelf is our comprehensive inventory management tool that streamlines stock tracking, order processing, and data analytics. With real-time insights and automation, it helps reduce waste, minimize errors, and boost overall profitability.

            </p>
            <div className="mt-6 flex items-center space-x-16 border-black border-b pb-1 w-fit cursor-pointer overflow-hidden group">
                <span className="text-lg font-medium relative inline-block transition-all duration-300 group-hover:-translate-y-1 group-hover:delay-0 group-hover:ease-out">Learn more</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            </div>
                <div className="md:w-1/3 md:ml-16 mt-8 md:mt-0">
                    <img 
                        src={shelf}
                        alt="Abstract Design" 
                        className="rounded-2xl object-cover w-full"
                    />
                </div>
            </div>
        </div>
      <div className="mt-8 flex items-center justify-between border-black border-t border-b py-12 px-8 md:px-16 lg:px-24">
        <div className="w-1/3">
            <h2 className="text-3xl font-lobster font-semibold leading-tight">SafeAI</h2>
        </div>
        <div className="w-2/3 flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-2/3">
            <p className="text-lg mr-6 font-ebgaramond text-gray-700 leading-relaxed">
            Enhance your security with our AI-driven theft detection system. Utilizing state-of-the-art computer vision and machine learning algorithms, it monitors your environment in real time to quickly identify suspicious activities and prevent potential losses.
            </p>
            <div className="mt-6 flex items-center space-x-16 border-black border-b pb-1 w-fit cursor-pointer overflow-hidden group">
                <span className="text-lg font-medium relative inline-block transition-all duration-300 group-hover:-translate-y-1 group-hover:delay-0 group-hover:ease-out">Learn more</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            </div>
                <div className="md:w-1/3 md:ml-16 mt-8 md:mt-0">
                    <img 
                        src={safeai}
                        alt="Abstract Design" 
                        className="rounded-2xl object-cover w-full"
                    />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Services;
