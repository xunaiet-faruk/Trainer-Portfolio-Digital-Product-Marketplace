'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaUserGraduate, FaClock, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const courses = [
    {
        id: 1,
        title: 'Complete Web Development Bootcamp',
        description: 'Master HTML, CSS, JavaScript, React, Next.js and build real-world projects',
        price: 49.99,
        originalPrice: 199.99,
        rating: 4.8,
        students: 3240,
        duration: '32 hours',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
        category: 'Development',
        badge: 'Best Seller'
    },
    {
        id: 2,
        title: 'UI/UX Design Masterclass',
        description: 'Learn Figma, Adobe XD, user research, prototyping and design systems',
        price: 39.99,
        originalPrice: 149.99,
        rating: 4.9,
        students: 1850,
        duration: '24 hours',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
        category: 'Design',
        badge: 'Hot & New'
    },
    {
        id: 3,
        title: 'Video Editing Pro with Premiere Pro',
        description: 'Professional video editing, color grading, motion graphics and visual effects',
        price: 44.99,
        originalPrice: 179.99,
        rating: 4.7,
        students: 1240,
        duration: '28 hours',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d7dd?w=500&h=300&fit=crop',
        category: 'Video',
        badge: 'Popular'
    },
    {
        id: 4,
        title: 'Digital Marketing & SEO Mastery',
        description: 'Social media marketing, Google Ads, SEO strategies and analytics',
        price: 34.99,
        originalPrice: 129.99,
        rating: 4.6,
        students: 2780,
        duration: '20 hours',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
        category: 'Marketing',
        badge: 'Trending'
    }
];

const CoursesSection = () => {
    const [hoveredCourse, setHoveredCourse] = useState(null);

    return (
        <div className=" py-20">
            <div className="container  mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                        Top Rated Courses
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
                        Popular{' '}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Courses
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Most loved courses by our community
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            onMouseEnter={() => setHoveredCourse(course.id)}
                            onMouseLeave={() => setHoveredCourse(null)}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCourse === course.id ? 'scale-110' : 'scale-100'}`}
                                />
                                <div className="absolute top-4 left-4 bg-yellow-400 text-gray-400 px-2 py-1 rounded-lg text-xs font-bold">
                                    {course.badge}
                                </div>
                                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                                    {course.category}
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`text-sm ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">({course.rating})</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <FaClock className="text-xs" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaUserGraduate className="text-xs" />
                                        <span>{course.students.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div>
                                        <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
                                        <span className="text-sm text-gray-400 line-through ml-2">${course.originalPrice}</span>
                                    </div>
                                    <button className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center hover:bg-indigo-600 group/btn transition-all duration-300">
                                        <FaShoppingCart className="text-indigo-600 group-hover/btn:text-white transition-colors text-sm" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        View All Courses
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;