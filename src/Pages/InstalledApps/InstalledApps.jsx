import React, { useState } from "react";

const InstalledApps = () => {
  const [installedApps, setInstalledApps] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("installedApps")) || [];
    } catch {
      return [];
    }
  });

  const [sortOption, setSortOption] = useState("size");

  const handleUninstall = (id) => {
    const filtered = installedApps.filter((app) => app.id !== id);
    setInstalledApps(filtered);
    localStorage.setItem("installedApps", JSON.stringify(filtered));
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOption === "size") return a.size - b.size;
    return 0;
  });

  if (installedApps.length === 0) {
    return (
      <div className="text-center py-20 text-xl text-gray-500">
        No apps installed yet.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      
      <div className="flex items-center justify-between mb-6">
        
        <p className="text-lg font-semibold">
          {installedApps.length} App{installedApps.length > 1 ? "s" : ""} Found
        </p>

        <select
          className="border px-3 py-1 rounded-md"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="size">Sort by Size</option>
        </select>
      </div>

      <div className="space-y-4">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 border rounded-lg shadow bg-white dark:bg-gray-900 dark:text-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 object-contain"
              />

              <div>
                <h2 className="text-lg font-bold">{app.title}</h2>

                <div className="flex gap-3 text-sm mt-1">
                  <span className="text-green-600">📥 {app.downloads}</span>
                  <span className="text-yellow-500">⭐ {app.ratingAvg}</span>
                  <span className="text-gray-500">{app.size} MB</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Uninstall
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
