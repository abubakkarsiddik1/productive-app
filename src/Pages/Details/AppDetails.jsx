import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import RatingsChart from "../RatingsChart/RatingsChart";

export default function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const isInstalled = () => {
  const stored = JSON.parse(localStorage.getItem("installedApps")) || [];
  return stored.some(item => item.id === app.id);
};

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.apps.find((item) => item.id === Number(id));
        setApp(found);
      })
      .catch(() => console.log("error"));
  }, [id]);


  const handleInstall = () => {
  const stored = JSON.parse(localStorage.getItem("installedApps")) || [];

  // Check if already installed
  const exists = stored.some(item => item.id === app.id);
  if (exists) {
    alert('app already instaled')
    return;
  }

  const updated = [...stored, app];

  localStorage.setItem("installedApps", JSON.stringify(updated));

  alert("App installed successfully!");
};

  if (!app) {
    return <p className="text-center p-10 text-xl">Loading…</p>;
  }

  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">

      {/* ================= TOP SECTION (Your Given Layout) ================= */}
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">

        <div className="flex items-start gap-8 border-b pb-6">

          {/* LEFT: APP IMAGE */}
          <img
            src={app.image}
            alt={app.title}
            className="w-40 h-40 object-contain"
          />

          {/* RIGHT SIDE */}
          <div className="flex-1">

            {/* App Title */}
            <h1 className="text-3xl font-bold">{app.title}</h1>

            {/* Developer */}
            <p className="text-gray-500 text-sm mt-1">
              Developed by{" "}
              <span className="text-[#632EE3] font-medium">productive.io</span>
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-12 mt-6">

              {/* Downloads */}
              <div className="text-center">
                <p className="text-green-600 text-sm">Downloads</p>
                <p className="text-3xl font-bold">{app.downloads}</p>
              </div>

              {/* Rating */}
              <div className="text-center">
                <p className="text-orange-500 text-sm">⭐ Average Ratings</p>
                <p className="text-3xl font-bold">{app.ratingAvg}</p>
              </div>

              {/* Reviews */}
              <div className="text-center">
                <p className="text-purple-600 text-sm">Total Reviews</p>
                <p className="text-3xl font-bold">{app.reviews}</p>
              </div>
            </div>

            {/* Install Button */}
            <button
  onClick={handleInstall}
  disabled={isInstalled()}
  className="mt-6 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md font-semibold"
>
  {isInstalled() ? `Installed (${app.size} MB)` : `Install Now (${app.size} MB)`}
</button>
          </div>
        </div>
       

        {/* Ratings Chart */}
        <RatingsChart ratings={app.ratings} />
          <div className="">
        <p>{app.description}</p>
      </div>
      </div>


    


    </div>
  );
}
