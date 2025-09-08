// app/components/sections/AboutBanner.tsx
import Image from "next/image";
import banner from "../sections/images/bannerAbout.jpg";
export default function ContactBanner() {
  return (
    <section className="relative w-full h-[510px]">
      {/* Background Image */}
      <Image
        src={banner}
        alt="About Us Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#09241D] opacity-80"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        {/* Breadcrumb */}
        <div className="absolute left-6 top-6 text-sm text-gray-200">
          Home <span className="mx-2">&gt;</span> Contact Us
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        {/* Description */}
        <p className="max-w-2xl text-lg leading-7">
          Have questions or need legal guidance? Our team is here to help. Reach
          out today for trusted support and quick assistance with your legal
          matters.
        </p>
      </div>
    </section>
  );
}
