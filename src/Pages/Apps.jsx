import React, { Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router';

// import { data } from 'react-router';
const Apps = () => { 
    const [apps, setApps] = useState ([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("/appData.json")
        .then(res => res.json())
        .then(data => setApps(data.apps.slice(0, 8)));
        }, []);
    
    return (
        <div className='p-5 text-center'>
            <div className='text-center py-5 p-5'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
          <div className="p-4">
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {apps.map((app, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 "
      >
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {app.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            {app.description}
          </p>

          <div className='flex gap-20'>
             <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
            />
          </svg>
          <span>{app.downloads}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-sm">
          ⭐ <span>{app.ratingAvg}</span>
        </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div>


           <Link to={'/all-apps'} className='bg-clip bg-gradient-to-r from-[#8452e9] to-[#9e69f0] p-2 rounded-xl text-white text-2xl'>
           Show All App
           </Link>
        </div>
        
    );
};

export default Apps;