import Stats from "../MainPanel/Stats";
import Calendar from "./Calendar";

const RightPanel = ({ tasks }) => {
    return (
        <aside className="lg:sticky lg:top-6 h-fit w-full p-6 lg:border-l lg:border-[#d1d9e6]/50 lg:pr-8 space-y-6">

            {/* Quick Stats */}
            <section>
                <h3 className="text-neu-text font-bold text-sm uppercase tracking-wider mb-4 px-1">Overview</h3>
                <Stats tasks={tasks} isVertical={true} />
            </section>

            {/* Calendar */}
            <section>
                <h3 className="text-neu-text font-bold text-sm uppercase tracking-wider mb-4 px-1">Schedule</h3>
                <Calendar />
            </section>

        </aside>
    );
};

export default RightPanel;
