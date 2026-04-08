import React from "react";
import Calendar from "react-calendar";

export default function Calendario() {
    const [date, setDate] = React.useState(new Date());
    return (
        <section className="mt-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
            border-slate-200/50 dark:border-slate-700/50"
        >
            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6 border-b 
                border-slate-200/50 dark:border-slate-700/50 p-6">Calendário</h2>
            <div className="p-4">
                <Calendar
                    value={date}
                    onChange={setDate}
                    className="text-lg text-slate-800 dark:text-slate-200/90"
                    tileClassName={({ date, view }) => {
                        if (view === "month") {
                            if (date.toDateString() === new Date().toDateString()) {
                                return "bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full"
                            }
                        }
                    }}
                />
            </div>
        </section>
    )
}
