"use client"
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();

    const isActive = (path) => {
        return pathname === path;
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Templates', path: '/tamplates' },
        { name: 'Cart', path: '/cart' },
        { name: 'Admin', path: '/admin' },
    ];

    return (
        <div>
            <header className="shadow-md bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition"
                        >
                            Xunaiet
                        </Link>
                    </motion.div>

                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-4 py-2 transition-all duration-300 group ${isActive(item.path)
                                        ? 'text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text font-semibold text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10">{item.name}</span>

                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full text-white"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}

                                {!isActive(item.path) && (
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full group-hover:w-full transition-all duration-300"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="px-5 py-2 text-xl rounded-lg font-medium transition-all duration-300 border border-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:border-indigo-500/50"
                        >
                            Login
                        </Link>
                    </motion.div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;