import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllApps() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => setApps(data.apps))
      .catch(() => console.log("error"));
  }, []);

  const firstEight = apps.slice(0, 8);

  return (
    <div className="p-6">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* Apps Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {firstEight.map((app, index) => (
          <Link 
            to={`/all-apps/${app.id}`}   // ← ROUTE WORKS NOW
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold dark:text-gray-100">
                {app.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {app.description}
              </p>

              <div className="flex items-center justify-between mt-3">
                {/* Downloads */}
                <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-sm">
                  <img className="h-4" src="icon-downloads.png" alt="" />
                  <span>{app.downloads}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-sm">
                  ⭐ <span>{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>

      <div className="text-center pt-4">
        <Link
          to={"/all-apps"} 
          className="bg-transparent bg-clip bg-gradient-to-r from-[#8452e9] to-[#9e69f0] p-2 rounded text-white"
        >
          Show All Apps
        </Link>
      </div>
    </div>
  );
}
