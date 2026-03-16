import React, { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { menu_items } from "../../data/datas";
import imagem from "../../assets/imagens/user.jpg";

export default function Sidebar ({ collapsed, onToggle, currentPage, onPageChange }) {

    const [expandedItems, setExpandedItems] = useState(new Set([""]));

    const toggleExpanded = (itemId) => {
        const newExpanded = new Set(expandedItems);

        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        }
        else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };

    return (
        <div 
            className={`${collapsed ? "w-20 p-0" : "w-70"} transition-all duration-300 ease-in-out 
            bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 
            dark:border-slate-700/50 flex flex-col relactive z-10`}
        >
            {/* Logotipo */}
            <div className={`${collapsed ? "py-4.5 px-0" : "p-3.5"} border-b border-slate-200/50  dark:border-slate-700/50`}>
                <div className="flex items-center space-x-3 pl-3.5">
                    <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl
                        flex items-center justify-center shadow-lg"
                    >
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    {/* Redirecionamento condicional */}
                    {!collapsed && (
                        <div>
                            <h1 className="text-lg font-bold  text-slate-800 dark:text-slate-100">
                                Nexus
                            </h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Painel Admin
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Navegação vira dinamicamente */}
            <nav 
                className="flex-1 p-4 space-y-2 overflow-auto"
                style={{ overflow: "auto", msOverflowStyle: "none", scrollbarWidth: "none"}}
            >
                {menu_items.map((item) => {
                    return(
                        <div key={item.id}>
                        <button className={`w-full flex items-center justify-between p-3 rounded-xl
                            transition-all duration-200 ${currentPage === item.id || item.active ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md shadow-blue-500/25"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}
                            onClick={() => {
                                if (item.sub_menu) {
                                    toggleExpanded(item.id);
                                } else {
                                    onPageChange(item.id);
                                }
                            }}
                        >
                            <div className="flex items-center space-x-3">
                                <item.icon className="w-5 h-5 text-slate-800 dark:text-slate-300"/>

                                    {!collapsed && (
                                        <>
                                            <span className="font-medium ml-2 text-slate-800 dark:text-slate-300">
                                                {item.label}
                                            </span>

                                            {item.badge && (
                                                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 
                                                    text-xs font-medium leading-none text-white bg-red-500 rounded-full"
                                                >
                                                    {item.badge}
                                                </span>
                                            )}
                                            {item.count && (
                                                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 
                                                    text-xs font-medium leading-none text-slate-600 dark:text-slate-300 
                                                    bg-slate-200 dark:bg-slate-700 rounded-full"
                                                >
                                                    {item.count}
                                                </span>
                                            )}
                                        </>
                                    )}
                            </div>
                            {!collapsed && item.sub_menu && (
                                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform`} />
                            )}
                        </button>
                        {/* Submenu */}
                        {!collapsed && item.sub_menu && expandedItems.has(item.id) && (
                            <div className="ml-8 mt-2 space-y-1">
                                {item.sub_menu.map((subItem) => {
                                    return (
                                        <button key={subItem.id} 
                                            className="w-full text-left p-2 text-sm text-slate-600 
                                            dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200
                                            hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                                        >
                                            {subItem.label}
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                    )
                })}
            </nav>

            {/* Perfil do usuario */}
            <div className="p-3 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center space-x-3  p-2 rounded-xl bg-slate-50
                    dark:bg-slate-800/50"
                >
                    <img 
                        src={imagem}
                        alt="Usuario" 
                        className="w-10 h-10 rounded-full ring-2 ring-blue-500"
                    />
                    {!collapsed && (
                        <div className="flex-1 min-w-0">
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-800 dark:text-white 
                                    truncate"
                                >
                                    Noé Paulo
                                </p>
                                <p className="text-sx text-slate-500 dark:text-slate-400 truncate">
                                    Administrador
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
