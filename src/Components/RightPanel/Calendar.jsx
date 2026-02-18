import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
    const [currentDate] = useState(new Date());

    const days = ["S", "M", "T", "W", "T", "F", "S"];
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // simple mock for days in month
    const getDaysInMonth = () => {
        const days = [];
        for (let i = 1; i <= 30; i++) {
            days.push(i);
        }
        return days;
    };

    const calendarDays = getDaysInMonth();
    const today = currentDate.getDate();

    return (
        <div className="bg-neu-base rounded-2xl p-6 shadow-neu-pressed border border-white/20">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-neu-text font-bold text-lg">{currentMonth} {currentYear}</h3>
                <div className="flex gap-2">
                    <button className="p-1 rounded-lg hover:shadow-neu active:shadow-neu-pressed text-gray-500 hover:text-neu-text transition-all">
                        <ChevronLeft size={18} />
                    </button>
                    <button className="p-1 rounded-lg hover:shadow-neu active:shadow-neu-pressed text-gray-500 hover:text-neu-text transition-all">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center mb-2">
                {days.map((day) => (
                    <div key={day} className="text-xs font-bold text-gray-400">
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day) => {
                    const isToday = day === today;
                    const hasTask = [3, 8, 15, today].includes(day); // Mock data

                    return (
                        <div
                            key={day}
                            className={`
                    w-8 h-8 flex flex-col items-center justify-center rounded-lg text-sm font-medium cursor-pointer transition-all duration-200
                    ${isToday
                                    ? 'bg-neu-base shadow-neu text-neu-accent font-bold'
                                    : 'text-gray-500 hover:bg-white/40 hover:text-neu-text'
                                }
                `}
                        >
                            {day}
                            {hasTask && !isToday && (
                                <div className="w-1 h-1 rounded-full bg-neu-accent/50 mt-0.5"></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;
