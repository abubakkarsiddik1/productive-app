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
        <div>
            <div className='text-center py-5'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
          <div className="p-4">
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {apps.map((app, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
            View
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


              <Link to={'/all-apps'}>Show All App</Link>
           
        </div>
    );
};

export default Apps;