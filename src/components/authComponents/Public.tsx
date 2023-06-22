import { useState } from 'react';
import Logo from '../Logo';

const Public = () => {
    const [year] = useState(new Date().getFullYear());

    const content = (
        <section className="h-screen flex flex-col justify-center items-center border-t-8 border-blue-700">
            <Logo />
            <h1 className="text-4xl mb-16 mt-6">Welcome to Smart Coach!</h1>
            <div className="flex mb-20">
                <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded mr-4">
                    <a href="./register">Create an Account</a>
                </button>
                <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    <a href="./login">Login</a>
                </button>
            </div>
            <footer className="fixed bottom-0 left-0 w-full bg-white text-black text-center py-2 border-b-8 border-blue-700">
                © {year} - Developed by Company
            </footer>
        </section>
    );

    return content;
};

export default Public;
