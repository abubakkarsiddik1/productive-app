
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center py-5'>
                <h1 className='text-4xl font-bold'>We Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8452e9] to-[#9e69f0] " >Productive</span> Apps</h1>
                <p className='py-5'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

              <div className="flex justify-center flex-col sm:flex-row gap-4 mt-8 mb-7">

      {/* Google Play Button */}
      <a
        href="https://play.google.com/store/apps/details?id=YOUR_APP_ID"
        target="_blank"
        className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition"
      >
        {/* Google Play Icon */}
 <img src='./play.png' alt="Google Play Store" width={30} />


        <div className="text-left">
          <p className="text-sm font-semibold -mt-1">Google Play</p>
        </div>
      </a>

      {/* App Store Button */}
      <a
        href="https://apps.apple.com/app/idYOUR_APP_ID"
        target="_blank"
        className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition"
      >
        {/* Apple Icon */}
        <svg width="28" viewBox="0 0 384 512" fill="white">
          <path d="M318.7 268c-.3-37 16.4-65.1 50-85-18.8-27.6-47.2-43-84.7-46-35.5-2.8-74.3 20.7-88.3 20.7-14.4 0-47.3-19.9-73.1-19.9C61.6 140.8 0 198.3 0 288.5c0 27.4 4.9 55 14.8 82.6 13.1 37.9 60.4 130.4 109.7 129.1 25.4-.6 43.2-18.1 75.9-18.1 32 0 49.3 18.1 75.4 17.6 49.6-.7 92.3-82.7 105.3-120.7-66.9-30.6-62.4-112.6-62.4-166z"/>
        </svg>

        <div className="text-left">
          <p className="text-sm font-semibold -mt-1">App Store</p>
        </div>
      </a>

    </div>

            <div>
                <img src="./hero.png" alt="" />
            </div>
            
     <section
      className="w-full py-16 bg-gradient-to-r from-[#8452e9] to-[#9e69f0] text-white text-center"
    >
      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Trusted By Millions, Built For You
      </h2>

      {/* Stats Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Total Downloads */}
        <div>
          <p className="text-sm text-white/80 mb-2">Total Downloads</p>
          <h3 className="text-4xl font-bold mb-1">29.6M</h3>
          <p className="text-xs text-white/70">21% More Than Last Month</p>
        </div>

        {/* Total Reviews */}
        <div>
          <p className="text-sm text-white/80 mb-2">Total Reviews</p>
          <h3 className="text-4xl font-bold mb-1">906K</h3>
          <p className="text-xs text-white/70">46% More Than Last Month</p>
        </div>

        {/* Active Apps */}
        <div>
          <p className="text-sm text-white/80 mb-2">Active Apps</p>
          <h3 className="text-4xl font-bold mb-1">132+</h3>
          <p className="text-xs text-white/70">31 More Will Launch</p>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Banner;