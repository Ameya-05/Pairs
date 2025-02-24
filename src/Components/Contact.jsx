import React, { useState } from 'react';
import contact1 from "../images/contact1.jpg";
import Footer from './Footer';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: "What type of clients does Pairs work with?", answer: "We work with a variety of clients across multiple industries." },
    { question: "What AI solutions do you offer?", answer: "We handle projects of all sizes, from small businesses to enterprises." },
    { question: "Can Dr.Astan improve my marketing and sales?", answer: "Absolutely! Dr.Astan can analyze customer behavior, personalize marketing campaigns, optimize ad targeting, and provide sales predictions." },
    { question: "Do you provide AI-driven automation services?", answer: "Yes, we help businesses automate routine tasks such as data entry, customer support, and inventory management." },
  ];

  return (
    <>
      <div id="contact" className='bg-white py-10'>
        <div className='flex flex-col items-center border-black border-t py-12 px-8 md:px-16 lg:px-24'>
          <div className="w-full flex flex-col items-start">
            <div className='flex w-full justify-between items-start mb-10 flex-wrap'>
              <div className='w-full md:w-[45%]'>
              <h1 className='text-[30px] sm:text-[45px] font-ebgaramond italic font-bold'>
                Innovation Begins with a <br /> 
                <span className='sm:ml-14 ml-8'> Conversation!</span>
              </h1>

                <div className='mt-10 space-y-4'>
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300 py-2">
                      <button onClick={() => toggleFAQ(index)} className="w-full text-left flex justify-between items-center font-semibold text-black py-2">
                        {faq.question}
                        <span className="text-2xl hover:text-purple-600">{openIndex === index ? '−' : '+'}</span>
                      </button>
                      <div className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-600 mt-2">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0'>
                <div className='absolute inset-x-1/2 inset-y-[95px] w-[350px] h-full bg-cover bg-center' style={{ backgroundImage: `url(${contact1})`, opacity: 100 }}></div>
                <div className="relative bg-transparent p-4 w-full max-w-xl">
                  <div className="bg-white bg-opacity-10 p-10 rounded-lg shadow-2xl shadow-gray-300 backdrop-blur-sm">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="text-xs font-semibold text-gray-500">FULL NAME</label>
                          <input
                            type="text"
                            placeholder="Ben Mark"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-gray-600 bg-transparent"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-semibold text-gray-500">COMPANY</label>
                          <input
                            type="text"
                            placeholder="Rocketship"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-gray-600 bg-transparent"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          placeholder="ben@rocketship.com"
                          className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-gray-600 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-gray-500">MESSAGE</label>
                        <textarea
                          placeholder="Tell us about your project"
                          className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2 text-gray-600 bg-transparent h-20"
                        ></textarea>
                      </div>
                      <button className="flex items-center space-x-2 text-black hover:text-white hover:bg-blue-600 rounded-md p-3 transition-all duration-300 font-semibold py-3">
                        <span>Send Message</span>
                        <span className="text-lg">→</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
