'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaPalette, FaVideo, FaChartLine } from 'react-icons/fa';

const categories = [
    { icon: FaLaptopCode, title: 'Web Development', color: 'from-blue-500 to-cyan-500', courses: 24, students: '2.5k', description: 'Build modern websites and applications' },
    { icon: FaPalette, title: 'Graphic Design', color: 'from-purple-500 to-pink-500', courses: 18, students: '1.8k', description: 'Create stunning visual designs' },
    { icon: FaVideo, title: 'Video Editing', color: 'from-red-500 to-orange-500', courses: 12, students: '1.2k', description: 'Master professional video editing' },
    { icon: FaChartLine, title: 'Digital Marketing', color: 'from-green-500 to-emerald-500', courses: 15, students: '2.1k', description: 'Grow your online presence' },
];

const CategorySection = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                    Explore Categories
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
                    What Do You Want to{' '}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        Learn Today?
                    </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Choose from our wide range of categories and start your learning journey
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="group cursor-pointer"
                    >
                        <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                            <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <category.icon className="text-3xl text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{category.description}</p>
                            <div className="flex justify-center gap-4 text-sm">
                                <span className="text-indigo-600 font-semibold">{category.courses} courses</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-600">{category.students} students</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;