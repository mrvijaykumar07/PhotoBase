import React from "react";
import UploadOptions from "./UploadOptions";
import Achievements from "./Achivement";
import SharingSection from "./SharingSection";
import ShareGallery from "./ShareGallery";
import PromoBanner from "./PromoBanner";

const MainPage = () => {
  return (
    <>
    <div className="w-full h-screen bg-[#f8f8f8] flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 mb-6">
        Provide  Memories to your Guests with PhotoBase
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-600 max-w-xl mb-8">
        Design and publish your site in minutes — no code or design skills required.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
          Guest
        </button>
        <button className="border border-gray-400 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Uploder
        </button>
      </div>
    </div>
    <UploadOptions/>
    <Achievements/>
    <SharingSection/>
    <ShareGallery/>
    <PromoBanner/>
    </>
  );
};

export default MainPage;
