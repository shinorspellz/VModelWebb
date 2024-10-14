import React from 'react';

const RegisterSuccess: React.FC= () => {
    return (



        <div  className="flex flex-colflex flex-col p-8 lg:p-16">
            <h2 className="text-3xl text-primary font-bold mb-4">Sign up</h2>
           
            <button
                type="submit"
              
                className="mt-4  p-3 bg-primary text-white rounded-[10px] transition"
            >
                Continue on app
            </button>
        </div>

    );
};

export default RegisterSuccess;
