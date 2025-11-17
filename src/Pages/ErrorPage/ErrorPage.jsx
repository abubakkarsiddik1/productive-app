import React from 'react';
import { Link, useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
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
                The App you are requesting is not found on our system.  please try another apps
            </p>

            <div className='bg-transparent bg-clip bg-gradient-to-r from-[#8452e9] to-[#9e69f0] p-2 rounded-xl text-white text-2xl'>
                <Link onClick={() => navigate(-1)}  to={"/Go-Back"}>Go Back!</Link>
            </div>

        </div>
    );
};

export default ErrorPage;
