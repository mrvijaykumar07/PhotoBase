import React from "react";
import {
  Sparkles,
  Upload,
  Users,
  ImagePlus,
  Smile,
  Mail,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Memories",
    description:
      "Experience the world's first AI-powered event platform for intelligent photo sorting and delivery.",
  },
  {
    icon: Users,
    title: "Host & Manage Guests",
    description:
      "Add guest lists, send beautiful invites, and track RSVPs seamlessly.",
  },
  {
    icon: Upload,
    title: "Easy Upload for Guests",
    description:
      "Guests can upload photos via WhatsApp or upload their selfies to find their event pictures.",
  },
  {
    icon: ImagePlus,
    title: "Photographer Upload",
    description:
      "Photographers can securely upload all event media in high quality.",
  },
  {
    icon: Smile,
    title: "Personalized Galleries",
    description:
      "AI auto-tags faces, so each guest sees only their photos in a beautiful gallery.",
  },
  {
    icon: Mail,
    title: "Stay Connected",
    description:
      "Guests can download, share or print photos and stay in touch via smart reminders.",
  },
];

const UploadOptions = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          One Platform, Every Memory
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          From hosting to sharing, discover how our smart platform transforms your event experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mb-4 mx-auto">
                  <IconComponent className="w-8 h-8 text-indigo-600" aria-label={feature.title} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UploadOptions;
