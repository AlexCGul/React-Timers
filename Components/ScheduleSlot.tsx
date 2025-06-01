export default function ScheduleSlot({ title, delay, duration, key }: { title: string; delay: number; duration: number, key: number }) {
    return (
        <div key={key} className="bg-gray-800 text-text p-4 rounded-lg mb-4 flex flex-row">
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p>Delay: {delay} seconds</p>
                <p>Duration: {duration} seconds</p>
            </div>

            <div className="bg-gray-800 text-text p-4 rounded-lg mb-4 flex flex-col">
                <button> ↑ </button>
                <button> ↓ </button>
            </div>
        </div>
    );
}