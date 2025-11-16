import React, { useEffect, useState } from 'react';

// import { data } from 'react-router';
const Apps = () => { 
    const [allApps, setAllApps] = useState ([]);
    console.log(allApps);

    useEffect(() => {
        fetch("/appData.json")
        .then(res => res.json())
        .then(data => setAllApps(data.apps.slice(0, 8)));
        }, []);

    return (
        <div>
            
            <div className='text-center py-5'>
                <h1 className='text-3xl font-bold'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
           
           <div className='flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
             {
                allApps.map(app => (<div key={app.id}>{app.title}

                <img
               src={app.image}
               alt={app.title}
               className="w-full h-40 object-cover rounded-lg"/>

                </div>))
               
            }
           </div>
        </div>
    );
};

export default Apps;