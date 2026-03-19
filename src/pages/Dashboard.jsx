import React from "react";
import GrelhaDeEstados from "../components/dashboard/GrelhaDeEstados";
import SesaaoDosGraficos from "../components/dashboard/SessaoDosGraficos";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <GrelhaDeEstados />
            <SesaaoDosGraficos />
        </div>
    )
}