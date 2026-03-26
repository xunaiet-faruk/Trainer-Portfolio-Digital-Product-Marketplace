import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="shadow-md sticky top-0 z-50 ">
                <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Xunaiet
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/courses" className="hover:text-primary transition">Courses</Link>
                        <Link href="/templates" className="hover:text-primary transition">Templates</Link>
                        <Link href="/cart" className="hover:text-primary transition">Cart</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition">
                            Login
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;