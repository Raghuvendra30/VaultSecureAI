import React from 'react';

const SystemFeatures = () => {
  const LightningIcon = () => (
    <div className="w-8 h-8 text-yellow-500">
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 0L8.5 8H13L11 16L15.5 8H11L13 0Z"/>
      </svg>
    </div>
  );

  const DatabaseIcon = () => (
    <div className="w-12 h-8 text-purple-500">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="2" y="3" width="20" height="4" rx="1"/>
        <rect x="2" y="9" width="20" height="4" rx="1"/>
        <rect x="2" y="15" width="20" height="4" rx="1"/>
      </svg>
    </div>
  );

  const CloudUploadIcon = () => (
    <div className="w-12 h-8 text-purple-500">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        <polyline points="16,16 12,12 8,16"/>
        <line x1="12" y1="12" x2="12" y2="21"/>
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Large yellow shape on right */}
        <div className="absolute -right-32 top-0 w-96 h-full bg-yellow-400 transform skew-x-12"></div>
        
        {/* Light blue/gray background shapes */}
        <div className="absolute right-0 top-1/2 w-80 h-64 bg-blue-50 rounded-full opacity-60"></div>
        <div className="absolute right-32 bottom-32 w-32 h-32 bg-yellow-400 rounded-full"></div>
        <div className="absolute right-48 bottom-48 w-24 h-24 bg-white rounded-full border-4 border-blue-100"></div>
        <div className="absolute right-64 bottom-64 w-32 h-32 bg-blue-100 rounded-full opacity-80"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex">
        {/* Left side - Content */}
        <div className="flex-1 px-8 lg:px-16 py-16">
          {/* Header section */}
          <div className="mb-12">
            <p className="text-orange-500 font-medium mb-2 tracking-wide">System features</p>
            <div className="flex items-center gap-4 mb-8">
              <h1 className="text-5xl lg:text-4xl font-bold text-gray-900">
                Powerful features
              </h1>
              <LightningIcon />
            </div>
          </div>

          {/* First feature */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-4">
              <DatabaseIcon />
              <h2 className="text-2xl font-bold text-gray-900">
                Bank Transaction Pattern Anomaly Checker
              </h2>
            </div>
            <div className="max-w-3xl text-gray-700 text-lg leading-relaxed space-y-4">
              <p className="font-medium">
                Quickly identify hidden threats in your transaction data.
              </p>
              <p>
                Our AI engine scans uploaded transaction logs to detect unusual patterns often linked to 
                fraudulent activity — such as micro-deposits, round-trip transactions, and indicators of mule 
                account behavior. By leveraging machine learning, it adapts to evolving tactics and highlights 
                anomalies that traditional systems might miss — enabling your team to act with speed and 
                accuracy.
              </p>
            </div>
          </div>

          {/* Second feature */}
          <div className="mb-16">
            <div className="flex items-start gap-4 mb-4">
              <CloudUploadIcon />
              <h2 className="text-2xl font-bold text-gray-900">
                Loan Fraud Risk Assessor
              </h2>
            </div>
            <div className="max-w-3xl text-gray-700 text-lg leading-relaxed space-y-4">
              <p className="font-medium">
                Smarter risk decisions through AI-driven profiling.
              </p>
              <p>
                This feature analyzes loan applications by evaluating applicant data, behavioral 
                patterns, and fraud-linked attributes to generate a risk score. It identifies 
                inconsistencies, unusual applicant traits, and markers tied to synthetic or high-risk 
                profiles — helping lenders reduce fraud exposure and streamline credit approval 
                processes without compromising security.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Custom Image */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="relative w-96 h-96">
            {/* Custom Image Container */}
            <div className="absolute inset-0 bg-white rounded-2xl p-4 shadow-2xl border-4 border-gray-100">
              <img 
                src="YOUR_IMAGE_URL_HERE" 
                alt="System Features Illustration"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  // Fallback in case image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback content if image fails to load */}
              <div className="w-full h-full bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-lg font-semibold" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <div>Security Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemFeatures;