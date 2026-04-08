import React from "react";
import { ChevronDown, Clock } from "lucide-react";
import { atividades } from "../../data/datas";

export default function ActividadesAlimentares() {
    return (
        <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
            border-slate-200/50 dark:border-slate-700/50"
        >
            <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
                <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Atividade Alimentar
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Atividades recentes do sistema.
                    </p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex
                    items-center gap-1 hover:bg-slate-700 px-2 py-1 rounded-full transition-colors">
                    View All
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    { atividades.map((atividade) => {
                        return (
                            <div className="flex items-start space-x-4 p-3 rounded-xl hover:bg-slate-50
                                dark:hover:bg-slate-800/50 transition-colors cursor-default"
                            >
                                <div className={`p-2 rounded-lg ${atividade.bgColor}`}>
                                    <atividade.icon className={`w-5 h-5 ${atividade.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                                        { atividade.title }
                                    </h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                        { atividade.descricao }
                                    </p>
                                    <div className="flex items-center-safe space-x-1 mt-1">
                                        <Clock className="w-3 h-3 text-slate-400" />
                                        <span className="text-xs text-slate-500 dark:text-slate-400">
                                            { atividade.tempo }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
