import React from 'react';

const AboutUs = () => {
  const CloudIcon = () => (
    <div className="w-12 h-12 text-yellow-400">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <path d="M13 8l-4 6h3l-2 4"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 8l-4 6h3l-2 4"/>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Left orange shape */}
        <div className="absolute -left-48 top-1/4 w-48 h-48 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full opacity-80"></div>
        
        {/* Right purple shapes */}
        <div className="absolute -left-5 top-1/4 w-80 h-80 bg-gradient-to-l from-yellow-400 to-purple-700 rounded-full opacity-90"></div>
        <div className="absolute right-20 bottom-1/4 w-48 h-48 bg-gradient-to-l from-purple-700 to-yellow-600 rounded-full opacity-80"></div>
        
        {/* Bottom right yellow circle */}
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-70"></div>
        
        {/* Additional purple accents */}
        <div className="absolute bottom-40 left-48 w-20 h-20 bg-purple-500 rounded-full opacity-70"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          About Us
        </h2>

        {/* Content card */}
        <div className="max-w-5xl w-full bg-gray-700 rounded-3xl p-8 md:p-12 pt-20 relative shadow-3xl bg-opacity-90">
          {/* Cloud icon */}
          <div className="absolute top-5 left-11">
            <CloudIcon />
          </div>

          {/* Text content */}
          <div className="text-gray-200 space-y-6 text-lg leading-relaxed mt-4">
            <p>
              At VaultSecure AI, we specialize in building intelligent, AI-first solutions that empower financial 
              institutions to stay one step ahead of fraud. With deep expertise in machine learning, document 
              forensics, and behavioral analytics, we develop technologies that don't just react to financial 
              threats — they predict and prevent them.
            </p>
            
            <p>
              Our platform is designed to detect anomalies, flag forged documents, and identify suspicious 
              user behavior before money moves. Whether it's onboarding a new customer, verifying identities, 
              or monitoring transaction patterns, our systems are built to ensure that trust is never misplaced.
            </p>
            
            <p>
              We believe that security and customer experience should go hand in hand. That's why our 
              solutions are not only powerful, but fast, scalable, and easy to integrate — giving institutions the 
              confidence to grow without fear of financial crime.
            </p>
            
            <p className="font-medium text-gray-100">
              Join us in building a safer, smarter financial ecosystem — one verified customer at a time.
            </p>
          </div>

          {/* Decorative elements on the card */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-600 rounded-full opacity-15"></div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-1/3 w-6 h-6 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-32 right-1/3 w-4 h-4 bg-purple-500 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute bottom-40 left-1/5 w-8 h-8 bg-orange-400 rounded-full opacity-30"></div>
    </div>
  );
};

export default AboutUs;