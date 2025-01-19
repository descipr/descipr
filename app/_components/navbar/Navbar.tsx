'use client';
import React, { useState } from 'react';
import LogoLink from './LogoLink';
import NavbarLinks from './NavbarLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileDrawer from './MobileDrawer';


const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <nav className=" max-w-7xl w-full relative py-6 hidden md:flex items-center justify-between z-10 mx-auto ">
                <LogoLink />
                <NavbarLinks />
            </nav>
            <nav className="md:hidden relative flex items-center justify-between my-4 z-10 w-full pr-4">
                <LogoLink />
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </nav>
        </>
    );
};

export default Navbar;
