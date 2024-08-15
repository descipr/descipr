import Link from 'next/link';
import React from 'react';

const NavbarLinks: React.FC = () => {
    return (
        <ul className="flex flex-row items-center gap-8">
            <li className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal">
                <Link href="#fellowship">Fellowship</Link>
            </li>
            <li className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal">
                <Link href="#reviews">Reviews</Link>
            </li>
            <li className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal">
                <Link href="#">Blogs</Link>
            </li>
            <li className="text-md hover:text-gray-500 text-white font-Plus-jakarta font-normal">
                <Link href="#">Podcast</Link>
            </li>
        </ul>
    );
};

export default NavbarLinks;