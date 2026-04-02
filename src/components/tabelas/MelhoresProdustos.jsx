import React from "react";
import { ChevronDown, TrendingDown, TrendingUp } from "lucide-react";
import { melhores_produtos } from "../../data/datas";

export default function MelhoresProdutos() {

    return (
        <section>
            {/* MELHORES PRODUTOS */}
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border
                border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
            >
                <div className="px-5 py-4 border-b border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                Melhores Produtos
                            </h3>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Produtos com melhores perfomaces
                        </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex
                        items-center gap-1 hover:bg-slate-700 p-1 rounded-xl transition-colors mt-1"
                    >
                        View All
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>
                {/* DADOS DINAMICOS */}
                <div className="p-6 space-y-4">
                    { melhores_produtos.map((produto, index) => {
                        return (
                            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50
                                dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                <div className="flex-1" key={ index }>
                                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white py-1">
                                        { produto.nome }
                                    </h4>
                                    <p className="text-xs font-semibold text-slate-800 dark:text-white">
                                        { produto.venda }
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-slate-800 dark:text-white py-1">
                                        { produto.receita }
                                    </p>
                                    <div className="flex items-center space-x-1">
                                        { produto.tendencia === "Up" ? (
                                            <TrendingUp className="w-4 h-4 text-emerald-500" />
                                        ) : (
                                            <TrendingDown className="w-4 h-4 text-red-500" />
                                        )
                                    }
                                        <span className={`text-sm font-medium ${ produto.tendencia === "Up"
                                         ? "text-emerald-500"
                                         : "text-red-500"}`}>{ produto.troca }</span>
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
