import { useState, useEffect } from "react";

const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let timer = setInterval(() => {
            start += 1;
            setCount(String(start));
            if (start === end) clearInterval(timer);
        }, 50);

        return () => clearInterval(timer);
    }, [value]);

    return <span className="transition-all duration-300">{value}</span>;
};

const Stats = ({ tasks, isVertical = false }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    // Calculate due today based on category for now, or assume all are due "soon"
    const dueToday = tasks.filter((task) => task.category === "Today tasks").length;

    const stats = [
        { label: "Total Tasks", value: totalTasks, color: "bg-blue-500" },
        { label: "Completed", value: completedTasks, color: "bg-green-500" },
        { label: "Due Today", value: dueToday, color: "bg-purple-500" },
    ];

    return (
        <div className={`grid gap-6 w-full ${isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3 mb-8'}`}>
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`bg-neu-base rounded-2xl shadow-neu hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 active:scale-95 active:shadow-neu-pressed cursor-default relative overflow-hidden group ${isVertical ? 'p-5' : 'p-6'}`}
                >
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${stat.color} opacity-70`}></div>
                    <h3 className={`font-bold text-neu-text tracking-tight mb-1 group-hover:scale-105 transition-transform origin-left ${isVertical ? 'text-2xl' : 'text-4xl'}`}>
                        <AnimatedCounter value={stat.value} />
                    </h3>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;
