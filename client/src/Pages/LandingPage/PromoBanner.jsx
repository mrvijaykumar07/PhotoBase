import { MessageCircle, Star } from "lucide-react"

export default function PromoBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 px-6 md:px-12 rounded-3xl shadow-2xl my-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Star className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">Hurry! Flat 50% Off</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            AI Powered Photo Sharing App for Photographers
          </h2>
          <p className="text-md md:text-lg">
            Request a Demo Today and Experience the Future of Event Management!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="px-5 py-2 rounded-lg bg-white text-indigo-600 font-semibold text-center hover:bg-gray-100 cursor-pointer transition">
            Sign Up
          </div>
          <div className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold text-center flex items-center justify-center gap-2 hover:bg-green-600 cursor-pointer transition">
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </div>
        </div>
      </div>
    </section>
  )
}
