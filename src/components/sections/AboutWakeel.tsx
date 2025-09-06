import React from 'react';
import { Users, Target, Scale, Shield, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

interface FeatureItem {
  title: string;
  description: string;
}

interface AppFeature {
  text: string;
}

const Responsive: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Our Mission",
      description: "Empowering Your Legal Journey - At our app, our mission is simple - to empower individuals with reliable legal advice and support. We believe in demystifying the complexities of the law, making it accessible to everyone, anytime, and anywhere."
    },
    {
      title: "Our Team",
      description: "Experts You Can Trust - Meet the dedicated team of skilled attorneys behind our app. With a passion for justice and a commitment to excellence, our experts are here to guide you through your legal challenges and ensure your rights are protected."
    }
  ];

  return (
    <div className="space-y-3 max-w-md">
      {features.map((feature, index) => (
        <div key={index} className="group">
          <div className="flex items-start space-x-3 mb-3">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
              {feature.title}
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const AboutWakeel: React.FC = () => {
  const appFeatures: string[] = [
    "Experienced attorneys",
    "Making legal guidance just a tap away",
    "24/7 Legal Support",
    "Secure & Confidential"
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden" style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
      {/* Background Images */}
      {/* Top right corner transparent image */}
      <div className="absolute top-0 w-48 h-48 opacity-10">
        <Image
          src="/images/df0d.png"
          alt="Background decoration"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Left bottom corner image */}
      <div className="absolute bottom-0 -left-16 w-[300px] h-[250px]">
        <Image
          src="/images/df0d.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Right bottom corner image */}
      <div className="absolute -bottom-8 right-0 w-[220px] h-[250px]">
        <Image
          src="/images/d411.png"
          alt="Background decoration"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        {/* About Us Badge */}
        <div className="text-center mb-2 ml-32">
          <span className="inline-block text-yellow-600 font-extrabold text-sm px-4 py-1 rounded-full">
            About Us
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Phone Image */}
          <div className="relative flex justify-center lg:justify-start">
  <div className="relative w-[500px] h-[550px] ml-44"> {/* adjust size here */}
    <div className="rounded-2xl overflow-hidden inline-block">
      <Image 
        src="/images/Profile.png"
        alt="Wakeel App Interface"
        fill   
        className="object-cover rounded-2xl"
      />
    </div>
  </div>
</div>

          {/* Right Side - Content */}
          <div className="space-y-3 max-w-md pr-8">
            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                About Wakeel App
              </h1>
            </div>

            {/* Our App Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-800">Our App</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access Legal Expertise at Your Fingertips. Discover the ultimate online legal advisor that puts the power of legal knowledge in your hands. Our app provides instant access to:
              </p>
              
              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {appFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission & Team */}
            <div className="space-y-6">
              <Responsive />
            </div>
          </div>
        </div>

        {/* Bottom Section - Judge Gavel Image */}
        <div className="flex justify-top">
          <div className="absolute -top-10 -right-6 w-[150px] h-[150px]">
            <Image
              src="/images/db1c.png" // Replace with your gavel image path
              alt="Justice gavel"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWakeel;