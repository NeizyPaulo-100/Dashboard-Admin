import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { vendas_data } from "../../data/datas";

export default function GraficoDeVendas() {

    return (
        <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border
            border-slate-200/50 dark:border-slate-700/50"
        >
            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                    Vendas por Categoria
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Distribuição da Produção
                </p>
            </div>
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={vendas_data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            nameKey="name"                      
                        >
                            
                        </Pie>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                border: "none",
                                borderRadius: "12px",
                                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)"
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="space-y-1">
                { vendas_data.map((item, index) => {
                    return (
                        <div className="flex items-center justify-between cursor-default 
                            hover:bg-slate-700 p-1 rounded-xl"
                            key={ index }
                        >
                            <div className="flex itme-sce space-x-3">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: item.fill }}
                                >
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                    {item.name}
                                </span>
                            </div>
                            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                {item.value}%
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
