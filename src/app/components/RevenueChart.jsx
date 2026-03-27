
"use client";
import { motion } from 'framer-motion';
import { FiTrendingUp, FiDollarSign, FiCalendar } from 'react-icons/fi';

export default function RevenueChart({ data }) {
    const maxValue = Math.max(...data.values);
    const totalRevenue = data.values.reduce((sum, val) => sum + val, 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl border border-gray-800"
        >
            <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
                        <p className="text-gray-400 text-sm mt-1">Monthly revenue trends</p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-2 rounded-xl">
                        <FiTrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-semibold text-green-400">+18.5%</span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-baseline gap-3 mb-8">
                    <div className="p-2 bg-indigo-500/20 rounded-xl">
                        <FiDollarSign className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-white">${totalRevenue.toLocaleString()}</span>
                        <p className="text-gray-400 text-sm mt-1">Total revenue (last 6 months)</p>
                    </div>
                </div>

                {/* Bar Chart */}
                <div className="flex items-end gap-4 h-80">
                    {data.values.map((value, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-3">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${(value / maxValue) * 240}px` }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-xl relative group cursor-pointer"
                            >
                                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                                    ${value.toLocaleString()}
                                </div>
                            </motion.div>
                            <div className="flex items-center gap-1">
                                <FiCalendar className="w-3 h-3 text-gray-500" />
                                <span className="text-xs text-gray-400 font-medium">{data.labels[idx]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}