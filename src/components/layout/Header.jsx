import React from "react";
import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun } from "lucide-react";
import imagem from "../../assets/imagens/user.jpg";

export default function Header ({ sidebarCollapsed, onToggleSidebar }) {
    return (
        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b
            border-slate-200/50 dark:border-e-slate-700/50 px-4 py-4"
        >
            <div className="flex items-center justify-between">

                {/* Secção a esquerda do header */}
                <section className="flex items-center space-x-4">
                    <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 
                        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        onClick={onToggleSidebar}
                    >
                        <Menu className="w-5 h-5"/>
                    </button>
                    <div className="hidden md:block">
                        <h1 className="text-mx font-semibold text-slate-800 dark:text-white">
                            Dashboard
                        </h1>
                        <p className="text-xs text-slate-700 dark:text-white">
                            Olá! Bem vindo de volta, Noé!
                        </p>
                    </div>
                </section>

                {/* Secção central do header */}
                <section className="flex-1 max-w-md mx-8">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2
                            text-slate-400"
                        />
                        <input
                            type="search"
                            placeholder="Pesquisa qualquer coisa..."
                            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border
                                border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 
                                dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2
                                focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5
                            text-slate-400 hover:text-slate-600 dark:hover-text-slate-300"
                        >
                            <Filter className="w-5 h-5 text-slate-400"/>
                        </button>
                    </div>
                </section>

                {/* Secção a direita do header */}
                <section className="flex items-center space-x-3">
                    <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r
                        from-blue-500 to-purple-600 text-white rounded-xl hover:shadow transition-all"
                    >
                        <Plus className="w-4 h-4" />
                        <span className="text-sm font-medium">News</span>
                    </button>

                    {/* Alternar tema */}
                    <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <Sun className="w-6 h-6" />
                    </button>

                    {/* Notificações */}
                    <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <Bell className="w-6 h-6" />
                        <span className="absolute -top-1 w-6 h-6 bg-red-500 text-white text-xs
                            rounded-full flex items-center justify-center"
                        >
                            5
                        </span>
                    </button>

                    {/* Definições */}
                    <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <Settings className="w-6 h-6" />
                    </button>

                    {/* Perfil do usuario */}
                    <article className="flex items-center space-x-3 pl-3 border-l border-slate-200
                        dark:border-slate-700"
                    >
                        <img 
                            src={imagem}
                            alt="Usuario" 
                            className="w-8.5 h-8.5 rounded-full ring-2 ring-blue-500" 
                        />
                        <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
                            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            <ChevronDown className="w-5 h-5" />
                        </button>
                        
                    </article>
                </section>
            </div>
        </div>
    )
}