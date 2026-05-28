import React from 'react';
import { Eye, FileCheck, Search, MessageCircle, Target } from 'lucide-react';

const PersonalizedServices = () => {
  const services = [
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Transaction Monitoring Services",
      description: "Detect unusual patterns like micro-deposits or mule accounts — just upload your transaction logs and let AI do the work."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-500" />,
      title: "Loan Application Risk Scoring",
      description: "Instantly assess the risk of loan applications using AI-driven fraud signals and behavioral insights."
    },
    {
      icon: <Search className="w-8 h-8 text-green-500" />,
      title: "Custom Fraud Detection Integrations",
      description: "We tailor our AI tools to fit your workflows and compliance needs — no matter how complex."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Advisory & Support",
      description: "From setup to optimization, our experts help you fight fraud smarter — and stay ahead of threats."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Personalized Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalizedServices;
