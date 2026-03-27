import React from "react";
import GraficoDeReceitas from "../components/dashboard/GraficoDeReceitas";
import GraficoDeVendas from "../components/dashboard/GraficoDeVendas";

export default function SessaoDosGraficos() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
                <GraficoDeReceitas />
            </div>
            <div className="space-y-6">
                <GraficoDeVendas />
            </div>
        </div>
    )
}
