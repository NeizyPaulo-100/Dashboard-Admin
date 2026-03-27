import React from "react";
import GrelhaDeEstados from "../components/dashboard/GrelhaDeEstados";
import SessaoDosGraficos from "../sections/SessaoDosGraficos";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <GrelhaDeEstados />
            <SessaoDosGraficos />
        </div>
    )
}