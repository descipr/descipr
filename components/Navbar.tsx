'use client';
import React, { useState } from 'react';
import NavbarLinks from './ui/NavbarLinks';
import LogoLink from './ui/LogoLink';
import LoginButton from './ui/LoginButton';
import MobileMenuButton from './ui/MobileMenuButton';
import MobileDrawer from './ui/MobileDrawer';

const Navbar: React.FC = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    return (
        <>
            <nav className=" max-w-7xl w-full relative py-6 hidden md:flex items-center justify-between z-10 mx-auto">
                <LogoLink />
                <NavbarLinks />
                <LoginButton />
            </nav>
            <nav className="md:hidden relative flex items-center justify-between my-4 z-10 w-full">
                <LogoLink />
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </nav>
        </>
    );
};

export default Navbar;
