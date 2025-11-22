import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import ErrorPage from '../ErrorPage/ErrorPage';

export default function ShowAllApps() {
    const [allApps,setAllApps]=useState([])
    const[search, setSearch] = useState("");
    
  

     useEffect(() => {
            fetch("/appData.json")
            .then(res => res.json())
            .then(data => setAllApps(data.apps));
            }, []);

        const filtered = allApps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
)  


  return (
    <div>
      <div className='text-center p-2'>
        <h1 className='font-bold text-2xl'>Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
         <div className='flex'>
           <h2>Apps Found:</h2>
          {
            allApps.length
          }
      </div>

      <div className='flex justify-end'>
      <label className="input">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
      >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
     </g>
     </svg>
       <input 
         onChange={e => setSearch(e.target.value)} 
         type="search" 
         required 
         placeholder="Search" />
      </label>
    </div>

     <div className="p-5">

                {/* ⭐ Search করার পরে যদি রেজাল্ট 0 হয় → Error দেখাবে */}
                {search.length > 0 && filtered.length === 0 ? (
                    <div className="h-screen flex flex-col items-center justify-center text-center">
                        <img 
                            src="/App-Error.png"   
                            alt="Error Image"
                            className="w-40 mb-4"
                        />

                        <h1 className="text-3xl font-bold">
                            Oops, page not found!
                        </h1>

                        <p className='p-5'>
                            The App you are requesting is not found on our system.
                            Please try another apps.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {filtered.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <Link to={`/all-apps/${app.id}`}>
                                    <img
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold">{app.title}</h3>
                                        <p className="text-gray-600 mt-2 text-sm">{app.description}</p>

                                        <div className='flex gap-20'>
                                            <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                                    strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                                                    />
                                                </svg>
                                                <span>{app.downloads}</span>
                                            </div>

                                            <div className="flex items-center gap-1 bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-sm">
                                                ⭐ <span>{app.ratingAvg}</span>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}