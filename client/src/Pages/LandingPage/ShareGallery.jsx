import React from "react";
import { GalleryHorizontal, Lock, Camera, Share2, Download, Film, Palette } from "lucide-react";

const features = [
  {
    icon: <GalleryHorizontal className="w-6 h-6 text-purple-600" />,
    title: "Beautiful Cloud Gallery",
    desc: "Stun your guests with effortless galleries. No login needed.",
  },
  {
    icon: <Camera className="w-6 h-6 text-pink-500" />,
    title: "AI Facial Recognition",
    desc: "Each guest gets their own photos instantly via WhatsApp.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-blue-600" />,
    title: "Social Media Sharing",
    desc: "Share memories with one click on Instagram, Facebook, and more.",
  },
  {
    icon: <Download className="w-6 h-6 text-green-600" />,
    title: "Download Control",
    desc: "Enable or disable downloads with one setting.",
  },
  {
    icon: <Film className="w-6 h-6 text-red-500" />,
    title: "4K Videos & Netflix-style Gallery",
    desc: "High-quality visuals and cinematic browsing experience.",
  },
  {
    icon: <Palette className="w-6 h-6 text-yellow-500" />,
    title: "Multiple Themes",
    desc: "Personalize your gallery to match the event vibe.",
  },

];

export default function ShareGallery() {
  return (
    <section className="py-16 px-4 md:px-12 bg-whitebg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Share Event Media with a Beautiful Cloud Gallery
        </h2>
        <p className="mt-4 text-lg text-gray-800 ">
          Everything your guests need, delivered instantly. Stunning design, smart features.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 p-6 rounded-2xl border border-gray-200 shadow-sm bg-gray-200 hover:shadow-md transition"
          >
            <div className="shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600  text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
