import React from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { ordens_recentes } from "../../data/datas";

export default function TabalaDosRecentes() {

    const getStausColor = (estado) => {
        
        switch(estado) {
            case "completo":
                return (
                    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                );
            case "pedido":
                return (
                    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                );
            case "cancelado":
                return (
                    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                );
            default:
                return (
                    "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400"
                )
        }
    }

    return (
        <section>
            {/* ORDENS RECENTES */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
                border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
            >
                <div className="p-5 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Recent Order
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                latest customer order
                            </p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex
                            items-center gap-1 hover:bg-slate-700 px-2 py-1 rounded-full transition-colors">
                            View All
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                {/* TABELA */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                                    Order ID
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                                    Customer
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                                    Produto
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                                    Amount
                                </th>
                                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {ordens_recentes.map((ordem, index) => {
                                return (
                                    <tr className="border-b border-b-slate-200/50 dark:border-slate-700/50
                                        hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                                    >
                                        <td className="p-4" key={ index }>
                                            <span className="text-sm font-medium text-blue text-slate-800 dark:text-slate-400">
                                                { ordem.id }
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm text-slate-800 dark:text-white">
                                                { ordem.cliente }
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm text-slate-800 dark:text-white">
                                                { ordem.produto}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm text-slate-800 dark:text-white">
                                                { ordem.preco}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className={`text-xs px-3 text-slate-400 dark:text-white font-medium
                                                py-1  rounded-full ${getStausColor(ordem.estado)}`}
                                            >
                                                { ordem.data }
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-sm text-slate-800 dark:text-white">
                                                <MoreHorizontal className="w-4 h-4 hover:bg-slate-700 p-0.5 rounded-full" />
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
