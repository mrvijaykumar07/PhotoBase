import React from "react";
import {
  Camera,
  Send,
  MessageSquareText,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Camera className="w-6 h-6 text-purple-600" />,
    title: "Get photos instantly",
  },
  {
    icon: <Send className="w-6 h-6 text-purple-600" />,
    title: "Instant Sharing with friends",
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-purple-600" />,
    title: "Get photos on WhatsApp",
  },
  {
    icon: <Users className="w-6 h-6 text-purple-600" />,
    title: "Reach every guest",
  },
];

const SharingSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-6 py-16 md:px-24 md:py-20">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            Instant Photo Sharing,<br className="hidden md:block" />
            Powered by AI
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            Event attendees automatically get their photos via facial recognition, delivered instantly on WhatsApp.
          </p>

          {/* Features */}
          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 mb-10">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="bg-purple-100 p-3 rounded-full">
                  {item.icon}
                </div>
                <p className="text-md md:text-lg text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-md px-8 py-3 rounded-xl shadow-md transition-all duration-200">
            Try for Free
          </button>
        </div>

        {/* Optional Right Image Box for Desktop */}
        <div className="hidden md:block w-1/2 h-full">
          <div className="w-full h-96 bg-purple-100 rounded-2xl shadow-inner flex items-center justify-center text-purple-400 text-xl font-semibold">
            {/* Placeholder */}
            AI Sharing Preview
          </div>
        </div>

      </div>
    </section>
  );
};

export default SharingSection;
