import React from "react";
import GrelhaDeEstados from "../components/dashboard/GrelhaDeEstados";
import SessaoDosGraficos from "../sections/SessaoDosGraficos";
import SessaodasTabelas from "../sections/SessaodasTabelas";
import ActividadesAlimentares from "../components/dashboard/ActividadesAlimentares";
import Calendario from "../components/dashboard/Calendario";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <GrelhaDeEstados />
            <SessaoDosGraficos />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                    <SessaodasTabelas />
                </div>
                <div>
                    <ActividadesAlimentares />
                    <Calendario />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
